import { describe, it } from 'node:test';
import assert from 'node:assert';

import { getClampedValue } from '../../src/utils.ts';

describe('getClampedValue', () => {
    it('Should return current value when its between bounds', function () {
        const curr = 10;
        const min = 9;
        const max = 11;
        assert.equal(getClampedValue(curr, min, max), curr);
    });

    it('Should return min value when current is below', function () {
        const curr = 1;
        const min = 9;
        const max = 11;
        assert.equal(getClampedValue(curr, min, max), min);
    });

    it('Should return max value when current is above', function () {
        const curr = 100;
        const min = 9;
        const max = 11;
        assert.equal(getClampedValue(curr, min, max), max);
    });

    it('Should throw if the parameters are invalids', function () {
        // @ts-expect-error We are testing invalid inputs
        assert.throws(() => getClampedValue(100, 100, undefined));
        // @ts-expect-error We are testing invalid inputs
        assert.throws(() => getClampedValue(100, '100', 100));
        // @ts-expect-error We are testing invalid inputs
        assert.throws(() => getClampedValue({ foo: 1 }, 100, 100));
    });
});
