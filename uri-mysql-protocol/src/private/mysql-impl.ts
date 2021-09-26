import { BasicCredentials, DatabaseURI, DBColumnInfo, DBDriver, DBError, DBMetadata, DBQuery, DBResult, DBTransactionParams, q } from '@divine/uri';
import { createConnection, Connection, ConnectionOptions, ResultSetHeader, FieldPacket, RowDataPacket, OkPacket } from 'mysql2/promise';

export class MyConnectionPool extends DBDriver.DBConnectionPool {
    constructor(dbURI: DatabaseURI, private _getCredentials: () => Promise<BasicCredentials | undefined>) {
        super(dbURI);
    }

    protected async _createDBConnection(): Promise<DBDriver.DBConnection> {
        return new MyDatabaseConnection(this.dbURI, await this._getCredentials());
    }
}

class MyDatabaseConnection implements DBDriver.DBConnection {
    private _client?: Connection;
    private _version!: string;
    private _tlevel = 0;
    private _savepoint = 0;

    constructor(private _dbURI: DatabaseURI, private _creds?: BasicCredentials) {
    }

    async open() {
        this._client = await createConnection({
            uri:               this._dbURI.href,
            user:              this._creds?.identity,
            password:          this._creds?.secret,
            rowsAsArray:       true,
            timezone:          '+00:00',
            supportBigNumbers: true,
            bigNumberStrings:  true,
            typeCast:    (field, next) => {
                if (field.type === 'LONGLONG') {
                    const value = field.string();
                    return value ? BigInt(value) : null;
                }

                return next();
            }
        });

        this._version = (await this.query(q`select version()`))[0][0][0] as string;
        await this.query(q`set session sql_mode = 'ansi,traditional'`);
        await this.query(q`set session time_zone = '+00:00'`);
    }

    async close() {
        await this._client?.end();
        delete this._client;
    }

    async query(...queries: DBQuery[]): Promise<DBResult[]> {
        if (!this._client) {
            throw new ReferenceError('Driver not open');
        }

        const result: DBResult[] = [];

        for (const query of queries) {
            const escaped = query.toString((value) => {
                if (value === null || typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') {
                    return String(value);
                }
                else if (value instanceof Date) {
                    return `'${value.toISOString().slice(0, -1)}'`; // UTC date without time-zone
                }
                else if (value instanceof Uint8Array) {
                    return `0x${Buffer.from(value).toString('hex')}`;
                }
                else if (typeof value === 'string') {
                    return this._client!.escape(value);
                }
                else if (typeof value === 'object' && !Array.isArray(value)) {
                    return this._client!.escape(JSON.stringify(value));
                }
                else {
                    throw new TypeError(`Cannot handle datatype ${typeof value}`);
                }
            });

            try {
                result.push(new MyResult(this._dbURI, await this._client.query(escaped)));
            }
            catch (err: any) {
                throw typeof err.errno === 'number' && typeof err.sqlState === 'string'
                    ? new DBError(String(err.errno), err.sqlState, 'Query failed', err, query)
                    : err;
            }
        }

        return result;
    }

    async transaction<T>(dtp: DBTransactionParams, cb: () => Promise<T> | T): Promise<T> {
        if (!this._client) {
            throw new ReferenceError('Driver not open');
        }

        const level = this._tlevel++;

        try {
            if (level === 0) {
                const retries = dtp.retries ?? DBDriver.DBConnectionPool.defaultRetries;
                const backoff = dtp.backoff ?? DBDriver.DBConnectionPool.defaultBackoff;

                for (let retry = 0; /* Keep going */; ++retry) {
                    await this.query(dtp.begin ?? q`begin`);

                    try {
                        const result = await cb();
                        await this.query(q`commit`);
                        return result;
                    }
                    catch (err) {
                        await this.query(q`rollback`).catch(() => { throw err });

                        if (err instanceof DBError && err.state === '40001' /* 1213: ER_LOCK_DEADLOCK */ && retry < retries) {
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
                    await this.query(q.raw(`release savepoint ${savepoint}`)).catch(() => 0);
                    return result;
                }
                catch (err) {
                    await this.query(q.raw(`rollback to savepoint ${savepoint}`)).catch(() => 0);
                    throw err;
                }
            }
        }
        finally {
            this._tlevel--;
        }
    }

    reference(dbURI: DatabaseURI): DBDriver.DBReference {
        return new MyReference(dbURI, this._version);
    }
}

type MySQLResult = ResultSetHeader | RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[];
type FixedFields = FieldPacket & { schema?: string, columnType?: number } // Missing from mysql2 d.ts file

export class MyResult extends DBResult {
    constructor(_db: DatabaseURI, [result, fields]: [ result: MySQLResult, fields?: FixedFields[] ]) {
        super(_db, fields?.map((f) => ({
                label:         f.name,
                type_id:       f.columnType,
                table_catalog: f.catalog  || undefined,
                table_schema:  f.schema   || undefined,
                table_name:    f.orgTable || undefined,
                column_name:   f.orgName  || undefined,
            })) ?? [],
            Array.isArray(result) && Array.isArray(result?.[0]) ? result as unknown[][] : [],
            !Array.isArray(result) ? result.affectedRows : undefined,
            !Array.isArray(result) ? result.insertId?.toString() : undefined
        );
    }
}

export class MyReference extends DBDriver.DBReference {
    constructor(dbURI: DatabaseURI, private _version: string) {
        super(dbURI);
    }

    getAppendQuery(value: unknown): DBQuery {
        if (this.dbURI.protocol === 'mariadb:' && parseFloat(this._version) >= 10.5) {
            return q`${super.getAppendQuery(value)} returning *`;
        }
        else {
            return super.getAppendQuery(value);
        }
    }
}
