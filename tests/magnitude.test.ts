import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { DivisionByZeroError, Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('Magnitude methods - Original tests', () => {
    describe('.limit', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            ret = vec.limit(20, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should limit both vector axis by limit', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 20);
        });
    });

    describe('.mag', function () {
        let vec: Vector;
        let ret: number;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.mag();
        });

        it('should return the length of the vector', function () {
            assert.strictEqual(Math.round(ret), 141);
        });
    });

    describe('.zero', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.zero();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should interpolate half way', function () {
            assert.strictEqual(vec.x, 0);
            assert.strictEqual(vec.y, 0);
        });
    });

    describe('.norm', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(13.37, 42.42);
            ret = vec.norm();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });
    });
});

test('Magnitude methods', () => {
    test('.mag', () => {
        assert.strictEqual(new Vector(100, 0).mag(), 100);
        assert.strictEqual(new Vector(0, 100).mag(), 100);
        assert.strictEqual(new Vector(100, 50).mag(), Math.sqrt(12500));
    });

    test('.magnitude', () => {
        assert.strictEqual(new Vector(100, 0).magnitude(), 100);
        assert.strictEqual(new Vector(0, 100).magnitude(), 100);
        assert.strictEqual(new Vector(100, 50).magnitude(), Math.sqrt(12500));
    });

    test('.magSq', () => {
        assert.strictEqual(new Vector(100, 0).magSq(), 10000);
        assert.strictEqual(new Vector(0, 100).magSq(), 10000);
        assert.strictEqual(new Vector(100, 50).magSq(), 12500);
    });

    test('.normalize', () => {
        it('Should throw when vector is zero', () => {
            const v1 = new Vector(0, 0);
            assert.throws(() => v1.normalize(), DivisionByZeroError);
        });

        it('Should work when axes are >1', () => {
            const v1 = new Vector(10, 0).normalize();
            assert.strictEqual(v1.x, 1);
            assert.strictEqual(v1.y, 0);

            const v2 = new Vector(0, 100).normalize();
            assert.strictEqual(v2.x, 0);
            assert.strictEqual(v2.y, 1);

            const v3 = new Vector(100, 100).normalize();
            assertCloseTo(v3.x, Math.sqrt(2) / 2);
            assertCloseTo(v3.y, Math.sqrt(2) / 2);
        });

        it('Should work when axes are ]0, 1]', () => {
            const v1 = new Vector(0.1, 0).normalize();
            assert.strictEqual(v1.x, 1);
            assert.strictEqual(v1.y, 0);

            const v2 = new Vector(0, 0.1).normalize();
            assert.strictEqual(v2.x, 0);
            assert.strictEqual(v2.y, 1);

            const v3 = new Vector(0.5, 0.5).normalize();
            assertCloseTo(v3.x, Math.sqrt(2) / 2);
            assertCloseTo(v3.y, Math.sqrt(2) / 2);
        });

        it('Should work when axes are smaller than -1', () => {
            const v1 = new Vector(-10, 0).normalize();
            assert.strictEqual(v1.x, -1);
            assert.strictEqual(v1.y, 0);

            const v2 = new Vector(0, -100).normalize();
            assert.strictEqual(v2.x, 0);
            assert.strictEqual(v2.y, -1);

            const v3 = new Vector(-20, -20).normalize();
            assertCloseTo(v3.x, -Math.sqrt(2) / 2);
            assertCloseTo(v3.y, -Math.sqrt(2) / 2);
        });

        it('Should work when axes are [-1, 0[', () => {
            const v1 = new Vector(-0.1, 0).normalize();
            assert.strictEqual(v1.x, -1);
            assert.strictEqual(v1.y, 0);

            const v2 = new Vector(0, -0.1).normalize();
            assert.strictEqual(v2.x, 0);
            assert.strictEqual(v2.y, -1);

            const v3 = new Vector(-0.5, -0.5).normalize();
            assertCloseTo(v3.x, -Math.sqrt(2) / 2);
            assertCloseTo(v3.y, -Math.sqrt(2) / 2);
        });
    });

    test('.norm', () => {
        const v1 = new Vector(10, 0).norm();
        assert.strictEqual(v1.x, 1);
        assert.strictEqual(v1.y, 0);

        const v2 = new Vector(0, 100).norm();
        assert.strictEqual(v2.x, 0);
        assert.strictEqual(v2.y, 1);

        const v3 = new Vector(-20, -20).norm();
        assertCloseTo(v3.x, -Math.sqrt(2) / 2);
        assertCloseTo(v3.y, -Math.sqrt(2) / 2);
    });

    test('.limitX', () => {
        const v1 = new Vector(100, 50).limitX(80, 0.9);
        assert.strictEqual(v1.x, 90);
        assert.strictEqual(v1.y, 50);

        const v2 = new Vector(5, 10).limitX(8, 0.5);
        assert.strictEqual(v2.x, 5);
        assert.strictEqual(v2.y, 10);
    });

    test('.limitY', () => {
        const v1 = new Vector(50, 100).limitY(80, 0.9);
        assert.strictEqual(v1.x, 50);
        assert.strictEqual(v1.y, 90);

        const v2 = new Vector(10, 5).limitY(8, 0.5);
        assert.strictEqual(v2.x, 10);
        assert.strictEqual(v2.y, 5);
    });

    test('.limit', () => {
        const v1 = new Vector(100, 50).limit(80, 0.9);
        assert.strictEqual(v1.x, 90);
        assert.strictEqual(v1.y, 50);

        const v2 = new Vector(5, 10).limit(8, 0.5);
        assert.strictEqual(v2.x, 5);
        assert.strictEqual(v2.y, 5);

        const v3 = new Vector(200, 200).limit(100, 0.1);
        assert.strictEqual(v3.x, 20);
        assert.strictEqual(v3.y, 20);
    });

    test('.resize', () => {
        it('should be chainable', function () {
            const vec1 = new Vector(1, 0);
            const ret = vec1.resize(10);
            assert.ok(ret === vec1);
        });
        it('should throw if the magnitude is not defined', () => {
            // @ts-expect-error We are testing an incorrect call
            assert.throws(() => new Vector(1, 1).resize(), TypeError);
            // @ts-expect-error We are testing an incorrect call
            assert.throws(() => new Vector(1, 1).resize(null), TypeError);
        });
        it('should keep the angle and change the magnitude for a positive value', function () {
            const vec1 = new Vector(12, 9);
            const originalAngle = vec1.horizontalAngle();
            vec1.resize(10);
            assert.strictEqual(vec1.horizontalAngle(), originalAngle);
            assert.strictEqual(vec1.magnitude(), 10);
        });
        it('should rotate the angle by 180deg and change the magnitude for a negative value', function () {
            const vec1 = new Vector(12, 9);
            const originalAngle = vec1.horizontalAngle();
            vec1.resize(-10);
            assert.strictEqual(vec1.horizontalAngle(), originalAngle - Math.PI);
            assert.strictEqual(vec1.magnitude(), 10);
        });
        it('TBD for value equal to zero', function () {
            const vec1 = new Vector(12, 9);
            // const originalAngle = vec1.horizontalAngle();
            vec1.resize(0);
            assert.strictEqual(vec1.horizontalAngle(), 0);
            assert.strictEqual(vec1.magnitude(), 0);
        });
    });
});
