import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../../src/Vector.ts';

test('Multiplication methods - Original tests', () => {
    describe('.multiplyX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiplyX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply the X axis by 2', function () {
            assert.strictEqual(vec1.x, 60);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('.multiplyY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiplyY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply the Y axis by 2', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('.multiply', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiply(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply both vector axis by 2', function () {
            assert.strictEqual(vec1.x, 60);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('.multiplyScalar', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should multiply both vector axis by 2', function () {
            assert.strictEqual(vec.x, 60);
            assert.strictEqual(vec.y, 40);
        });
    });

    describe('.multiplyScalarX', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalarX(scal);
        });

        it('should multiply the X axis by 2', function () {
            assert.strictEqual(vec.x, 60);
            assert.strictEqual(vec.y, 20);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });
    });

    describe('.multiplyScalarY', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should multiply the Y axis by 2', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 40);
        });
    });
});

test('Multiplication methods', () => {
    test('.multiplyX', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 0);

        vec1.multiplyX(vec2);
        assert.strictEqual(vec1.x, 200);
        assert.strictEqual(vec1.y, 50);
    });

    test('.multiplyY', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(0, 2);

        vec1.multiplyY(vec2);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 100);
    });

    test('.multiply', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 2);

        vec1.multiply(vec2);
        assert.strictEqual(vec1.x, 200);
        assert.strictEqual(vec1.y, 100);
    });

    test('.multiplyScalar', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalar(2);
        assert.strictEqual(vec.x, 200);
        assert.strictEqual(vec.y, 100);
    });

    test('.multiplyScalarX', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalarX(2);
        assert.strictEqual(vec.x, 200);
        assert.strictEqual(vec.y, 50);
    });

    test('.multiplyScalarY', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalarY(2);
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 100);
    });
});
