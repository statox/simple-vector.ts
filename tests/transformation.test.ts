import { test, describe } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Transformation methods', () => {
    describe('.invertX', () => {
        const vec = new Vector(100, 50);

        vec.invertX();
        assert.strictEqual(vec.x, -100);
        assert.strictEqual(vec.y, 50);
    });

    describe('.invertY', () => {
        const vec = new Vector(100, 50);

        vec.invertY();
        assert.strictEqual(vec.x, 100);
        assert.strictEqual(vec.y, -50);
    });

    describe('.invert', () => {
        const vec = new Vector(100, 50);

        vec.invert();
        assert.strictEqual(vec.x, -100);
        assert.strictEqual(vec.y, -50);
    });
});
