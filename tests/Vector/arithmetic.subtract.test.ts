import { before, describe, it, test } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../../src/Vector.ts';

test('Subtraction methods - Original tests', () => {
    describe('.subtractX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtractX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract only the X axis of a vector', function () {
            assert.strictEqual(vec1.x, 10);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('.subtractY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtractY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract only the Y axis of a vector', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, -20);
        });
    });

    describe('.subtract', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtract(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract a vector', function () {
            assert.strictEqual(vec1.x, 10);
            assert.strictEqual(vec1.y, -20);
        });
    });

    describe('.subtractScalar', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should subtract 2 from both vector axis', function () {
            assert.strictEqual(vec.x, 8);
            assert.strictEqual(vec.y, 18);
        });
    });

    describe('.subtractScalarX', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should subtract 2 from the x axis', function () {
            assert.strictEqual(vec.x, 8);
            assert.strictEqual(vec.y, 20);
        });
    });

    describe('.subtractScalarY', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the y axis', function () {
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 18);
        });
    });
});
test('Subtraction methods', () => {
    test('.subtractX', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtractX(vec2);
        assert.strictEqual(vec1.x, 20);
        assert.strictEqual(vec1.y, 30);
    });

    test('.subtractY', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtractY(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 10);
    });

    test('.subtract', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtract(vec2);
        assert.strictEqual(vec1.x, 20);
        assert.strictEqual(vec1.y, 10);
    });

    test('.subtractScalar', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalar(2);
        assert.strictEqual(vec.x, 8);
        assert.strictEqual(vec.y, 18);
    });

    test('.subtractScalarX', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalarX(2);
        assert.strictEqual(vec.x, 8);
        assert.strictEqual(vec.y, 20);
    });

    test('.subtractScalarY', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalarY(2);
        assert.strictEqual(vec.x, 10);
        assert.strictEqual(vec.y, 18);
    });
});
