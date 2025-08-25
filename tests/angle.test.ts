import { before, describe, it, test } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('Angle methods - Original tests', () => {
    describe('.horizontalAngle', function () {
        let angleX: number;
        let angleY: number;
        let angleXPi: number;
        before(function () {
            angleX = new Vector(100, 0).horizontalAngle();
            angleY = new Vector(0, 100).horizontalAngle();
            angleXPi = new Vector(-100, 0).horizontalAngle();
        });

        it('should x directed vector to 0°', function () {
            assertCloseTo(Math.abs(angleX - 0), 0);
        });

        it('should y directed vector to 90°', function () {
            assertCloseTo(Math.abs(angleY - Math.PI / 2), 0);
        });

        it('should negative x directed vector to 180°', function () {
            assertCloseTo(Math.abs(angleXPi - Math.PI), 0);
        });
    });
});

test('Angle methods', () => {
    test('.horizontalAngle', () => {
        assert.strictEqual(new Vector(0, 0).horizontalAngle(), 0);

        assert.strictEqual(new Vector(10, 0).horizontalAngle(), 0);
        assert.strictEqual(new Vector(0, 10).horizontalAngle(), Math.PI / 2);
        assert.strictEqual(new Vector(-10, 0).horizontalAngle(), Math.PI);
        assert.strictEqual(new Vector(0, -10).horizontalAngle(), -Math.PI / 2);

        assert.strictEqual(new Vector(10, 10).horizontalAngle(), Math.PI / 4);
        assert.strictEqual(new Vector(-10, 10).horizontalAngle(), (3 * Math.PI) / 4);
        assert.strictEqual(new Vector(-10, -10).horizontalAngle(), (-3 * Math.PI) / 4);
        assert.strictEqual(new Vector(10, -10).horizontalAngle(), -Math.PI / 4);
    });

    test('.horizontalAngleDeg', () => {
        assert.strictEqual(new Vector(0, 0).horizontalAngleDeg(), 0);

        assert.strictEqual(new Vector(10, 0).horizontalAngleDeg(), 0);
        assert.strictEqual(new Vector(0, 10).horizontalAngleDeg(), 90);
        assert.strictEqual(new Vector(-10, 0).horizontalAngleDeg(), 180);
        assert.strictEqual(new Vector(0, -10).horizontalAngleDeg(), -90);

        assert.strictEqual(new Vector(10, 10).horizontalAngleDeg(), 45);
        assert.strictEqual(new Vector(-10, 10).horizontalAngleDeg(), 135);
        assert.strictEqual(new Vector(-10, -10).horizontalAngleDeg(), -135);
        assert.strictEqual(new Vector(10, -10).horizontalAngleDeg(), -45);
    });

    test('.verticalAngle', () => {
        assert.strictEqual(new Vector(0, 0).verticalAngle(), 0);

        assert.strictEqual(new Vector(0, 10).verticalAngle(), 0);
        assert.strictEqual(new Vector(-10, 0).verticalAngle(), -Math.PI / 2);
        assert.strictEqual(new Vector(0, -10).verticalAngle(), Math.PI);
        assert.strictEqual(new Vector(10, 0).verticalAngle(), Math.PI / 2);
    });

    test('.verticalAngleDeg', () => {
        assert.strictEqual(new Vector(0, 0).verticalAngleDeg(), 0);

        assert.strictEqual(new Vector(0, 10).verticalAngleDeg(), 0);
        assert.strictEqual(new Vector(-10, 0).verticalAngleDeg(), -90);
        assert.strictEqual(new Vector(0, -10).verticalAngleDeg(), 180);
        assert.strictEqual(new Vector(10, 0).verticalAngleDeg(), 90);
    });

    test('.angleWith', () => {
        assert.strictEqual(new Vector(0, 0).angleWith(new Vector(0, 0)), 0);

        const v1 = new Vector(1, 0);
        assert.strictEqual(v1.angleWith(new Vector(1, 0)), 0);
        assertCloseTo(v1.angleWith(new Vector(1, 1)), Math.PI / 4);
        assert.strictEqual(v1.angleWith(new Vector(0, 1)), Math.PI / 2);
        assertCloseTo(v1.angleWith(new Vector(-1, 1)), (3 * Math.PI) / 4);
        assert.strictEqual(v1.angleWith(new Vector(-1, 0)), Math.PI);

        assertCloseTo(v1.angleWith(new Vector(1, -1)), Math.PI / 4);
        assert.strictEqual(v1.angleWith(new Vector(0, -1)), Math.PI / 2);
        assertCloseTo(v1.angleWith(new Vector(-1, -1)), (3 * Math.PI) / 4);
        assert.strictEqual(v1.angleWith(new Vector(-1, -0)), Math.PI);

        const v2 = new Vector(-1, 1);
        assertCloseTo(v2.angleWith(new Vector(-1, 1)), 0);

        assertCloseTo(v2.angleWith(new Vector(-1, 0)), Math.PI / 4);
        assertCloseTo(v2.angleWith(new Vector(0, -1)), (3 * Math.PI) / 4);
        assertCloseTo(v2.angleWith(new Vector(1, -1)), Math.PI);
        assertCloseTo(v2.angleWith(new Vector(1, 0)), (3 * Math.PI) / 4);
        assertCloseTo(v2.angleWith(new Vector(1, 1)), Math.PI / 2);
        assertCloseTo(v2.angleWith(new Vector(0, 1)), Math.PI / 4);
    });

    test('.angleDegWith', () => {
        assert.strictEqual(new Vector(0, 0).angleDegWith(new Vector(0, 0)), 0);

        const v1 = new Vector(1, 0);
        assert.strictEqual(v1.angleDegWith(new Vector(1, 0)), 0);
        assertCloseTo(v1.angleDegWith(new Vector(1, 1)), 45);
        assert.strictEqual(v1.angleDegWith(new Vector(0, 1)), 90);
        assertCloseTo(v1.angleDegWith(new Vector(-1, 1)), 135);
        assert.strictEqual(v1.angleDegWith(new Vector(-1, 0)), 180);

        assertCloseTo(v1.angleDegWith(new Vector(1, -1)), 45);
        assert.strictEqual(v1.angleDegWith(new Vector(0, -1)), 90);
        assertCloseTo(v1.angleDegWith(new Vector(-1, -1)), 135);
        assert.strictEqual(v1.angleDegWith(new Vector(-1, -0)), 180);

        const v2 = new Vector(-1, 1);
        assertCloseTo(v2.angleDegWith(new Vector(-1, 1)), 0);

        assertCloseTo(v2.angleDegWith(new Vector(-1, 0)), 45);
        assertCloseTo(v2.angleDegWith(new Vector(0, -1)), 135);
        assertCloseTo(v2.angleDegWith(new Vector(1, -1)), 180);
        assertCloseTo(v2.angleDegWith(new Vector(1, 0)), 135);
        assertCloseTo(v2.angleDegWith(new Vector(1, 1)), 90);
        assertCloseTo(v2.angleDegWith(new Vector(0, 1)), 45);
    });

    test('.orientedAngleWith', () => {
        assert.strictEqual(new Vector(0, 0).orientedAngleWith(new Vector(0, 0)), 0);

        const v1 = new Vector(1, 0);
        assert.strictEqual(v1.orientedAngleWith(new Vector(1, 0)), 0);
        assertCloseTo(v1.orientedAngleWith(new Vector(1, 1)), Math.PI / 4);
        assert.strictEqual(v1.orientedAngleWith(new Vector(0, 1)), Math.PI / 2);
        assertCloseTo(v1.orientedAngleWith(new Vector(-1, 1)), (3 * Math.PI) / 4);
        assert.strictEqual(v1.orientedAngleWith(new Vector(-1, 0)), Math.PI);

        assertCloseTo(v1.orientedAngleWith(new Vector(1, -1)), -Math.PI / 4);
        assert.strictEqual(v1.orientedAngleWith(new Vector(0, -1)), -Math.PI / 2);
        assertCloseTo(v1.orientedAngleWith(new Vector(-1, -1)), -(3 * Math.PI) / 4);
        assert.strictEqual(v1.orientedAngleWith(new Vector(-1, -0)), Math.PI);

        const v2 = new Vector(-1, 1);
        assertCloseTo(v2.orientedAngleWith(new Vector(-1, 1)), 0);

        assertCloseTo(v2.orientedAngleWith(new Vector(-1, 0)), Math.PI / 4);
        assertCloseTo(v2.orientedAngleWith(new Vector(0, -1)), (3 * Math.PI) / 4);
        assertCloseTo(v2.orientedAngleWith(new Vector(1, -1)), Math.PI);
        assertCloseTo(v2.orientedAngleWith(new Vector(1, 0)), -(3 * Math.PI) / 4);
        assertCloseTo(v2.orientedAngleWith(new Vector(1, 1)), -Math.PI / 2);
        assertCloseTo(v2.orientedAngleWith(new Vector(0, 1)), -Math.PI / 4);
    });

    test('.orientedAngleDegWith', () => {
        assert.strictEqual(new Vector(0, 0).orientedAngleDegWith(new Vector(0, 0)), 0);

        const v1 = new Vector(1, 0);
        assert.strictEqual(v1.orientedAngleDegWith(new Vector(1, 0)), 0);
        assertCloseTo(v1.orientedAngleDegWith(new Vector(1, 1)), 45);
        assert.strictEqual(v1.orientedAngleDegWith(new Vector(0, 1)), 90);
        assertCloseTo(v1.orientedAngleDegWith(new Vector(-1, 1)), 135);
        assert.strictEqual(v1.orientedAngleDegWith(new Vector(-1, 0)), 180);

        assertCloseTo(v1.orientedAngleDegWith(new Vector(1, -1)), -45);
        assert.strictEqual(v1.orientedAngleDegWith(new Vector(0, -1)), -90);
        assertCloseTo(v1.orientedAngleDegWith(new Vector(-1, -1)), -135);
        assert.strictEqual(v1.orientedAngleDegWith(new Vector(-1, -0)), 180);

        const v2 = new Vector(-1, 1);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(-1, 1)), 0);

        assertCloseTo(v2.orientedAngleDegWith(new Vector(-1, 0)), 45);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(0, -1)), 135);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(1, -1)), 180);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(1, 0)), -135);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(1, 1)), -90);
        assertCloseTo(v2.orientedAngleDegWith(new Vector(0, 1)), -45);
    });
});
