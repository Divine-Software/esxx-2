import { DatabaseURI, FIELDS, URI } from '@divine/uri'
import { inspect } from 'util';

import '../..'

inspect.defaultOptions.depth = 10;

const db = new URI('sqlserver://sa:Pass1234@localhost/master') as DatabaseURI;

(async () => {
    const f = db.query(async () => {
        const q = await db.query(async () => {
            try {
                await db.query(async () => {
                    console.log(await db.$`#kv;one?(eq,key,9)`.load());
                    await db.$`#kv?(eq,key,9)`.remove();
                    console.log(await db.$`#kv;one?(eq,key,9)`.load());
                    await db.$`#kv`.append({ key: 9, value: '{}'});
                    console.log(await db.$`#kv;one?(eq,key,9)`.load());
                    // await db.$`#kv[key]`.save({ key: 9, value: '["Martin"]'});
                    // console.log(await db.$`#kv;one?(eq,key,9)`.load());
                    // await db.$`#kv`.save({ key: 9, value: '["Vilgot"]'});
                    // console.log(await db.$`#kv;one?(eq,key,9)`.load());
                    await db.$`#kv?(eq,key,9)`.modify({ value: '["Martin", "Nina"]'});
                    console.log(await db.$`#kv;one?(eq,key,9)`.load());
                })
            }
            catch (err) {
                console.error('Failed: ' + err, err);
                throw err;
            }
        });

        return await db.query(async () => {
            const obj = {
                ts: Date.now(),
                date: new Date()
            };

            const r1 = await db.query`insert into kv values (${Date.now()}, ${obj})`;
            const r2 = await db.query(`select 1 as one, 'text' as two, '{}', getdate(), "key" as nyckel, value as värde from kv as foo where "key" < {limit} order by ${'"key"'} desc`, { limit: 1000 });
            await r2[FIELDS][0].updateColumnInfo();

            return [r1, r2];
        });
    });

    return await f;
    // const g = db.query`select * from kv`;

    // return await Promise.all([f, g]);

})().then(console.log, console.error);
