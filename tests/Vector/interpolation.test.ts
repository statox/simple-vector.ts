import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { DivisionByZeroError, Vector } from '../../src/Vector.ts';

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
