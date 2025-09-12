import { test, describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';
import { InvalidNumberError } from '../src/utils.ts';
import { assertCloseTo } from './helpers.ts';

test('Clamp methods', () => {
    describe('.clampX', function () {
        it('should be chainable', function () {
            let vec: Vector;
            let ret: Vector;

            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.ok(ret === vec);
            });

            it('with a single number param', () => {
                ret = vec.clampX(1);
            });
            it('with a single Vector param', () => {
                ret = vec.clampX(new Vector());
            });
            it('with two number params', () => {
                ret = vec.clampX(1, 10);
            });
            it('with two Vector params', () => {
                ret = vec.clampX(new Vector(), new Vector());
            });
        });

        it('should throw', function () {
            it('If the parameters are not of the same type', function () {
                const vec = new Vector(100, 100);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampX(200, new Vector()), TypeError);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampX(new Vector(), 200), TypeError);
            });

            it('If the number parameters are invalid', function () {
                const vec = new Vector(100, 100);
                it('First param is undefined', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampX(undefined, 200), TypeError);
                });
                it('First param is not a number', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampX('foo'), InvalidNumberError);
                });
            });
        });

        it('should not change value if its in range', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(max, 0);
            const minVec = new Vector(min, 0);
            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.strictEqual(vec.x, 100);
                assert.strictEqual(vec.y, 100);
            });

            it('with a single number param', () => {
                vec.clampX(max);
            });
            it('with a single Vector param', () => {
                vec.clampX(maxVec);
            });
            it('with ordered number params', () => {
                vec.clampX(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampX(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampX(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampX(maxVec, minVec);
            });
        });

        it('should clamp the X axis to the max value', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(max, 0);
            const minVec = new Vector(min, 0);
            beforeEach(() => (vec = new Vector(200, 100)));
            afterEach(() => {
                assert.strictEqual(vec.x, 150);
                assert.strictEqual(vec.y, 100);
            });
            it('with a single number param', () => {
                vec.clampX(max);
            });
            it('with a single Vector param', () => {
                vec.clampX(maxVec);
            });
            it('with ordered number params', () => {
                vec.clampX(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampX(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampX(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampX(maxVec, minVec);
            });
        });

        it('should clamp the X axis to the min value', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(max, 0);
            const minVec = new Vector(min, 0);
            beforeEach(() => (vec = new Vector(10, 100)));
            afterEach(() => {
                assert.strictEqual(vec.x, 50);
                assert.strictEqual(vec.y, 100);
            });
            it('with ordered number params', () => {
                vec.clampX(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampX(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampX(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampX(maxVec, minVec);
            });
        });
    });

    describe('.clampY', function () {
        it('should be chainable', function () {
            let vec: Vector;
            let ret: Vector;

            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.ok(ret === vec);
            });

            it('with a single number param', () => {
                ret = vec.clampY(1);
            });
            it('with a single Vector param', () => {
                ret = vec.clampY(new Vector());
            });
            it('with two number params', () => {
                ret = vec.clampY(1, 10);
            });
            it('with two Vector params', () => {
                ret = vec.clampY(new Vector(), new Vector());
            });
        });

        it('should throw', function () {
            it('If the parameters are not of the same type', function () {
                const vec = new Vector(100, 100);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampY(200, new Vector()), TypeError);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampY(new Vector(), 200), TypeError);
            });

            it('If the number parameters are invalid', function () {
                const vec = new Vector(100, 100);
                it('First param is undefined', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampY(undefined, 200), TypeError);
                });
                it('First param is not a number', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampY('foo'), InvalidNumberError);
                });
            });
        });

        it('should not change value if its in range', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(0, max);
            const minVec = new Vector(0, min);
            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.strictEqual(vec.x, 100);
                assert.strictEqual(vec.y, 100);
            });

            it('with a single number param', () => {
                vec.clampY(max);
            });
            it('with a single Vector param', () => {
                vec.clampY(maxVec);
            });
            it('with ordered number params', () => {
                vec.clampY(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampY(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampY(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampY(maxVec, minVec);
            });
        });

        describe('should clamp the Y axis to the max value', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(0, max);
            const minVec = new Vector(0, min);
            beforeEach(() => (vec = new Vector(100, 200)));
            afterEach(() => {
                assert.strictEqual(vec.x, 100);
                assert.strictEqual(vec.y, 150);
            });
            it('with a single number param', () => {
                vec.clampY(max);
            });
            it('with a single Vector param', () => {
                vec.clampY(maxVec);
            });
            it('with ordered number params', () => {
                vec.clampY(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampY(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampY(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampY(maxVec, minVec);
            });
        });

        it('should clamp the Y axis to the min value', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(0, max);
            const minVec = new Vector(0, min);
            beforeEach(() => (vec = new Vector(100, 10)));
            afterEach(() => {
                assert.strictEqual(vec.x, 100);
                assert.strictEqual(vec.y, 50);
            });
            it('with ordered number params', () => {
                vec.clampY(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampY(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampY(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampY(maxVec, minVec);
            });
        });
    });

    describe('.clampAxes', function () {
        it('should be chainable', function () {
            let vec: Vector;
            let ret: Vector;

            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.ok(ret === vec);
            });

            it('with a single number param', () => {
                ret = vec.clampAxes(1);
            });
            it('with a single Vector param', () => {
                ret = vec.clampAxes(new Vector());
            });
            it('with two number params', () => {
                ret = vec.clampAxes(1, 10);
            });
            it('with two Vector params', () => {
                ret = vec.clampAxes(new Vector(), new Vector());
            });
        });

        it('should throw', function () {
            it('If the parameters are not of the same type', function () {
                const vec = new Vector(100, 100);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampAxes(200, new Vector()), TypeError);
                // @ts-expect-error We are testing invalid parameters
                assert.throws(() => vec.clampAxes(new Vector(), 200), TypeError);
            });

            it('If the number parameters are invalid', function () {
                const vec = new Vector(100, 100);
                it('First param is undefined', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampAxes(undefined, 200), TypeError);
                });
                it('First param is not a number', () => {
                    // @ts-expect-error We are testing invalid parameters
                    assert.throws(() => vec.clampAxes('foo'), InvalidNumberError);
                });
            });
        });

        it('should not change value if its in range', function () {
            let vec: Vector;
            const max = 150;
            const min = 50;
            const maxVec = new Vector(max, max);
            const minVec = new Vector(min, min);
            beforeEach(() => (vec = new Vector(100, 100)));
            afterEach(() => {
                assert.strictEqual(vec.x, 100);
                assert.strictEqual(vec.y, 100);
            });

            it('with a single number param', () => {
                vec.clampX(max);
            });
            it('with a single Vector param', () => {
                vec.clampX(maxVec);
            });
            it('with ordered number params', () => {
                vec.clampX(min, max);
            });
            it('with ordered Vector params', () => {
                vec.clampX(minVec, maxVec);
            });
            it('with reversed number params', () => {
                vec.clampX(max, min);
            });
            it('with reversed Vector params', () => {
                vec.clampX(maxVec, minVec);
            });
        });

        /*
         * We have a light suite of test than in .clampX and .clampY because
         * we rely on the test suites of these methods to validate the behavior
         */
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
