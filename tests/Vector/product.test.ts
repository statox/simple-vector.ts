import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../../src/Vector.ts';

test('Product and projection methods', () => {
    describe('.cross', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.cross(vec2);
        });

        it('should return the cross product of 2 vectors', function () {
            assert.strictEqual(ret, 840);
        });
    });

    describe('.dot', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.dot(vec2);
        });

        it('should return the dot product of 2 vectors', function () {
            assert.strictEqual(ret, 2730);
        });
    });
});
