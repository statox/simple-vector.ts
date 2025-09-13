import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../../src/Vector.ts';
import { assertCloseTo } from '../helpers.ts';

test('Rotation methods - Original tests', () => {
    describe('.rotateBy', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.rotateBy((90 * Math.PI) / 180);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should rotate the vector by certain degrees', function () {
            assert.strictEqual(vec.x, -100);
            assert.strictEqual(vec.y, 100);
            assertCloseTo(Math.abs(vec.horizontalAngle() - (135 * Math.PI) / 180), 0);
        });
    });

    describe('.rotateByDeg', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.rotateByDeg(90);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should set the rotation angle in degrees', function () {
            assert.strictEqual(vec.x, -100);
            assert.strictEqual(vec.y, 100);
        });
    });

    describe('.rotateTo', function () {
        let vecX: Vector;
        let vecY: Vector;
        let retX: Vector;
        let retY: Vector;

        before(function () {
            vecX = new Vector(100, 0);
            vecY = new Vector(0, 100);
            retX = vecX.rotateTo((120 * Math.PI) / 180);
            retY = vecY.rotateTo((120 * Math.PI) / 180);
        });

        it('should be chainable', function () {
            assert.ok(retX === vecX);
        });

        it('should rotate any Vector to a given angle', function () {
            assertCloseTo(vecX.angle(), (120 * Math.PI) / 180);
            assertCloseTo(vecY.angle(), (120 * Math.PI) / 180);
        });

        it('should keep the length', function () {
            assert.strictEqual(retX.mag(), 100);
            assert.strictEqual(retY.mag(), 100);
        });
    });

    describe('.rotateToDeg', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 0);
            ret = vec.rotateToDeg(120);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should rotate any Vector to a given angle', function () {
            assertCloseTo(Math.abs(vec.angleDeg() - 120), 0);
        });

        it('should keep the length', function () {
            assert.strictEqual(ret.mag(), 100);
        });
    });
});

test('Rotation methods', () => {
    test('.rotateTo', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateTo(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), Math.PI);
        assert.equal(v.x, -10);
        assert.equal(v.y, 0);

        v.rotateTo(-Math.PI / 2);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), -Math.PI / 2);
        assert.equal(v.x, 0);
        assert.equal(v.y, -10);

        v.rotateTo(Math.PI / 4);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 4);
        assertCloseTo(v.x, 7.0710678);
        assertCloseTo(v.x, v.y);

        v.rotateTo((3 * Math.PI) / 4);
        assert.strictEqual(v.horizontalAngle(), (3 * Math.PI) / 4);
        assertCloseTo(v.x, -7.0710678);
        assertCloseTo(v.x, -v.y);

        v.rotateTo(-2);
        assert.strictEqual(v.horizontalAngle(), -2);
    });

    test('.rotateToDeg', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateToDeg(180);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), Math.PI);
        assert.equal(v.x, -10);
        assert.equal(v.y, 0);

        v.rotateToDeg(-90);
        v.unfloat();
        assert.strictEqual(v.horizontalAngle(), -Math.PI / 2);
        assert.equal(v.x, 0);
        assert.equal(v.y, -10);

        v.rotateToDeg(45);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 4);
        assertCloseTo(v.x, 7.0710678);
        assertCloseTo(v.x, v.y);

        v.rotateToDeg(135);
        assert.strictEqual(v.horizontalAngle(), (3 * Math.PI) / 4);
        assertCloseTo(v.x, -7.0710678);
        assertCloseTo(v.x, -v.y);
    });

    test('.rotateDeg', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngleDeg(), 0);

        v.rotateByDeg(180);
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotateByDeg(10);
        assert.strictEqual(v.horizontalAngleDeg(), -170);

        v.rotateByDeg(100);
        assertCloseTo(v.horizontalAngleDeg(), -70);
    });

    test('.rotate - 180', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngleDeg(), 0);

        v.rotateBy(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotateBy(Math.PI);
        v.unfloat();
        // Using equal instead of strictEqual because horizontalAngleDeg()
        // produces -0, strictEqual(-0, 0) throws but -0 === 0 is true
        // so we consider test good enough
        assert.equal(v.horizontalAngleDeg(), 0);

        v.rotateBy(Math.PI);
        v.unfloat();
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotateBy(Math.PI / 2);
        v.unfloat();
        assert.equal(v.horizontalAngleDeg(), -90);
    });

    test('.rotate - PI/3', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateBy(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 3);

        v.rotateBy(Math.PI / 3);
        assertCloseTo(v.horizontalAngle(), (2 * Math.PI) / 3);

        v.rotateBy(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI);
    });

    test('.rotateTowards', () => {
        it('should be chainable', function () {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);
            const ret = vec1.rotateTowards(vec2, Math.PI / 4);
            assert.ok(ret === vec1);
        });

        it('Should throw if the max angle is negative', () => {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);
            assert.throws(() => vec1.rotateTowards(vec2, -1), RangeError);
        });

        it('Should rotate the vector toward the other one and respect the max angle', () => {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);

            vec1.rotateTowards(vec2, Math.PI / 4);
            assertCloseTo(vec1.horizontalAngle(), Math.PI / 4);
        });

        it('Should not overshoot if max angle is bigger than gap', () => {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);

            vec1.rotateTowards(vec2, Math.PI);
            assertCloseTo(vec1.horizontalAngle(), vec2.horizontalAngle());
        });

        it('Should choose the shortest route', () => {
            const vec1 = new Vector(-10, -10);
            const vec2 = new Vector(-10, 10);

            vec1.rotateTowards(vec2, Math.PI / 4);
            assertCloseTo(vec1.horizontalAngle(), -Math.PI);
        });
    });

    test('.rotateTowardsDeg', () => {
        it('should be chainable', function () {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);
            const ret = vec1.rotateTowardsDeg(vec2, 45);
            assert.ok(ret === vec1);
        });

        it('Should use degrees to the maxAngle', () => {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);

            vec1.rotateTowardsDeg(vec2, 2);
            assertCloseTo(vec1.horizontalAngleDeg(), 2);
        });
    });
});
