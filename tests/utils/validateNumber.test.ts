import { afterEach, describe, it } from 'node:test';
import assert from 'node:assert';

import { validateNumber } from '../../src/utils.ts';
import { InvalidNumberError } from '../../src/errors.ts';

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
