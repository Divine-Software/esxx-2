import { ContentType } from '@divine/headers';
import { createReadStream, createWriteStream, promises as fs } from 'fs';
import { lookup } from 'mime-types';
import { basename, join, normalize } from 'path';
import { Parser } from '../parsers';
import { DirectoryEntry, encodeFilePath, Metadata, URI, URIException, VOID } from '../uri';
import { copyStream, toReadableStream } from '../utils';

export class FileURI extends URI {
    static create(path: string, base?: URI): URI {
        return new URI(`${encodeFilePath(path)}`, base);
    }

    private _path: string;

    constructor(uri: URI) {
        super(uri);

        if ((this.hostname !== '' && this.hostname !== 'localhost') || this.port !== '' || this.search !== '' || this.hash !== '') {
            throw new URIException(`URI ${this}: Host/port/query/fragment parts not allowed`);
        }
        else if (/%2F/i.test(this.pathname) /* No encoded slashes */) {
            throw new URIException(`URI ${this}: Path invalid`);
        }

        this._path = normalize(decodeURIComponent(this.pathname));
    }

    async info<T extends DirectoryEntry>(): Promise<T & Metadata> {
        try {
            const stats = await fs.stat(this._path);
            const ctype = stats.isDirectory() ? ContentType.dir : ContentType.create(lookup(this._path) || undefined);
            const entry: DirectoryEntry = {
                uri:     this,
                name:    basename(this._path),
                type:    ctype,
                length:  stats.size,
                created: stats.birthtime,
                updated: stats.mtime,
            };

            return entry as T;
        }
        catch (err) {
            throw this.makeException(err);
        }
    }

    async list<T extends DirectoryEntry>(): Promise<T[] & Metadata> {
        try {
            const children = await fs.readdir(this._path);

            // NOTE: Make the path absolute first, since `this` might not end with a '/' even though it might be a directory.
            return await Promise.all(children.sort().map((child) => FileURI.create(join(this._path, child), this).info<T>()));
        }
        catch (err) {
            throw this.makeException(err);
        }
    }

    async load<T extends object>(recvCT?: ContentType | string): Promise<T & Metadata> {
        try {
            const stream = createReadStream(this._path, { flags: 'r', encoding: undefined });

            return await Parser.parse(ContentType.create(recvCT, lookup(this._path) || undefined), stream) as T;
        }
        catch (err) {
            throw this.makeException(err);
        }
    }

    async save<T extends object>(data: unknown, sendCT?: ContentType | string, recvCT?: ContentType): Promise<T & Metadata> {
        if (recvCT !== undefined) {
            throw new URIException(`URI ${this}: save: recvCT argument is not supported`);
        }

        try {
            await this._write(data, sendCT, false);
            return Object(VOID);
        }
        catch (err) {
            throw this.makeException(err);
        }
    }

    async append<T extends object>(data: unknown, sendCT?: ContentType | string, recvCT?: ContentType | string): Promise<T & Metadata> {
        if (recvCT !== undefined) {
            throw new URIException(`URI ${this}: append: recvCT argument is not supported`);
        }

        try {
            await this._write(data, sendCT, true);
            return Object(VOID);
        }
        catch (err) {
            throw this.makeException(err);
        }
    }

    // async modify<T extends object>(data: unknown, sendCT?: ContentType | string, recvCT?: ContentType | string): Promise<object> {
    // }

    async remove<T extends object>(recvCT?: ContentType | string): Promise<T & Metadata> {
        if (recvCT !== undefined) {
            throw new URIException(`URI ${this}: remove: recvCT argument is not supported`);
        }

        try {
            if ((await fs.stat(this._path)).isDirectory()) {
                await fs.rmdir(this._path);
            }
            else {
                await fs.unlink(this._path);
            }

            return Object(true);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return Object(false);
            }
            else {
                throw this.makeException(err);
            }
        }
    }

    private async _write(data: unknown, sendCT: ContentType | string | undefined, append: boolean): Promise<void> {
        const [/* contentType */, serialized] = Parser.serialize(this.guessContentType(sendCT), data);

        await copyStream(toReadableStream(serialized), createWriteStream(this._path, { flags: append ? 'a' : 'w', encoding: undefined }));
    }
}

URI.register('file:', FileURI);
