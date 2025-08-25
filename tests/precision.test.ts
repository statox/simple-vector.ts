import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Precision methods - Original tests', () => {
    describe('.unfloat', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(30.333, 20.666);
            ret = vec.unfloat();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should round both vector axis to integers', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 21);
        });
    });
});

test('Precision methods', () => {
    test('.unfloat', () => {
        const vec = new Vector(100.2, 50.9);

        vec.unfloat();
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 51);
    });

    test('.fixPrecision', () => {
        const vec = new Vector(100.2345, 50.9876);

        vec.fixPrecision(2);
        assert.strictEqual(vec.x, 100.23);
        assert.strictEqual(vec.y, 50.99);
    });
});
