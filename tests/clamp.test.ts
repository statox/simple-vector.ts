import { test, describe, it } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('Clamp methods', () => {
    describe('.clampX', function () {
        it('should be chainable', function () {
            const vec = new Vector(100, 100);
            const ret = vec.clampX(10);
            assert.ok(ret === vec);
        });

        it('should throw if min is larger than max', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampX(10, 100), RangeError);
        });

        it('should not change value if its in range', function () {
            const vec = new Vector(100, 100);
            vec.clampX(150, 50);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 100);
        });

        it('should clamp the X axis to the max value', function () {
            const vec = new Vector(100, 100);
            vec.clampX(50);
            assert.strictEqual(vec.x, 50);
            assert.strictEqual(vec.y, 100);
        });

        it('should clamp the X axis to the min value', function () {
            const vec = new Vector(100, 100);
            vec.clampX(500, 200);
            assert.strictEqual(vec.x, 200);
            assert.strictEqual(vec.y, 100);
        });
    });

    describe('.clampY', function () {
        it('should be chainable', function () {
            const vec = new Vector(100, 100);
            const ret = vec.clampY(10);
            assert.ok(ret === vec);
        });

        it('should throw if min is larger than max', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampY(10, 100), RangeError);
        });

        it('should not change value if its in range', function () {
            const vec = new Vector(100, 100);
            vec.clampY(150, 50);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 100);
        });

        it('should clamp the Y axis to the max value', function () {
            const vec = new Vector(100, 100);
            vec.clampY(50);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 50);
        });

        it('should clamp the Y axis to the min value', function () {
            const vec = new Vector(100, 100);
            vec.clampY(500, 200);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 200);
        });
    });

    describe('.clampAxes', function () {
        it('should be chainable', function () {
            const vec = new Vector(100, 100);
            const ret = vec.clampAxes(10);
            assert.ok(ret === vec);
        });

        it('should throw if min is larger than max', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampAxes(10, 100), RangeError);
        });

        it('should not change the axes if they are in range', function () {
            const vec = new Vector(100, 100);
            vec.clampAxes(150, 50);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 100);
        });

        it('should clamp both axes to the max value', function () {
            const vec = new Vector(100, 100);
            vec.clampAxes(50);
            assert.strictEqual(vec.x, 50);
            assert.strictEqual(vec.y, 50);
        });

        it('should clamp both axes to the min value', function () {
            const vec = new Vector(100, 100);
            vec.clampAxes(500, 200);
            assert.strictEqual(vec.x, 200);
            assert.strictEqual(vec.y, 200);
        });

        it('should clamp X axis if its the only one out of range', function () {
            const vec = new Vector(200, 100);
            vec.clampAxes(150, 50);
            assert.strictEqual(vec.x, 150);
            assert.strictEqual(vec.y, 100);
        });

        it('should clamp Y axis if its the only one out of range', function () {
            const vec = new Vector(100, 50);
            vec.clampAxes(150, 80);
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 80);
        });
    });

    describe('.clampMag', function () {
        it('should be chainable', function () {
            const vec = new Vector(100, 100);
            const ret = vec.clampMag(10);
            assert.ok(ret === vec);
        });

        it('should throw if min is larger than max', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampMag(10, 100), RangeError);
        });

        it('should throw if max is negative', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampMag(-1), RangeError);
        });

        it('should throw if min is negative', function () {
            const vec = new Vector(100, 100);
            assert.throws(() => vec.clampMag(1, -1), RangeError);
        });

        it('should not change value if its in range', function () {
            const vec = new Vector(10, 10);
            vec.clampMag(16, 13);
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 10);
        });

        it('should clamp the magnitude to the max value', function () {
            const vec = new Vector(10, 10);
            vec.clampMag(Math.sqrt(2));
            assertCloseTo(vec.x, 1);
            assertCloseTo(vec.y, 1);
            assert.strictEqual(vec.magnitude(), Math.sqrt(2));
        });

        it('should clamp the magnitude to the min value', function () {
            const vec = new Vector(10, 10);
            vec.clampMag(1000, 100 * Math.sqrt(2));
            assert.strictEqual(vec.x, 100);
            assert.strictEqual(vec.y, 100);
        });
    });
});
