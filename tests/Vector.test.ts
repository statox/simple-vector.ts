import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { DivisionByZeroError, Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('Addition methods', () => {
    test('addX', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.addX(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 10);
    });

    test('addY', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.addY(vec2);
        assert.strictEqual(vec1.x, 10);
        assert.strictEqual(vec1.y, 40);
    });

    test('add', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(20, 30);

        vec1.add(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 40);
    });

    test('addScalar', () => {
        const vec = new Vector(10, 20);

        vec.addScalar(2);
        assert.strictEqual(vec.x, 12);
        assert.strictEqual(vec.y, 22);
    });

    test('addScalarX', () => {
        const vec = new Vector(10, 20);

        vec.addScalarX(2);
        assert.equal(vec.x, 12);
        assert.equal(vec.y, 20);
    });

    test('addScalarY', () => {
        const vec = new Vector(10, 20);

        vec.addScalarY(2);
        assert.equal(vec.x, 10);
        assert.equal(vec.y, 22);
    });
});

test('Subtraction methods', () => {
    test('subtractX', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtractX(vec2);
        assert.strictEqual(vec1.x, 20);
        assert.strictEqual(vec1.y, 30);
    });

    test('subtractY', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtractY(vec2);
        assert.strictEqual(vec1.x, 30);
        assert.strictEqual(vec1.y, 10);
    });

    test('subtract', () => {
        const vec1 = new Vector(30, 30);
        const vec2 = new Vector(10, 20);

        vec1.subtract(vec2);
        assert.strictEqual(vec1.x, 20);
        assert.strictEqual(vec1.y, 10);
    });

    test('subtractScalar', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalar(2);
        assert.strictEqual(vec.x, 8);
        assert.strictEqual(vec.y, 18);
    });

    test('subtractScalarX', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalarX(2);
        assert.strictEqual(vec.x, 8);
        assert.strictEqual(vec.y, 20);
    });

    test('subtractScalarY', () => {
        const vec = new Vector(10, 20);

        vec.subtractScalarY(2);
        assert.strictEqual(vec.x, 10);
        assert.strictEqual(vec.y, 18);
    });
});

test('Division methods', () => {
    test('divideX', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 0);

        vec1.divideX(vec2);
        assert.strictEqual(vec1.x, 50);
        assert.strictEqual(vec1.y, 50);

        assert.throws(() => vec1.divideX(new Vector(0, 10)), DivisionByZeroError);
    });

    test('divideY', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(0, 2);

        vec1.divideY(vec2);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 25);

        assert.throws(() => vec1.divideY(new Vector(10, 0)), DivisionByZeroError);
    });

    test('divide', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 2);

        vec1.divide(vec2);
        assert.strictEqual(vec1.x, 50);
        assert.strictEqual(vec1.y, 25);

        assert.throws(() => vec1.divide(new Vector(0, 0)), DivisionByZeroError);
        assert.throws(() => vec1.divide(new Vector(0, 10)), DivisionByZeroError);
        assert.throws(() => vec1.divide(new Vector(10, 0)), DivisionByZeroError);
    });

    test('divideScalar', () => {
        const vec = new Vector(100, 50);

        vec.divideScalar(2);
        assert.strictEqual(vec.x, 50);
        assert.strictEqual(vec.y, 25);

        assert.throws(() => vec.divideScalar(0), DivisionByZeroError);
    });

    test('divideScalarX', () => {
        const vec = new Vector(100, 50);

        vec.divideScalarX(2);
        assert.strictEqual(vec.x, 50);
        assert.strictEqual(vec.y, 50);

        assert.throws(() => vec.divideScalarX(0), DivisionByZeroError);
    });

    test('divideScalarY', () => {
        const vec = new Vector(100, 50);

        vec.divideScalarY(2);
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 25);

        assert.throws(() => vec.divideScalarY(0), DivisionByZeroError);
    });
});

test('Multiplication methods', () => {
    test('multiplyX', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 0);

        vec1.multiplyX(vec2);
        assert.strictEqual(vec1.x, 200);
        assert.strictEqual(vec1.y, 50);
    });

    test('multiplyY', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(0, 2);

        vec1.multiplyY(vec2);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 100);
    });

    test('multiply', () => {
        const vec1 = new Vector(100, 50);
        const vec2 = new Vector(2, 2);

        vec1.multiply(vec2);
        assert.strictEqual(vec1.x, 200);
        assert.strictEqual(vec1.y, 100);
    });

    test('multiplyScalar', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalar(2);
        assert.strictEqual(vec.x, 200);
        assert.strictEqual(vec.y, 100);
    });

    test('multiplyScalarX', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalarX(2);
        assert.strictEqual(vec.x, 200);
        assert.strictEqual(vec.y, 50);
    });

    test('multiplyScalarY', () => {
        const vec = new Vector(100, 50);

        vec.multiplyScalarY(2);
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 100);
    });

    test('invertX', () => {
        const vec = new Vector(100, 50);

        vec.invertX();
        assert.strictEqual(vec.x, -100);
        assert.strictEqual(vec.y, 50);
    });

    test('invertY', () => {
        const vec = new Vector(100, 50);

        vec.invertY();
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, -50);
    });

    test('invert', () => {
        const vec = new Vector(100, 50);

        vec.invert();
        assert.strictEqual(vec.x, -100);
        assert.strictEqual(vec.y, -50);
    });
});

test('Distance methods', () => {
    test('distanceX', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(10, 0);

        assert.strictEqual(v1.distanceX(v2), -10);
        assert.strictEqual(v2.distanceX(v1), 10);
    });

    test('absDistanceX', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(10, 0);

        assert.strictEqual(v1.absDistanceX(v2), 10);
        assert.strictEqual(v2.absDistanceX(v1), 10);
    });

    test('distanceY', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(0, 10);

        assert.strictEqual(v1.distanceY(v2), -10);
        assert.strictEqual(v2.distanceY(v1), 10);
    });

    test('absDistanceY', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(0, 10);

        assert.strictEqual(v1.absDistanceY(v2), 10);
        assert.strictEqual(v2.absDistanceY(v1), 10);
    });

    test('distance', () => {
        assert.strictEqual(new Vector(0, 0).distance(new Vector(10, 0)), 10);
        assert.strictEqual(new Vector(10, 0).distance(new Vector(0, 0)), 10);

        assert.strictEqual(new Vector(5, -5).distance(new Vector(5, 5)), 10);
        assert.strictEqual(new Vector(100, 50).distance(new Vector(200, 60)), 100.4987562112089);
    });

    test('distanceSq', () => {
        assert.strictEqual(new Vector(0, 0).distanceSq(new Vector(10, 0)), 100);
        assert.strictEqual(new Vector(10, 0).distanceSq(new Vector(0, 0)), 100);

        assert.strictEqual(new Vector(5, -5).distanceSq(new Vector(5, 5)), 100);
        assert.strictEqual(new Vector(100, 50).distanceSq(new Vector(200, 60)), 10100);
    });
});

test('Magnitude methods', () => {
    test('length', () => {
        assert.strictEqual(new Vector(100, 0).length(), 100);
        assert.strictEqual(new Vector(0, 100).length(), 100);
        assert.strictEqual(new Vector(100, 50).length(), 111.80339887498948);
    });

    test('normalize', () => {
        const v1 = new Vector(10, 0).normalize();
        assert.strictEqual(v1.x, 1);
        assert.strictEqual(v1.y, 0);

        const v2 = new Vector(0, 100).normalize();
        assert.strictEqual(v2.x, 0);
        assert.strictEqual(v2.y, 1);

        const v3 = new Vector(-20, -20).normalize();
        assertCloseTo(v3.x, -Math.sqrt(2) / 2);
        assertCloseTo(v3.y, -Math.sqrt(2) / 2);
    });

    test('norm', () => {
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

    test('limitX', () => {
        const v1 = new Vector(100, 50).limitX(80, 0.9);
        assert.strictEqual(v1.x, 90);
        assert.strictEqual(v1.y, 50);

        const v2 = new Vector(5, 10).limitX(8, 0.5);
        assert.strictEqual(v2.x, 5);
        assert.strictEqual(v2.y, 10);
    });

    test('limitY', () => {
        const v1 = new Vector(50, 100).limitY(80, 0.9);
        assert.strictEqual(v1.x, 50);
        assert.strictEqual(v1.y, 90);

        const v2 = new Vector(10, 5).limitY(8, 0.5);
        assert.strictEqual(v2.x, 10);
        assert.strictEqual(v2.y, 5);
    });

    test('limit', () => {
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

    test('resize', () => {
        it('should be chainable', function () {
            const vec1 = new Vector(1, 0);
            const ret = vec1.resize(10);
            assert.ok(ret === vec1);
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

test('Randomization methods', () => {
    /**
     * TODO Use a different RNG because Math.random() is not seedable so tests
     * can't be entirely reproducible.
     */

    test('randomizeX', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomizeX(topLeft, bottomRight);
        assert.ok(v.x >= topLeft.x && v.x <= bottomRight.x);
        assert.strictEqual(v.y, 0);
    });

    test('randomizeY', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomizeY(topLeft, bottomRight);
        assert.strictEqual(v.x, 0);
        assert.ok(v.y >= topLeft.y && v.y <= bottomRight.y);
    });

    test('randomize', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomize(topLeft, bottomRight);
        assert.ok(v.x >= topLeft.x && v.x <= bottomRight.x);
        assert.ok(v.y >= topLeft.y && v.y <= bottomRight.y);
    });
});

test('Rotation methods', () => {
    test('rotateTo', () => {
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

    test('rotateToDeg', () => {
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

    test('rotateDeg', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngleDeg(), 0);

        v.rotateByDeg(180);
        assert.strictEqual(v.horizontalAngleDeg(), 180);

        v.rotateByDeg(10);
        assert.strictEqual(v.horizontalAngleDeg(), -170);

        v.rotateByDeg(100);
        assertCloseTo(v.horizontalAngleDeg(), -70);
    });

    test('rotate - 180', () => {
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

    test('rotate - PI/3', () => {
        const v = new Vector(10, 0);
        assert.strictEqual(v.horizontalAngle(), 0);

        v.rotateBy(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI / 3);

        v.rotateBy(Math.PI / 3);
        assertCloseTo(v.horizontalAngle(), (2 * Math.PI) / 3);

        v.rotateBy(Math.PI / 3);
        assert.strictEqual(v.horizontalAngle(), Math.PI);
    });

    test('rotateTowards', () => {
        it('should be chainable', function () {
            const vec1 = new Vector(10, 0);
            const vec2 = new Vector(0, 10);
            const ret = vec1.rotateTowards(vec2, Math.PI / 4);
            assert.ok(ret === vec1);
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
            const vec1 = new Vector(-10, 10);
            const vec2 = new Vector(-10, -10);

            vec1.rotateTowards(vec2, Math.PI / 4);
            assertCloseTo(vec1.horizontalAngle(), Math.PI);
        });
    });

    test('rotateTowardsDeg', () => {
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

test('Angle methods', () => {
    test('horizontal angle radians', () => {
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

    test('horizontal angle degrees', () => {
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

    test('vertical angle radians', () => {
        assert.strictEqual(new Vector(0, 0).verticalAngle(), 0);

        assert.strictEqual(new Vector(0, 10).verticalAngle(), 0);
        assert.strictEqual(new Vector(-10, 0).verticalAngle(), -Math.PI / 2);
        assert.strictEqual(new Vector(0, -10).verticalAngle(), Math.PI);
        assert.strictEqual(new Vector(10, 0).verticalAngle(), Math.PI / 2);
    });

    test('vertical angle degrees', () => {
        assert.strictEqual(new Vector(0, 0).verticalAngleDeg(), 0);

        assert.strictEqual(new Vector(0, 10).verticalAngleDeg(), 0);
        assert.strictEqual(new Vector(-10, 0).verticalAngleDeg(), -90);
        assert.strictEqual(new Vector(0, -10).verticalAngleDeg(), 180);
        assert.strictEqual(new Vector(10, 0).verticalAngleDeg(), 90);
    });

    test('angle with radians', () => {
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

    test('angle with degrees', () => {
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

    test('oriented angle with radians', () => {
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

    test('oriented angle with degrees', () => {
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

test('Mix methods', () => {
    test('mixX', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mixX(vec2, 0.5);
        assert.strictEqual(vec1.x, 150);
        assert.strictEqual(vec1.y, 100);

        assert.throws(() => vec1.mixX(vec2, -1), RangeError);
        assert.throws(() => vec1.mixX(vec2, 1.5), RangeError);
    });

    test('mixY', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mixY(vec2, 0.5);
        assert.strictEqual(vec1.x, 100);
        assert.strictEqual(vec1.y, 150);

        assert.throws(() => vec1.mixY(vec2, -1), RangeError);
        assert.throws(() => vec1.mixY(vec2, 1.5), RangeError);
    });

    test('mix', () => {
        const vec1 = new Vector(100, 100);
        const vec2 = new Vector(200, 200);

        vec1.mix(vec2, 0.5);
        assert.strictEqual(vec1.x, 150);
        assert.strictEqual(vec1.y, 150);

        assert.throws(() => vec1.mix(vec2, -1), RangeError);
        assert.throws(() => vec1.mix(vec2, 1.5), RangeError);
    });
});

test('Copy methods', () => {
    test('copyX', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copyX(vec2);

        assert.strictEqual(vec1.x, 0);
        assert.strictEqual(vec1.y, 10);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });

    test('copyY', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copyY(vec2);

        assert.strictEqual(vec1.x, 10);
        assert.strictEqual(vec1.y, 0);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });

    test('copyY', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copy(vec2);

        assert.strictEqual(vec1.x, 0);
        assert.strictEqual(vec1.y, 0);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });
});

test('toString', () => {
    assert.strictEqual(new Vector(0, 0).toString(), 'x:0, y:0');
});

test('Precision methods', () => {
    test('unfloat', () => {
        const vec = new Vector(100.2, 50.9);

        vec.unfloat();
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, 51);
    });

    test('toFixed', () => {
        const vec = new Vector(100.2345, 50.9876);

        vec.toFixed(2);
        assert.strictEqual(vec.x, 100.23);
        assert.strictEqual(vec.y, 50.99);
    });
});

describe('cross', function () {
    let vec1: Vector;
    let vec2: Vector;
    let ret: number;

    before(function () {
        vec1 = new Vector(42, 21);
        vec2 = new Vector(44, 42);
        ret = vec1.cross(vec2);
    });

    it('should return the cross product of 2 vectors', function () {
        assert.strictEqual(ret, 840);
    });
});

describe('isParallelTo', () => {
    it('Should have a tolerance for rounding errors', () => {
        const vec1 = new Vector(14, -23);
        const vec2 = vec1.clone().rotateBy(2 * Math.PI);
        assert.ok(vec1.isParallelTo(vec2));
    });

    it('Should find parallel vectors - 1', () => {
        assert.ok(new Vector(2, 2).isParallelTo(new Vector(-2, -2)));
    });
    it('Should find parallel vectors - 2', () => {
        assert.ok(new Vector(-1, 3).isParallelTo(new Vector(-4, 12)));
    });
    it('Should find parallel vectors - 4', () => {
        assert.ok(new Vector(7, -4).isParallelTo(new Vector(3.5, -2)));
    });
    it('Should find parallel vectors - 5', () => {
        assert.ok(new Vector(-8, 2).isParallelTo(new Vector(-4, 1)));
    });
    it('Should find parallel vectors - 6', () => {
        assert.ok(new Vector(12, 0).isParallelTo(new Vector(-2134, 0)));
    });
    it('Should find parallel vectors - 6', () => {
        assert.ok(new Vector(0, 4).isParallelTo(new Vector(0, -1)));
    });
    it('Should find parallel vectors - 7', () => {
        assert.ok(new Vector(-0, 3).isParallelTo(new Vector(0, 1)));
    });

    it('Should find non parallel vectors - 1', () => {
        assert.strictEqual(false, new Vector(2, 2).isParallelTo(new Vector(3, 6)));
    });
    it('Should find non parallel vectors - 1', () => {
        assert.strictEqual(false, new Vector(213, -123).isParallelTo(new Vector(0, 90)));
    });
});

describe('isPerpendicularTo', () => {
    it('Should have a tolerance for rounding errors -1 ', () => {
        const vec1 = new Vector(14, -23);
        const vec2 = vec1.clone().rotateBy(Math.PI / 2);
        assert.ok(vec1.isPerpendicularTo(vec2));
    });
    it('Should have a tolerance for rounding errors -2', () => {
        const vec1 = new Vector(14, -23);
        const vec2 = vec1.clone().rotateBy(-Math.PI / 2);
        assert.ok(vec1.isPerpendicularTo(vec2));
    });

    it('Should find perpendicular vectors - 1', () => {
        assert.ok(new Vector(-1, 0).isPerpendicularTo(new Vector(0, 2)));
    });
    it('Should find parallel vectors - 2', () => {
        assert.ok(new Vector(1, 1).isPerpendicularTo(new Vector(-4, 4)));
    });

    it('Should find non perpendicular vectors - 1', () => {
        assert.strictEqual(false, new Vector(2, 2).isPerpendicularTo(new Vector(3, 6)));
    });
    it('Should find non perpendicular vectors - 1', () => {
        assert.strictEqual(false, new Vector(213, -123).isPerpendicularTo(new Vector(0, 90)));
    });
});
