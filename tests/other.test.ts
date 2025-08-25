import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('Other methods', () => {
    describe('new Vector', function () {
        it('should be an instance of Vector', function () {
            const v = new Vector(0, 0);
            assert.ok(v instanceof Vector);
        });

        it('should have axis from arguments', function () {
            const x = 10;
            const y = 100;
            const v = new Vector(x, y);
            assert.strictEqual(v.x, x);
            assert.strictEqual(v.y, y);
        });
    });

    describe('.clone', function () {
        let vec1: Vector;
        let vec2: Vector;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = vec1.clone();
        });

        it('should return a clone of a vector', function () {
            assert.ok(vec2 instanceof Vector);
            assert.ok(vec2 !== vec1);
        });

        it('should have the same values as the original', function () {
            assert.strictEqual(vec1.x, vec2.x);
            assert.strictEqual(vec1.y, vec2.y);
        });
    });

    describe('.fromArray', function () {
        let arr: number[];
        let vec: Vector;

        before(function () {
            arr = [100, 200];
            vec = Vector.fromArray(arr);
        });

        it('should return an instance of Vector', function () {
            assert.ok(vec instanceof Vector);
        });

        it('should have axis from array', function () {
            assert.strictEqual(vec.x, arr[0]);
            assert.strictEqual(vec.y, arr[1]);
        });

        it('should throw if the array has less than 2 members', function () {
            assert.throws(() => Vector.fromArray([0]), TypeError);
        });

        it('should throw if the members of the array are not a number', function () {
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromArray([null, 1]), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromArray([undefined, 1]), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromArray([1, null]), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromArray(['a', null]), TypeError);
        });

        it('should accept array of strings representing number', function () {
            // @ts-expect-error We are testing invalid types for JS version
            const vec = Vector.fromArray(['1', '2']);
            assert.strictEqual(vec.x, 1);
            assert.strictEqual(vec.y, 2);
        });
    });

    describe('.fromObject', function () {
        let obj: VectorLike;
        let vec: Vector;

        before(function () {
            obj = { x: 100, y: 200 };
            vec = Vector.fromObject(obj);
        });

        it('should return an instance of Vector', function () {
            assert.ok(vec instanceof Vector);
        });

        it('should have axis from object', function () {
            assert.strictEqual(vec.x, obj.x);
            assert.strictEqual(vec.y, obj.y);
        });

        it('should throw if the object doesnt have .x and .y properties', function () {
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: 1 }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ y: 1 }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ foo: 1 }), TypeError);
        });

        it('should throw if the .x property of the object is not a number', function () {
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: null, y: 1 }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: undefined, y: 1 }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: 'a', y: 1 }), TypeError);
        });

        it('should throw if the .y property of the object is not a number', function () {
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: 1, y: null }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: 1, y: undefined }), TypeError);
            // @ts-expect-error We are testing invalid types for JS version
            assert.throws(() => Vector.fromObject({ x: 1, y: 'a' }), TypeError);
        });

        it('should accept object with strings properties representing number', function () {
            // @ts-expect-error We are testing invalid types for JS version
            const vec = Vector.fromObject({ x: '1', y: '2' });
            assert.strictEqual(vec.x, 1);
            assert.strictEqual(vec.y, 2);
        });
    });

    describe('.fromPolar', function () {
        it('should return an instance of Vector', function () {
            assert.ok(Vector.fromPolar(1, 10) instanceof Vector);
        });

        it('should create a vector without an angle', function () {
            const vec = Vector.fromPolar(0, 10);
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 0);
        });

        it('should create a vector with an angle of PI/2', function () {
            const vec = Vector.fromPolar(Math.PI / 2, 100);
            assertCloseTo(vec.x, 0);
            assert.strictEqual(vec.y, 100);
        });

        it('should create a vector with a negative angle', function () {
            const vec = Vector.fromPolar(-Math.PI / 2, 1);
            assertCloseTo(vec.x, 0);
            assert.strictEqual(vec.y, -1);
        });

        it('should create a vector with a negative magnitude', function () {
            const vec = Vector.fromPolar(0, -2);
            assertCloseTo(vec.x, -2);
            assertCloseTo(vec.y, 0);
        });
    });

    describe('.toString', function () {
        let vec: Vector;
        let ret: string;

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toString();
        });

        it('should return a string representation of the vector', function () {
            assert.strictEqual(ret, 'x:100, y:200');
        });
    });

    describe('.toArray', function () {
        let vec: Vector;
        let ret: number[];

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toArray();
        });

        it('should return an array representation of the vector', function () {
            assert.strictEqual(ret.length, 2);
            assert.strictEqual(ret[0], 100);
            assert.strictEqual(ret[1], 200);
        });
    });

    describe('.toObject', function () {
        let vec: Vector;
        let ret: { x?: number; y?: number };

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toObject();
        });

        it('should return an object representation of the vector', function () {
            assert.strictEqual(ret.x, 100);
            assert.strictEqual(ret.y, 200);
        });
    });

    describe('.toPolar', function () {
        it('should return correct values - 1', function () {
            const { r, theta } = new Vector(0, 0).toPolar();
            assert.strictEqual(r, 0);
            assert.strictEqual(theta, 0);
        });

        it('should return correct values - 2', function () {
            const { r, theta } = new Vector(10, 0).toPolar();
            assert.strictEqual(r, 10);
            assert.strictEqual(theta, 0);
        });

        it('should return correct values - 3', function () {
            const { r, theta } = new Vector(0, -1).toPolar();
            assert.strictEqual(r, 1);
            assert.strictEqual(theta, -Math.PI / 2);
        });
    });

    describe('.toString', () => {
        assert.strictEqual(new Vector(0, 0).toString(), 'x:0, y:0');
    });
});
