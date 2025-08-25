import { test } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Copy methods', () => {
    test('.copyX', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copyX(vec2);

        assert.strictEqual(vec1.x, 0);
        assert.strictEqual(vec1.y, 10);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });

    test('.copyY', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copyY(vec2);

        assert.strictEqual(vec1.x, 10);
        assert.strictEqual(vec1.y, 0);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });

    test('.copy', () => {
        const vec1 = new Vector(10, 10);
        const vec2 = new Vector(0, 0);
        vec1.copy(vec2);

        assert.strictEqual(vec1.x, 0);
        assert.strictEqual(vec1.y, 0);

        assert.strictEqual(vec2.x, 0);
        assert.strictEqual(vec2.y, 0);
    });
});
