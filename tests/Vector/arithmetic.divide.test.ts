import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../../src/Vector.ts';
import { DivisionByZeroError } from '../../src/errors.ts';

test('Division methods - Original tests', () => {
    describe('.divideX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divideX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide the X axis by 2', function () {
            assert.strictEqual(vec1.x, 15);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('.divideY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divideY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide the Y axis by 2', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, 10);
        });
    });

    describe('.divide', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divide(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide both vector axis by 2', function () {
            assert.strictEqual(vec1.x, 15);
            assert.strictEqual(vec1.y, 10);
        });
    });

    describe('.divideScalar', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide both vector axis by 2', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 10);
        });

        it('should throw when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalar(scal), DivisionByZeroError);
        });
    });

    describe('.divideScalarX', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide the X axis by 2', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 20);
        });

        it('should return a zero X when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalarX(scal), DivisionByZeroError);
        });
    });

    describe('.divideScalarY', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide the Y axis by 2', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 10);
        });

        it('should return a zero Y when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalarY(scal), DivisionByZeroError);
        });
    });
});

test('Division methods', () => {
    test('.divideX', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 0);

        vec1.divideX(vec2);
        assert.strictEqual(vec1.x, 50);
        assert.strictEqual(vec1.y, 50);

        assert.throws(() => vec1.divideX(new Vector(0, 10)), DivisionByZeroError);
    });

    test('.divideY', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(0, 2);

        vec1.divideY(vec2);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 25);

        assert.throws(() => vec1.divideY(new Vector(10, 0)), DivisionByZeroError);
    });

    test('.divide', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 2);

        vec1.divide(vec2);
        assert.strictEqual(vec1.x, 50);
        assert.strictEqual(vec1.y, 25);

        assert.throws(() => vec1.divide(new Vector(0, 0)), DivisionByZeroError);
        assert.throws(() => vec1.divide(new Vector(0, 10)), DivisionByZeroError);
        assert.throws(() => vec1.divide(new Vector(10, 0)), DivisionByZeroError);
    });

    test('.divideScalar', () => {
        const vec = new Vector(100, 50);

        vec.divideScalar(2);
        assert.strictEqual(vec.x, 50);
        assert.strictEqual(vec.y, 25);

        assert.throws(() => vec.divideScalar(0), DivisionByZeroError);
    });

    test('.divideScalarX', () => {
        const vec = new Vector(100, 50);

        vec.divideScalarX(2);
        assert.strictEqual(vec.x, 50);
        assert.strictEqual(vec.y, 50);

        assert.throws(() => vec.divideScalarX(0), DivisionByZeroError);
    });

    test('.divideScalarY', () => {
        const vec = new Vector(100, 50);

        vec.divideScalarY(2);
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 25);

        assert.throws(() => vec.divideScalarY(0), DivisionByZeroError);
    });
});
