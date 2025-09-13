import { InvalidNumberError } from './errors.ts';

export const validateNumber = (val: unknown): number => {
    if (typeof val !== 'number' || !Number.isFinite(val)) {
        throw new InvalidNumberError(val);
    }
    return val;
};

export const getClampedValue = (current: number, minBound: number, maxBound: number) => {
    validateNumber(current);
    validateNumber(minBound);
    validateNumber(maxBound);
    return Math.min(Math.max(current, minBound), maxBound);
};
