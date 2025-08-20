import assert from 'node:assert';

export const assertCloseTo = (actual: number, expected: number, margin: number = 0.000002) => {
    const isInMargin = actual >= expected - margin && actual <= expected + margin;
    assert.strictEqual(isInMargin, true, `Expected ${actual} to be close to ${expected}`);
};
