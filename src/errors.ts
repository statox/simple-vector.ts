/**
 * An exception thrown by some methods when a division by zero is attempted.
 */
export class DivisionByZeroError extends Error {
    constructor() {
        super('Tried to divide by 0');
    }
}

/**
 * An exception thrown by some methods when an expected number is invalid.
 */
export class InvalidNumberError extends Error {
    constructor(val: unknown) {
        super('Expected a number, instead got', val);
    }
}
