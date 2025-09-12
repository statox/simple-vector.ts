/**
 * An exception thrown by some methods when an expected number is invalid.
 */
export class InvalidNumberError extends Error {
    constructor(val: unknown) {
        super('Expected a number, instead got', val);
    }
}

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
