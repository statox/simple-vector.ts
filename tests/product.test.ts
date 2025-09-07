import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { DivisionByZeroError, Vector } from '../src/Vector.ts';

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

    describe('.projectOnto', function () {
        let vec1: Vector;
        let vec2: Vector;
        let vec3: Vector;
        let vec4: Vector;
        let selfRet: Vector;
        let perpRet: Vector;
        let paraRet: Vector;
        let middleRet: Vector;

        before(function () {
            vec1 = new Vector(100, 0);
            vec2 = new Vector(100, 100);
            vec3 = new Vector(0, 100);
            vec4 = new Vector(200, 0);
            selfRet = vec1.projectOnto(vec1);
            perpRet = vec1.clone().projectOnto(vec3);
            paraRet = vec1.clone().projectOnto(vec4);
            middleRet = vec1.clone().projectOnto(vec2);
        });

        it('should be chainable', function () {
            assert.ok(selfRet === vec1);
        });

        it('should throw if the vector to project onto is zero', function () {
            assert.throws(() => vec1.projectOnto(new Vector(0, 0)), DivisionByZeroError);
            assert.strictEqual(selfRet.x, 100);
            assert.strictEqual(selfRet.y, 0);
        });

        it('should project same vector onto itself without change', function () {
            assert.strictEqual(selfRet.x, 100);
            assert.strictEqual(selfRet.y, 0);
        });

        it('should project orthogonal vectors into a zero-length vector', function () {
            assert.strictEqual(perpRet.x, 0);
            assert.strictEqual(perpRet.y, 0);
        });

        it('should project parallel vectors into a vector of same direction and magnitude', function () {
            assert.strictEqual(paraRet.x, 100);
            assert.strictEqual(paraRet.y, 0);
        });

        it('should project non-orthogonal non-parallel vectors correctly', function () {
            assert.strictEqual(middleRet.x, 50);
            assert.strictEqual(middleRet.y, 50);
        });
    });
});
