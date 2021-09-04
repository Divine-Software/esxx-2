import { DatabaseURI, DBColumnInfo, DBDriver, DBError, DBMetadata, DBQuery, DBResult, DBTransactionParams, q } from '@divine/uri';
import { SqliteError } from 'better-sqlite3';
import { Worker } from 'worker_threads';
import type { ExecuteQueryResult, SQLiteWorkerMessage, SQLiteWorkerResult } from './sqlite-worker';

export class SQLiteConnectionPool extends DBDriver.DBConnectionPool {
    constructor(dbURI: DatabaseURI) {
        super(dbURI);
    }

    protected async _createDBConnection(): Promise<DBDriver.DBConnection> {
        return new SQLiteDatabaseConnection(this.dbURI);
    }
}

interface SQLiteMessage {
    message: SQLiteWorkerMessage;
    resolve(result: SQLiteWorkerResult): void;
    reject(error: Error): void;
}

class SQLiteDatabaseConnection implements DBDriver.DBConnection {
    private _dbPath: string;
    private _worker: Worker;
    private _error?: Error;
    private _messages: SQLiteMessage[] = [];
    private _current?: SQLiteMessage;
    private _online = false;
    private _tlevel = 0;
    private _savepoint = 0;

    constructor(dbURI: DatabaseURI) {
        this._dbPath = decodeURIComponent(dbURI.pathname);
        this._worker = new Worker(require.resolve('./sqlite-worker'))
            .on('online',       ()       => this._transmitNext(true))
            .on('message',      (value)  => this._handleResult(value))
            .on('error',        (error)  => this._handleResult(null, error))
            .on('messageerror', (error)  => this._handleResult(null, error))
            .on('exit',         (code)   => this._handleResult(null, new Error(`Worker exited with code ${code}`)))
        ;
    }

    private async _execute<T extends ExecuteQueryResult>(message: SQLiteWorkerMessage): Promise<T> {
        const result = await new Promise<SQLiteWorkerResult>((resolve, reject) => {
            this._messages.push({ message, resolve, reject });

            if (this._messages.length === 1) {
                this._transmitNext();
            }
        });

        if (result.type === 'error') {
            throw typeof result.code === 'string' ? new SqliteError(result.message, result.code) : new Error(result.message);
        }
        else if (result.type !== message.type) {
            throw new Error(`Unexpected result type ${result.type}`);
        }

        return result as T;
    }

    private _transmitNext(isOnline?: boolean) {
        this._online = isOnline ?? this._online;

        if (this._online) {
            this._current = this._messages.shift();

            if (this._current) {
                if (this._error) {
                    this._handleResult(null, this._error); // Reject immediately
                }
                else {
                    this._worker.postMessage(this._current.message); // Send to worker
                }
            }
        }
    }

    private _handleResult(response: SQLiteWorkerResult | null, error?: Error): void {
        error ??= this._error;

        if (error) {
            this._error = error;
            this._current?.reject(error);
        }
        else {
            this._current?.resolve(response!);
        }

        this._transmitNext();
    }

    async open() {
        await this._execute({
            type:     'open',
            dbPath:   this._dbPath,
            params:   { },
        });
    }

    async close() {
        try {
            await this._execute({ 'type': 'close' });
        }
        finally {
            await this._execute({ 'type': 'shutdown' }).catch(() => 0);
            await this._worker.terminate().catch(() => 0);
        }
    }

    async query<T>(query: DBQuery): Promise<T[] & DBMetadata> {
        const text = query.toString(() => '?');

        if (query.batches.length > 1) {
            throw new TypeError(`Batch queries not supported`);
        }

        try {
            const b0 = query.batches[0].map(convertObjectToString);
            const rs = await this._execute<ExecuteQueryResult>({ type: 'execute', query: text, params: b0 });
            const dr = new SQLiteResult(this._dbPath, rs);

            return dr.toObjects([ dr ]);
        }
        catch (err) {
            throw err instanceof SqliteError ? new DBError(err.code, 'HY000', 'Query failed', err, query) : err;
        }
    }

    async transaction<T>(dtp: DBTransactionParams, cb: () => Promise<T> | T): Promise<T> {
        const level = this._tlevel++;

        try {
            if (level === 0) {
                const retries = dtp.retries ?? 8;
                const backoff = dtp.backoff ?? ((count) => (2 ** count - Math.random()) * 100);

                for (let retry = 0; /* Keep going */; ++retry) {
                    await this.query(dtp.begin ?? q`begin`);

                    try {
                        const result = await cb();
                        await this.query(q`commit`);
                        return result;
                    }
                    catch (err) {
                        await this.query(q`rollback`);

                        if (err instanceof DBError && err.status === 'SQLITE_BUSY' && retry < retries) {
                            // Sleep a bit, then retry
                            await new Promise((resolve) => setTimeout(resolve, backoff(retry)));
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
            else {
                const savepoint = `_${level}_${this._savepoint++}`;

                await this.query(q.raw(`savepoint ${savepoint}`));

                try {
                    const result = await cb();
                    await this.query(q.raw(`release savepoint ${savepoint}`));
                    return result;
                }
                catch (err) {
                    await this.query(q.raw(`rollback to savepoint ${savepoint}`));
                    throw err;
                }
            }
        }
        finally {
            this._tlevel--;
        }
    }

    reference(dbURI: DatabaseURI): DBDriver.DBReference {
        return new SQLiteReference(dbURI);
    }
}

export class SQLiteResult extends DBResult {
    constructor(dbPath: string, rs: ExecuteQueryResult) {
        super(rs.columns?.map((c) => ({
            label:         c.name,
            table_catalog: (c.database && dbPath) ?? undefined,
            table_schema:  c.database ?? undefined,
            table_name:    c.table    ?? undefined,
            column_name:   c.column   ?? undefined,
            data_type:     c.type     ?? undefined,
        })) ?? [], rs.rows ?? []);
    }

    async updateColumnInfo(): Promise<DBColumnInfo[]> {
        return this.columns;
    }
}

export class SQLiteReference extends DBDriver.DBReference {
    getSaveQuery(value: unknown): DBQuery {
        const [ _scope, objects ] = this.checkSaveArguments(value, true);
        const columns = this.columns ?? Object.keys(objects[0]);

        return q`\
insert into ${this.getTable()} as _dst_ ${q.values(objects, this.columns)} \
on conflict (${this.getKeys()}) do update set ${
    q.join(',', columns.map((column) => q`${q.quote(column)} = "excluded".${q.quote(column)}`))
} returning *`;
    }

    getAppendQuery(value: unknown): DBQuery {
        return q`${super.getAppendQuery(value)} returning *`;
    }
}

function convertObjectToString(value: unknown): unknown {
    if (value instanceof Date) {
        return value.toISOString();
    }
    else if (value && typeof value === 'object') {
        return JSON.stringify(value);
    }
    else {
        return value;
    }
}