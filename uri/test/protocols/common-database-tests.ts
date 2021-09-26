/* eslint-disable jest/no-if */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable jest/no-export */
import { inspect } from 'util';
import { DatabaseURI, DBQuery, FIELDS, q, URI, VOID } from '../../src';

export interface CommonDBTestParams {
    name:        string;
    uri:         URI;
    createDT:    DBQuery | DBQuery[];
    enableDT:    EnabledDataTypes;
    schemaInfo:  boolean;
    returning:   boolean;
    rowKey:      boolean;
    selectCount: boolean;
    comments:    boolean;
    upsert:      'no' | 'with-key' | 'without-key' | 'yes';
}

export interface DataTypes {
    serial:    bigint;
    uuid:      string;
    int:       number;
    bigint:    bigint;
    real:      number;
    double:    number;
    decimal:   string;
    bigints:   bigint[];
    words:     string[];
    text:      string;
    bin:       Buffer;
    ts:        Date;
    tstz:      Date;
    bool:      boolean;
    json:      object;
    null:      null;
}

export type EnabledDataTypes = Record<keyof DataTypes, boolean>

type Nullable<T> = { [P in keyof T]: null | T[P] }

export function describeCommonDBTest(def: CommonDBTestParams) {
    const columns: Nullable<DataTypes> = {
        serial:    BigInt(1),
        uuid:      '00000000-0000-0000-0000-000000000000',
        int:       1e6,
        bigint:    BigInt('99999999999999999'),
        real:      12345.6,
        double:    1234567890.123,
        decimal:   !def.enableDT.decimal ? null : '99999999999999999.99110',
        bigints:   !def.enableDT.bigints ? null : [ BigInt(10), BigInt(20), BigInt(30) ],
        words:     !def.enableDT.words   ? null : [ 'one', 'two' ],
        text:      'En 😀 täçkst',
        bin:       Buffer.of(1,2,3,4,127,128,254,255),
        ts:        new Date(),
        tstz:      new Date(),
        bool:      true,
        json:      { array: [ { object: null }, false, -10, '😀' ] },
        null:      null,
    };

    describe(`the ${def.name} driver`, () => {
        const db = def.uri as DatabaseURI;

        it('can manage schema', async () => {
            expect.assertions(1);

            await db.query`drop table if exists "dt"`;
            await db.query(...[def.createDT].flat());
            expect(1).toBe(1);
        });

        it('inserts and selects all supported datatypes', async () => {
            expect.assertions(16);

            const values = def.enableDT.serial ? { ...columns, serial: undefined } : columns;
            await db.query`insert into "dt" ${q.values(values)}`;

            const res = await db.query<DataTypes[]>`select * from "dt"`;
            expect(res).toHaveLength(1);

            def.enableDT.serial ?
                expect(res[0].serial).toBeGreaterThan(BigInt(0)) :
                expect(res[0].serial).toBe(columns.serial);
            expect(res[0].uuid      ).toBe(columns.uuid);
            expect(res[0].int       ).toBe(def.enableDT.int ? columns.int : BigInt(columns.int!));
            expect(res[0].bigint    ).toBe(columns.bigint);
            expect(res[0].real      ).toBeCloseTo(columns.real!, 1);
            expect(res[0].double    ).toBeCloseTo(columns.double!, 3);
            expect(res[0].decimal   ).toBe(columns.decimal);
            expect(res[0].bigints   ).toStrictEqual(columns.bigints);
            expect(res[0].words     ).toStrictEqual(columns.words);
            expect(res[0].text      ).toBe(columns.text);
            expect(res[0].bin       ).toStrictEqual(columns.bin);
            expect(res[0].ts        ).toStrictEqual(def.enableDT.ts   ? columns.ts   : columns.ts?.toISOString() );
            expect(res[0].tstz      ).toStrictEqual(def.enableDT.tstz ? columns.tstz : columns.tstz?.toISOString() );
            expect(res[0].bool      ).toBe(def.enableDT.bool ? columns.bool : def.enableDT.int ? Number(columns.bool) : BigInt(columns.bool!));
            expect(res[0].json      ).toStrictEqual(def.enableDT.json ? columns.json : JSON.stringify(columns.json));
        });

        it('builds and executes queries', async () => {
            expect.assertions(14);

            await db.query`insert into ${q.quote('dt')} ${q.values({ text: '🐈 2', double: 10 })}`;
            const res = await db.query<(DataTypes[])>(
                q('insert into "dt" ("text", "double") values ({t}, {d})', { t: '🐈 1', d: 11 }),
                q`update "dt" set "real" = "double" * 2 where "text" in ${q.list(['🐈 1', undefined, '🐈 2'])}`,
                q`select * from "dt" where ${q.join('or', ['🐈 1', '🐈 2'].map((t) => q`(${q.quote('text')} = ${t})`))} order by "text"`
            );

            expect(res[FIELDS]).toHaveLength(3);
            expect(res[FIELDS][0]).toHaveLength(0);
            expect(res[FIELDS][1]).toHaveLength(0);
            expect(res[FIELDS][2]).toHaveLength(2);

            expect(res[FIELDS][0].rowCount).toBe(1);
            expect(res[FIELDS][1].rowCount).toBe(2);
            expect(res[FIELDS][2].rowCount).toBe(def.selectCount ? 2 : undefined);

            expect(res).toHaveLength(2);
            expect(res[0].text).toBe('🐈 1');
            expect(res[0].real).toBe(22);
            expect(res[0].double).toBe(11);
            expect(res[1].text).toBe('🐈 2');
            expect(res[1].real).toBe(20);
            expect(res[1].double).toBe(10);
        });

        it('returns insert/update/delete metadata', async () => {
            expect.assertions(11);

            const { [FIELDS]: [ rs1 ] } = await db.query`insert into "dt" ("text") values ('md1'), ('md2'), ('md3')`;

            const { [FIELDS]: [ rs2 ] } = def.returning
                ? db.protocol === 'sqlserver:' // SQL Server quirk
                    ? await db.query`insert into "dt" ("text") output "inserted"."serial" values ('md4')`
                    : await db.query`insert into "dt" ("text") values ('md4') returning "serial"`
                : await db.query`insert into "dt" ("text") values ('md4')`
            const serial = def.returning ? String(rs2[0][0]): rs2.rowKey!;

            const { [FIELDS]: [ rs3 ] } = await db.query`select "serial", "text" from "dt" where "serial"=${serial}`;

            expect(rs1).toHaveLength(0);
            expect(rs1.rowCount).toBe(3);
            expect(typeof rs1.rowKey).toBe(def.rowKey ? 'string' : 'undefined');

            expect(rs2).toHaveLength(def.returning ? 1 : 0);
            expect(rs2.rowCount).toBe(db.protocol === 'sqlite:' ? undefined : 1); // SQLite quirk
            expect(typeof rs2.rowKey).toBe(def.rowKey && !def.returning ? 'string' : 'undefined');
            expect(typeof serial).toBe('string');

            expect(rs3).toHaveLength(1);
            expect(rs3.rowCount).toBe(def.selectCount ? 1 : undefined);
            expect(String(rs3[0][0])).toBe(serial);
            expect(rs3[0][1]).toBe('md4');
        });

        it('handles transactions', async () => {
            expect.assertions(10);

            await expect(db.query(async () => {
                await db.$`#dt`.append({ text: '🦮 1.1' });

                const t1a = await db.$`#dt(text);scalar?(eq,text,🦮 1.1)`.load();
                expect(t1a.valueOf()).toBe('🦮 1.1');

                throw new Error('Force failure');
            })).rejects.toThrow('Force failure');

            // Transaction #1 should be rolled back completely
            const t1b = await db.$`#dt(text);scalar?(eq,text,🦮 1.1)`.load();
            expect(t1b.valueOf()).toBe(VOID);

            const t2a = await db.query(async () => {
                await db.$`#dt`.append({ text: '🦮 2.1' });

                const t2b = await db.query(async () => {
                    await db.$`#dt`.append({ text: '🦮 2.2' });

                    const t2c = await db.query`select "text" from "dt" where "text" like ${'🦮 2.%'}`;
                    expect(t2c).toHaveLength(2);

                    await expect(db.query(async () => {
                        await db.$`#dt`.append({ text: '🦮 2.3' });

                        const t2d = await db.query`select "text" from "dt" where "text" like ${'🦮 2.%'}`;
                        expect(t2d).toHaveLength(3);

                        throw new Error('SP reject');
                    })).rejects.toThrow('SP reject')

                    return db.query`select "text" from "dt" where "text" like ${'🦮 2.%'}`;
                });

                expect(t2b).toHaveLength(2);

                return db.query`select "text" from "dt" where "text" like ${'🦮 2.%'}`;
            });

            // Only the last SP should be rolled back
            const t2e = await db.query`select "text" from "dt" where "text" like ${'🦮 2.%'}`;

            expect(t2a).toHaveLength(2);
            expect(t2e).toHaveLength(2);

            expect(t2a).toStrictEqual(t2e);
        });

        it('provides result set metadata', async () => {
            expect.assertions(27);

            await db.query(q`drop table if exists "j"`,
                           q`create table "j" ("col" integer)`,
                           q`insert into "j" values (10)`,
                           q`insert into "dt" ("text", "int") values ('j', 10)`);

            const res = await db.query<{ text: string, first: number | bigint, second: number | bigint, now: Date }[]>`
                select "text", "main"."int" as "first", "joined"."col" as "second", current_timestamp as "now" from "dt" as "main"
                inner join "j" as "joined" on "joined"."col" = "main"."int"
                where "text" = ${'j'}`;

            expect(res).toHaveLength(1);
            expect(res[0].text).toBe('j')
            expect(Number(res[0].first)).toBe(10)
            expect(Number(res[0].second)).toBe(10)
            def.enableDT.tstz ? expect(res[0].now).toBeInstanceOf(Date) : expect(typeof res[0].now).toBe('string');

            const { columns } = res[FIELDS][0];
            expect(columns).toHaveLength(4);

            expect(columns[0].label).toBe('text');
            expect(columns[1].label).toBe('first');
            expect(columns[2].label).toBe('second');
            expect(columns[3].label).toBe('now');

            expect(typeof columns[0].type_id).toBe('number');
            expect(typeof columns[1].type_id).toBe('number');
            expect(typeof columns[2].type_id).toBe('number');
            expect(typeof columns[3].type_id).toBe(db.protocol !== 'sqlite:' ? 'number' : 'undefined');

            await res[FIELDS][0].updateColumnInfo();

            expect(columns[0].table_name).toBe(def.schemaInfo ? 'dt' : undefined);
            expect(columns[1].table_name).toBe(def.schemaInfo ? 'dt' : undefined);
            expect(columns[2].table_name).toBe(def.schemaInfo ? 'j'  : undefined);
            expect(columns[3].table_name).toBeUndefined()

            expect(columns[0].column_name).toBe(def.schemaInfo ? 'text' : undefined);
            expect(columns[1].column_name).toBe(def.schemaInfo ? 'int'  : undefined);
            expect(columns[2].column_name).toBe(def.schemaInfo ? 'col'  : undefined);
            expect(columns[3].column_name).toBeUndefined()

            const h2 = db.pathname.startsWith('h2:'); // H2 quirk
            expect(typeof columns[0].data_type).toBe(def.schemaInfo ? 'string' : 'undefined');
            expect(typeof columns[1].data_type).toBe(def.schemaInfo && !h2 ? 'string' : 'undefined');
            expect(typeof columns[2].data_type).toBe(def.schemaInfo && !h2 ? 'string' : 'undefined');
            // `data_type` for non-table columns may or may not be available, so don't test

            expect(columns[0].column_comment?.replace(/'/g, '')).toBe(def.comments ? 'This is plain text' : undefined);

            expect(def.schemaInfo
                ? [columns[0].table_catalog?.toLocaleLowerCase(), columns[0].table_schema?.toLocaleLowerCase()]
                : [ '_divine_uri_test_' ]
            ).toContain('_divine_uri_test_');
        });

        it('parses and executes common DB references', async () => {
            expect.assertions(16);

            const a1 = await db.$`#dt`.append<DataTypes[]> ({ text: 'dbref1' });
            const a2 = await db.$`#dt`.append<DataTypes[]>([{ text: 'dbref2' }, { text: 'dbref3' }]);
            const k1 = a1[FIELDS][0].rowKey ?? a1[0].serial;
            const k2 = a2[FIELDS][0].rowKey ?? a2[0].serial;

            expect(k1).toBeDefined();
            expect(k2).toBeDefined();
            expect(a1).toHaveLength(def.returning ? 1 : 0);
            expect(a2).toHaveLength(def.returning ? 2 : 0);
            expect(a1[FIELDS][0].rowCount ?? a1.length).toBe(1);
            expect(a2[FIELDS][0].rowCount ?? a2.length).toBe(2);

            expect(db.$`#dt`.remove()).rejects.toThrow('A filter is required to this query');

            const r1 = await db.$`#dt?(eq,serial,${k1})`.remove();
            const r2 = await db.$`#dt?(eq,text,dbref2)`.remove();

            expect(r1[FIELDS][0].rowCount).toBe(1);
            expect(r2[FIELDS][0].rowCount).toBe(1);

            expect(db.$`#dt`.modify({})).rejects.toThrow('A filter is required to this query');

            const u1 = await db.$`#dt?(eq,text,dbref3)`.modify({ text: 'dbref3b', real: 1337 });

            expect(u1[FIELDS][0].rowCount).toBe(1);
            expect(u1).toHaveLength(0);

            const l1 = await db.$`#dt(real);scalar?(eq,text,dbref3b)`.load();
            const l2 = await db.$`#dt;one?(and(gt,text,dbref)(lt,text,dbref9))`.load<DataTypes>();
            const l3 = await db.$`#dt?(eq,real,${l1})`.load<DataTypes[]>();

            expect(l1.valueOf()).toBe(1337);
            expect(l2.real.valueOf()).toBe(1337);
            expect(l3[0].real.valueOf()).toBe(1337);
            expect(l3).toHaveLength(1);
        });

        it('parses and executes load() DB references', async () => {
            expect.assertions(7);

            await db.$`#dt`.append([
                { text: 'dbref-load', real: 2 },
                { text: 'dbref-load', real: 1 },
                { text: 'dbref-load', real: 4 },
                { text: 'dbref-load', real: 5 },
                { text: 'dbref-load', real: 3 },
                { text: 'dbref-load', real: 5 },
            ]);

            const l1 = await db.$`#dt`.load<DataTypes[]>();
            const l2 = await db.$`#dt(real,text);unique`.load<DataTypes[]>();
            const l3 = await db.$`#dt(real)?(eq,text,dbref-load)&sort=real`.load<DataTypes[]>();
            const l4 = await db.$`#dt(real)?(eq,text,dbref-load)&sort=-real`.load<DataTypes[]>();
            const l5 = await db.$`#dt(real)?(eq,text,dbref-load)&sort=real&count=2`.load<DataTypes[]>();
            const l6 = await db.$`#dt(real)?(eq,text,dbref-load)&sort=real&offset=2`.load<DataTypes[]>();
            const l7 = await db.$`#dt(real)?(eq,text,dbref-load)&sort=real&offset=3&count=2`.load<DataTypes[]>();

            expect(l1.filter((r) => r.text === 'dbref-load')).toHaveLength(6);
            expect(l2.filter((r) => r.text === 'dbref-load')).toHaveLength(5);
            expect([...l3]).toStrictEqual([{ real: 1 }, { real: 2 }, { real: 3 }, { real: 4 }, { real: 5 }, { real: 5 } ]);
            expect([...l4]).toStrictEqual([{ real: 1 }, { real: 2 }, { real: 3 }, { real: 4 }, { real: 5 }, { real: 5 } ].reverse());
            expect([...l5]).toStrictEqual([{ real: 1 }, { real: 2 } ]);
            expect([...l6]).toStrictEqual([{ real: 3 }, { real: 4 }, { real: 5 }, { real: 5 } ]);
            expect([...l7]).toStrictEqual([{ real: 4 }, { real: 5 } ]);
        });

        (def.upsert === 'no' ? it.skip : it)
        ('parses and executes save() DB references', async () => {
            expect.assertions(10);

            const db1 = def.upsert !== 'with-key'    ? db.$`#dt` : db.$`#dt[serial]`;
            const db2 = def.upsert !== 'without-key' ? db.$`#dt[serial]` : db.$`#dt`;

            const i1 = db.pathname.startsWith('h2:') ? 98 : undefined; // H2 quirk
            const i2 = db.pathname.startsWith('h2:') ? 99 : undefined; // H2 quirk
            const s1 = await db1.save<DataTypes[]>({ serial: i1, text: 'dbref-save 1', real: 1 });
            const s2 = await db2.save<DataTypes[]>({ serial: i2, text: 'dbref-save 2', real: 2 });
            const k1 = s1[FIELDS][0].rowKey ?? String(s1[0].serial);
            const k2 = s2[FIELDS][0].rowKey ?? String(s2[0].serial);
            const u1 = await db2.save<DataTypes[]>({ serial: k1, real: 3 });
            const u2 = await db1.save<DataTypes[]>({ serial: k2, real: 4 });

            expect(s1[FIELDS][0].rowCount ?? s1.length).toBe(1);
            expect(s2[FIELDS][0].rowCount ?? s2.length).toBe(1);
            expect(u1[FIELDS][0].rowCount ?? u1.length).toBe(1);
            expect(u2[FIELDS][0].rowCount ?? u1.length).toBe(1);

            const l1 = await db.$`#dt;one?(eq,serial,${k1})`.load<DataTypes>();
            const l2 = await db.$`#dt;one?(or(eq,serial,${k1})(eq,serial,${k2}))&sort=-text&count=1`.load<DataTypes>();

            expect(String(l1.serial)).toBe(k1);
            expect(String(l2.serial)).toBe(k2);
            expect(l1.text).toBe('dbref-save 1');
            expect(l2.text).toBe('dbref-save 2');
            expect(l1.real).toBe(3);
            expect(l2.real).toBe(4);
        });
    });
}
