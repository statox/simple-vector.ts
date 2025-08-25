import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Interpolation methods - Original tests', () => {
    describe('.mixX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mixX(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate the X axis half way', function () {
            assert.strictEqual(vec1.x, 150);
            assert.strictEqual(vec1.y, 100);
        });
    });

    describe('.mixY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mixY(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate the Y axis half way', function () {
            assert.strictEqual(vec1.x, 100);
            assert.strictEqual(vec1.y, 150);
        });
    });

    describe('.mix', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mix(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate half way', function () {
            assert.strictEqual(vec1.x, 150);
            assert.strictEqual(vec1.y, 150);
        });
    });
});

test('Interpolation methods', () => {
    test('.mixX', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mixX(vec2, 0.5);
        assert.strictEqual(vec1.x, 150);
        assert.strictEqual(vec1.y, 100);

        assert.throws(() => vec1.mixX(vec2, -1), RangeError);
        assert.throws(() => vec1.mixX(vec2, 1.5), RangeError);
    });

    test('.mixY', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mixY(vec2, 0.5);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 150);

        assert.throws(() => vec1.mixY(vec2, -1), RangeError);
        assert.throws(() => vec1.mixY(vec2, 1.5), RangeError);
    });

    test('.mix', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mix(vec2, 0.5);
        assert.strictEqual(vec1.x, 150);
        assert.strictEqual(vec1.y, 150);

        assert.throws(() => vec1.mix(vec2, -1), RangeError);
        assert.throws(() => vec1.mix(vec2, 1.5), RangeError);
    });
});
