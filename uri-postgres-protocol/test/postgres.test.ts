import { q, URI } from '@divine/uri';
import { describeCommonDBTest } from '@divine/uri/build/test/protocols/common-database-tests';
import '../src';

describeCommonDBTest({
    name: 'CockroachDB',
    uri:  new URI('pg://root@localhost:26257/_divine_uri_test_'),
    createDT: q`
        create table dt (
            "serial"  serial unique primary key,
            "uuid"    uuid,
            "int"     int4,
            "bigint"  bigint,
            "real"    real,
            "double"  double precision,
            "decimal" decimal(30,5),
            "bigints" bigint[],
            "words"   text[],
            "text"    text,
            "bin"     bytea,
            "ts"      timestamp,
            "tstz"    timestamptz,
            "bool"    boolean,
            "json"    jsonb,
            "null"    text
        )
    `,
    enableDT: {
        serial:   true,
        uuid:     true,
        int:      true,
        bigint:   true,
        real:     true,
        double:   true,
        decimal:  true,
        bigints:  true,
        words:    true,
        text:     true,
        bin:      true,
        ts:       true,
        tstz:     true,
        bool:     true,
        json:     true,
        null:     true,
    },
    returning:    true,
    rowKey:       false,
    selectCount:  true,
});

describeCommonDBTest({
    name: 'PostgreSQL',
    uri:  new URI('pg://localhost/_divine_uri_test_'),
    createDT: q`
        create table dt (
            "serial"   bigint generated always as identity unique primary key,
            "uuid"     uuid,
            "int"      int,
            "bigint"   bigint,
            "real"     real,
            "double"   double precision,
            "decimal"  decimal(30,5),
            "bigints"  bigint[],
            "words"    text[],
            "text"     text,
            "bin"      bytea,
            "ts"       timestamp,
            "tstz"     timestamptz,
            "bool"     boolean,
            "json"     jsonb,
            "null"     text
        )
    `,
    enableDT: {
        serial:   true,
        uuid:     true,
        int:      true,
        bigint:   true,
        real:     true,
        double:   true,
        decimal:  true,
        bigints:  true,
        words:    true,
        text:     true,
        bin:      true,
        ts:       true,
        tstz:     true,
        bool:     true,
        json:     true,
        null:     true,
    },
    returning:    true,
    rowKey:       false,
    selectCount:  true,
});
