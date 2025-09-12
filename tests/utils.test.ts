import { afterEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { getClampedValue, InvalidNumberError, validateNumber } from '../src/utils.ts';

describe('validateNumber', () => {
    it('Should return input if it is a number', () => {
        let a: number;
        afterEach(() => assert.equal(validateNumber(a), a));
        it('zero', () => {
            a = 0;
        });
        it('negative zero', () => {
            a = -0;
        });
        it('integer', () => {
            a = 10;
        });
        it('decimal', () => {
            a = Math.sqrt(2);
        });
        it('power', () => {
            a = 1e-5;
        });
    });

    it('Should throw for invalid values', () => {
        let a: unknown;
        afterEach(() => assert.throws(() => validateNumber(a), InvalidNumberError));
        it('null', () => {
            a = null;
        });
        it('undefined', () => {
            a = undefined;
        });
        it('string', () => {
            a = '1';
        });
        it('object', () => {
            a = { foo: 1 };
        });
        it('array', () => {
            a = [1];
        });
        it('Infinity', () => {
            a = Infinity;
        });
        it('-Infinity', () => {
            a = -Infinity;
        });
        it('NaN', () => {
            a = Number.NaN;
        });
    });
});

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
