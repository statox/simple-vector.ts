import { before, describe, it, test } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Addition methods - Original tests', () => {
    describe('.addScalar', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(1, 2);
            scal = 2;
            ret = vec.addScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to both vector axis', function () {
            assert.strictEqual(vec.x, 3);
            assert.strictEqual(vec.y, 4);
        });
    });

    describe('.addScalarX', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(1, 2);
            scal = 2;
            ret = vec.addScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the x axis', function () {
            assert.strictEqual(vec.x, 3);
            assert.strictEqual(vec.y, 2);
        });
    });

    describe('.addScalarY', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.addScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the y axis', function () {
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 22);
        });
    });

    describe('.addX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.addX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add only the X axis of a vector', function () {
            assert.strictEqual(vec1.x, 50);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('.addY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.addY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add only the Y axis of a vector', function () {
            assert.strictEqual(vec1.x, 20);
            assert.strictEqual(vec1.y, 60);
        });
    });

    describe('.add', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.add(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add a vector', function () {
            assert.strictEqual(vec1.x, 50);
            assert.strictEqual(vec1.y, 60);
        });
    });
});

test('Addition methods', () => {
    test('.addX', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.addX(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 10);
    });

    test('.addY', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.addY(vec2);
        assert.strictEqual(vec1.x, 10);
        assert.strictEqual(vec1.y, 40);
    });

    test('.add', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.add(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 40);
    });

    test('.addScalar', () => {
        const vec = new Vector(10, 20);

        vec.addScalar(2);
        assert.strictEqual(vec.x, 12);
        assert.strictEqual(vec.y, 22);
    });

    test('.addScalarX', () => {
        const vec = new Vector(10, 20);

        vec.addScalarX(2);
        assert.equal(vec.x, 12);
        assert.equal(vec.y, 20);
    });

    test('.addScalarY', () => {
        const vec = new Vector(10, 20);

        vec.addScalarY(2);
        assert.equal(vec.x, 10);
        assert.equal(vec.y, 22);
    });
});
