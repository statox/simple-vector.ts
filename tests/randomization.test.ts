import { test, describe, it } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

/**
 * TODO Use a different RNG because Math.random() is not seedable so tests
 * can't be entirely reproducible.
 */

test('Randomization methods - Original tests', () => {
    describe('.randomize', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);
        let vec: Vector;

        it('should be chainable', function () {
            vec = new Vector(30, 20);
            const ret = vec.randomize(topLeft, bottomRight);

            assert.ok(ret === vec);
        });

        it('should randomize both vector axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                vec.randomize(topLeft, bottomRight);
                assert.ok(vec.x >= minX && vec.x <= maxX);
                assert.ok(vec.y >= minY && vec.y <= maxY);
            }
        });
    });

    describe('.randomizeX', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeX(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only the X axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const y = vec.y;
            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);

            for (let i = 0; i < count; i++) {
                vec.randomizeX(topLeft, bottomRight);

                assert.ok(vec.x >= minX && vec.x <= maxX);
                assert.strictEqual(vec.y, y);
            }
        });
    });

    describe('.randomizeY', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeY(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only the X axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const x = vec.x;
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                vec.randomizeY(topLeft, bottomRight);

                assert.ok(vec.y >= minY && vec.y <= maxY);
                assert.strictEqual(vec.x, x);
            }
        });
    });

    describe('.randomizeAny', function () {
        const topLeft = new Vector(100, 100);
        const bottomRight = new Vector(300, 300);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeAny(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only one vector axis and respect the boundaries', function () {
            const count = 100;
            const originX = 50;
            const originY = 50;

            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                const vec = new Vector(originX, originY);
                vec.randomizeAny(topLeft, bottomRight);

                if (vec.x !== originX) {
                    assert.ok(vec.x >= minX && vec.x <= maxX);
                    assert.strictEqual(vec.y, originY);
                } else {
                    assert.ok(vec.y >= minY && vec.y <= maxY);
                    assert.strictEqual(vec.x, originX);
                }
            }
        });
    });
});

test('Randomization methods', () => {
    test('.randomizeX', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomizeX(topLeft, bottomRight);
        assert.ok(v.x >= topLeft.x && v.x <= bottomRight.x);
        assert.strictEqual(v.y, 0);
    });

    test('.randomizeY', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomizeY(topLeft, bottomRight);
        assert.strictEqual(v.x, 0);
        assert.ok(v.y >= topLeft.y && v.y <= bottomRight.y);
    });

    test('.randomize', () => {
        const v = new Vector(0, 0);
        const topLeft = new Vector(1, 1);
        const bottomRight = new Vector(2, 2);

        v.randomize(topLeft, bottomRight);
        assert.ok(v.x >= topLeft.x && v.x <= bottomRight.x);
        assert.ok(v.y >= topLeft.y && v.y <= bottomRight.y);
    });
});
