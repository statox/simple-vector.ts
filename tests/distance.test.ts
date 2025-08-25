import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Distance methods - Original tests', () => {
    describe('.distanceX', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.distanceX(vec2);
        });

        it('should return the distance between the X axis of 2 vectors', function () {
            assert.strictEqual(ret, -2);
        });
    });

    describe('.distanceY', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.distanceY(vec2);
        });

        it('should return the distance between the Y axis of 2 vectors', function () {
            assert.strictEqual(ret, -21);
        });
    });

    describe.skip('.distance', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 100);
            ret = vec1.distance(vec2);
        });

        it('should return the euclidean distance between 2 vectors', function () {
            assert.strictEqual(ret, -21);
        });
    });
});

test('Distance methods', () => {
    test('.distanceX', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(10, 0);

        assert.strictEqual(v1.distanceX(v2), -10);
        assert.strictEqual(v2.distanceX(v1), 10);
    });

    test('.absDistanceX', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(10, 0);

        assert.strictEqual(v1.absDistanceX(v2), 10);
        assert.strictEqual(v2.absDistanceX(v1), 10);
    });

    test('.distanceY', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(0, 10);

        assert.strictEqual(v1.distanceY(v2), -10);
        assert.strictEqual(v2.distanceY(v1), 10);
    });

    test('.absDistanceY', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(0, 10);

        assert.strictEqual(v1.absDistanceY(v2), 10);
        assert.strictEqual(v2.absDistanceY(v1), 10);
    });

    test('.distance', () => {
        assert.strictEqual(new Vector(0, 0).distance(new Vector(10, 0)), 10);
        assert.strictEqual(new Vector(10, 0).distance(new Vector(0, 0)), 10);

        assert.strictEqual(new Vector(5, -5).distance(new Vector(5, 5)), 10);
        assert.strictEqual(new Vector(100, 50).distance(new Vector(200, 60)), 100.4987562112089);
    });

    test('.distanceSq', () => {
        assert.strictEqual(new Vector(0, 0).distanceSq(new Vector(10, 0)), 100);
        assert.strictEqual(new Vector(10, 0).distanceSq(new Vector(0, 0)), 100);

        assert.strictEqual(new Vector(5, -5).distanceSq(new Vector(5, 5)), 100);
        assert.strictEqual(new Vector(100, 50).distanceSq(new Vector(200, 60)), 10100);
    });
});
