import { DatabaseURI, DBDriver, URI } from '@divine/uri';
import { normalize } from 'path';
import { SQLiteConnectionPool, SQLiteReference } from './private/sqlite-impl';

export class SQLiteURI extends DatabaseURI {
    constructor(uri: URI) {
        super(uri);

        const file = new URI(this.href.replace(/[^:]*:([^?#]*).*/, 'file:$1'));
        (this as any).href = `${this.protocol}//${file.host}${file.pathname}${this.search}${this.hash}`
    }

    protected _createDBReference(): DBDriver.DBReference {
        return new SQLiteReference(this);
    }

    protected async _createDBConnectionPool(): Promise<DBDriver.DBConnectionPool> {
        return new SQLiteConnectionPool(this);
    }
}

// From <https://sqlite.org/c3ref/c_abort.html> and <https://sqlite.org/c3ref/c_abort_rollback.html>
export enum SQLState {
    SQLITE_OK                                            = "SQLITE_OK",
    SQLITE_OK_LOAD_PERMANENTLY                           = "SQLITE_OK_LOAD_PERMANENTLY",
    SQLITE_OK_SYMLINK                                    = "SQLITE_OK_SYMLINK",
    SQLITE_ERROR                                         = "SQLITE_ERROR",
    SQLITE_ERROR_MISSING_COLLSEQ                         = "SQLITE_ERROR_MISSING_COLLSEQ",
    SQLITE_ERROR_RETRY                                   = "SQLITE_ERROR_RETRY",
    SQLITE_ERROR_SNAPSHOT                                = "SQLITE_ERROR_SNAPSHOT",
    SQLITE_INTERNAL                                      = "SQLITE_INTERNAL",
    SQLITE_PERM                                          = "SQLITE_PERM",
    SQLITE_ABORT                                         = "SQLITE_ABORT",
    SQLITE_ABORT_ROLLBACK                                = "SQLITE_ABORT_ROLLBACK",
    SQLITE_BUSY                                          = "SQLITE_BUSY",
    SQLITE_BUSY_RECOVERY                                 = "SQLITE_BUSY_RECOVERY",
    SQLITE_BUSY_SNAPSHOT                                 = "SQLITE_BUSY_SNAPSHOT",
    SQLITE_BUSY_TIMEOUT                                  = "SQLITE_BUSY_TIMEOUT",
    SQLITE_LOCKED                                        = "SQLITE_LOCKED",
    SQLITE_LOCKED_SHAREDCACHE                            = "SQLITE_LOCKED_SHAREDCACHE",
    SQLITE_LOCKED_VTAB                                   = "SQLITE_LOCKED_VTAB",
    SQLITE_NOMEM                                         = "SQLITE_NOMEM",
    SQLITE_READONLY                                      = "SQLITE_READONLY",
    SQLITE_READONLY_RECOVERY                             = "SQLITE_READONLY_RECOVERY",
    SQLITE_READONLY_CANTLOCK                             = "SQLITE_READONLY_CANTLOCK",
    SQLITE_READONLY_ROLLBACK                             = "SQLITE_READONLY_ROLLBACK",
    SQLITE_READONLY_DBMOVED                              = "SQLITE_READONLY_DBMOVED",
    SQLITE_READONLY_CANTINIT                             = "SQLITE_READONLY_CANTINIT",
    SQLITE_READONLY_DIRECTORY                            = "SQLITE_READONLY_DIRECTORY",
    SQLITE_INTERRUPT                                     = "SQLITE_INTERRUPT",
    SQLITE_IOERR                                         = "SQLITE_IOERR",
    SQLITE_IOERR_READ                                    = "SQLITE_IOERR_READ",
    SQLITE_IOERR_SHORT_READ                              = "SQLITE_IOERR_SHORT_READ",
    SQLITE_IOERR_WRITE                                   = "SQLITE_IOERR_WRITE",
    SQLITE_IOERR_FSYNC                                   = "SQLITE_IOERR_FSYNC",
    SQLITE_IOERR_DIR_FSYNC                               = "SQLITE_IOERR_DIR_FSYNC",
    SQLITE_IOERR_TRUNCATE                                = "SQLITE_IOERR_TRUNCATE",
    SQLITE_IOERR_FSTAT                                   = "SQLITE_IOERR_FSTAT",
    SQLITE_IOERR_UNLOCK                                  = "SQLITE_IOERR_UNLOCK",
    SQLITE_IOERR_RDLOCK                                  = "SQLITE_IOERR_RDLOCK",
    SQLITE_IOERR_DELETE                                  = "SQLITE_IOERR_DELETE",
    SQLITE_IOERR_BLOCKED                                 = "SQLITE_IOERR_BLOCKED",
    SQLITE_IOERR_NOMEM                                   = "SQLITE_IOERR_NOMEM",
    SQLITE_IOERR_ACCESS                                  = "SQLITE_IOERR_ACCESS",
    SQLITE_IOERR_CHECKRESERVEDLOCK                       = "SQLITE_IOERR_CHECKRESERVEDLOCK",
    SQLITE_IOERR_LOCK                                    = "SQLITE_IOERR_LOCK",
    SQLITE_IOERR_CLOSE                                   = "SQLITE_IOERR_CLOSE",
    SQLITE_IOERR_DIR_CLOSE                               = "SQLITE_IOERR_DIR_CLOSE",
    SQLITE_IOERR_SHMOPEN                                 = "SQLITE_IOERR_SHMOPEN",
    SQLITE_IOERR_SHMSIZE                                 = "SQLITE_IOERR_SHMSIZE",
    SQLITE_IOERR_SHMLOCK                                 = "SQLITE_IOERR_SHMLOCK",
    SQLITE_IOERR_SHMMAP                                  = "SQLITE_IOERR_SHMMAP",
    SQLITE_IOERR_SEEK                                    = "SQLITE_IOERR_SEEK",
    SQLITE_IOERR_DELETE_NOENT                            = "SQLITE_IOERR_DELETE_NOENT",
    SQLITE_IOERR_MMAP                                    = "SQLITE_IOERR_MMAP",
    SQLITE_IOERR_GETTEMPPATH                             = "SQLITE_IOERR_GETTEMPPATH",
    SQLITE_IOERR_CONVPATH                                = "SQLITE_IOERR_CONVPATH",
    SQLITE_IOERR_VNODE                                   = "SQLITE_IOERR_VNODE",
    SQLITE_IOERR_AUTH                                    = "SQLITE_IOERR_AUTH",
    SQLITE_IOERR_BEGIN_ATOMIC                            = "SQLITE_IOERR_BEGIN_ATOMIC",
    SQLITE_IOERR_COMMIT_ATOMIC                           = "SQLITE_IOERR_COMMIT_ATOMIC",
    SQLITE_IOERR_ROLLBACK_ATOMIC                         = "SQLITE_IOERR_ROLLBACK_ATOMIC",
    SQLITE_IOERR_DATA                                    = "SQLITE_IOERR_DATA",
    SQLITE_IOERR_CORRUPTFS                               = "SQLITE_IOERR_CORRUPTFS",
    SQLITE_CORRUPT                                       = "SQLITE_CORRUPT",
    SQLITE_CORRUPT_VTAB                                  = "SQLITE_CORRUPT_VTAB",
    SQLITE_CORRUPT_SEQUENCE                              = "SQLITE_CORRUPT_SEQUENCE",
    SQLITE_CORRUPT_INDEX                                 = "SQLITE_CORRUPT_INDEX",
    SQLITE_NOTFOUND                                      = "SQLITE_NOTFOUND",
    SQLITE_FULL                                          = "SQLITE_FULL",
    SQLITE_CANTOPEN                                      = "SQLITE_CANTOPEN",
    SQLITE_CANTOPEN_NOTEMPDIR                            = "SQLITE_CANTOPEN_NOTEMPDIR",
    SQLITE_CANTOPEN_ISDIR                                = "SQLITE_CANTOPEN_ISDIR",
    SQLITE_CANTOPEN_FULLPATH                             = "SQLITE_CANTOPEN_FULLPATH",
    SQLITE_CANTOPEN_CONVPATH                             = "SQLITE_CANTOPEN_CONVPATH",
    SQLITE_CANTOPEN_DIRTYWAL                             = "SQLITE_CANTOPEN_DIRTYWAL",
    SQLITE_CANTOPEN_SYMLINK                              = "SQLITE_CANTOPEN_SYMLINK",
    SQLITE_PROTOCOL                                      = "SQLITE_PROTOCOL",
    SQLITE_EMPTY                                         = "SQLITE_EMPTY",
    SQLITE_SCHEMA                                        = "SQLITE_SCHEMA",
    SQLITE_TOOBIG                                        = "SQLITE_TOOBIG",
    SQLITE_CONSTRAINT                                    = "SQLITE_CONSTRAINT",
    SQLITE_CONSTRAINT_CHECK                              = "SQLITE_CONSTRAINT_CHECK",
    SQLITE_CONSTRAINT_COMMITHOOK                         = "SQLITE_CONSTRAINT_COMMITHOOK",
    SQLITE_CONSTRAINT_FOREIGNKEY                         = "SQLITE_CONSTRAINT_FOREIGNKEY",
    SQLITE_CONSTRAINT_FUNCTION                           = "SQLITE_CONSTRAINT_FUNCTION",
    SQLITE_CONSTRAINT_NOTNULL                            = "SQLITE_CONSTRAINT_NOTNULL",
    SQLITE_CONSTRAINT_PRIMARYKEY                         = "SQLITE_CONSTRAINT_PRIMARYKEY",
    SQLITE_CONSTRAINT_TRIGGER                            = "SQLITE_CONSTRAINT_TRIGGER",
    SQLITE_CONSTRAINT_UNIQUE                             = "SQLITE_CONSTRAINT_UNIQUE",
    SQLITE_CONSTRAINT_VTAB                               = "SQLITE_CONSTRAINT_VTAB",
    SQLITE_CONSTRAINT_ROWID                              = "SQLITE_CONSTRAINT_ROWID",
    SQLITE_CONSTRAINT_PINNED                             = "SQLITE_CONSTRAINT_PINNED",
    SQLITE_MISMATCH                                      = "SQLITE_MISMATCH",
    SQLITE_MISUSE                                        = "SQLITE_MISUSE",
    SQLITE_NOLFS                                         = "SQLITE_NOLFS",
    SQLITE_AUTH                                          = "SQLITE_AUTH",
    SQLITE_AUTH_USER                                     = "SQLITE_AUTH_USER",
    SQLITE_FORMAT                                        = "SQLITE_FORMAT",
    SQLITE_RANGE                                         = "SQLITE_RANGE",
    SQLITE_NOTADB                                        = "SQLITE_NOTADB",
    SQLITE_NOTICE                                        = "SQLITE_NOTICE",
    SQLITE_NOTICE_RECOVER_WAL                            = "SQLITE_NOTICE_RECOVER_WAL",
    SQLITE_NOTICE_RECOVER_ROLLBACK                       = "SQLITE_NOTICE_RECOVER_ROLLBACK",
    SQLITE_WARNING                                       = "SQLITE_WARNING",
    SQLITE_WARNING_AUTOINDEX                             = "SQLITE_WARNING_AUTOINDEX",
    SQLITE_ROW                                           = "SQLITE_ROW",
    SQLITE_DONE                                          = "SQLITE_DONE",
}

URI.register('sqlite:', SQLiteURI);
