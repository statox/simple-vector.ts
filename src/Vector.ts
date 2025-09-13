/**
 * A 2D vector math library built as a modern ECMAScript module without dependencies.
 *
 * Check out [the documentation](https://statox.github.io/simple-vector.ts/)
 * and [the interactive examples](https://statox.github.io/simple-vector-examples/).
 *
 * @module Vector
 */

import { DivisionByZeroError } from './errors.ts';
import { getClampedValue, validateNumber } from './utils.ts';

/**
 * An interface for objects with an `x` and a `y` properties.
 * This is used by conversion methods to parse and generate objects
 * which are not instances of the {@link Vector} class
 *
 * @property x The value of the X axis
 * @property y The value of the Y axis
 */
export interface VectorLike {
    x: number;
    y: number;
}

/**
 * An interface representing polar coordinates.
 * This is used by conversion methods.
 *
 * @property {number} r The value of the magnitude
 * @property {number} theta The value of the angle in radians
 */
export interface Polar {
    r: number;
    theta: number;
}

/**
 * A type guard function for the {@link Vector} class
 *
 * @param {unknown} obj The variable we want to check if it is a Vector or not
 */
export const isVector = (obj: unknown): obj is Vector => {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        'x' in obj &&
        'y' in obj &&
        typeof (obj as Vector).x === 'number' &&
        typeof (obj as Vector).y === 'number'
    );
};

/**
 * A simple 2D vector class
 * @property {number} x The X axis value
 * @property {number} y The Y axis value
 */
export class Vector {
    x: number = 0;
    y: number = 0;

    /**
     * A simple 2D vector class
     *
     * @param {Number} x Value of the X axis
     * @param {Number} y Value of the Y axis
     * @throws {TypeError} TypeError if either of the arguments are not valid numbers
     * @example
     * const vec = new Vector(100, 50);
     * @category Constructor
     */
    constructor(x: number = 0, y: number = 0) {
        if (!Number.isFinite(x)) {
            throw new TypeError('The x argument should be a number');
        }
        if (!Number.isFinite(y)) {
            throw new TypeError('The y argument should be a number');
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Creates a new instance from an array using first two items as x and y.
     * (The array length must be at least 2)
     *
     * @param {Array} arr Array with the x and y values at index 0 and 1 respectively
     * @return A new Vector instance
     * @throws {TypeError} TypeError if either of the array length is less than 2
     * @throws {TypeError} TypeError if either of the first 2 array members are not valid numbers
     * @example
     * const vec = Vector.fromArray([42, 21]);
     *
     * assert.equal(vec.x, 42)
     * assert.equal(vec.y, 21)
     * @category Constructor
     */
    static fromArray = (arr: number[]) => {
        if (arr.length < 2) {
            throw new TypeError('The length of the argument array must be at least 2');
        }
        if (!Number.isFinite(arr[0]) || !Number.isFinite(arr[1])) {
            throw new TypeError('The members of the argument array must be numbers');
        }
        return new Vector(arr[0], arr[1]);
    };

    /**
     * Creates a new instance from an object resembling a vector
     * (Object must have a `x: number` and a `y: number` property)
     *
     * @param {Object} obj Object with properties x and/or y
     * @return A new Vector instance
     * @throws {TypeError} TypeError if either of the x or y objects property are not valid numbers
     * @example
     * const vec1 = Vector.fromObject({ x: 42, y: 21 });
     * const vec2 = new Vector(42, 21);
     *
     * assert.true(vec1.isEqualTo(vec2))
     * @category Constructor
     */
    static fromObject = (obj: VectorLike) => {
        if (!Number.isFinite(obj.x)) {
            throw new TypeError('The .x property of the argument object must be a number');
        }
        if (!Number.isFinite(obj.y)) {
            throw new TypeError('The .y property of the argument object must be a number');
        }
        return new Vector(obj.x, obj.y);
    };

    /**
     * Creates a new instance from an angle in radians and a magnitude
     * (The angle is from the positive x axis)
     *
     * @param {number} radians Object with properties x and/or y
     * @param {number} magnitude Object with properties x and/or y
     * @return A new Vector instance
     * @example
     * const vec = Vector.fromPolar(Math.PI / 2, 100);
     *
     * assert.equal(vec.x, 0)
     * assert.equal(vec.y, 100)
     * @category Constructor
     */
    static fromPolar = (radians: number, magnitude: number) => {
        if (!Number.isFinite(radians)) {
            throw new TypeError('The radians argument must be a number');
        }
        if (!Number.isFinite(magnitude)) {
            throw new TypeError('The magnitude argument must be a number');
        }
        return new Vector(magnitude * Math.cos(radians), magnitude * Math.sin(radians));
    };

    /**
     * Creates a new instance of magnitude 1 with a random angle
     *
     * @return A new Vector instance
     * @example
     * const vec = Vector.randomUnitVector();
     *
     * assert.equal(vec.magnitude(), 1)
     * @category Constructor
     */
    static randomUnitVector = () => {
        return new Vector(1, 0).rotateBy(Math.random() * 2 * Math.PI);
    };

    /**
     * Adds the X axis of another vector to this one
     *
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.addX(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     * @category Arithmetic operations
     */
    addX(vec: Vector) {
        this.x += vec.x;
        return this;
    }

    /**
     * Adds the Y axis of another vector to this one
     *
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.addY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 40)
     * @category Arithmetic operations
     */
    addY(vec: Vector) {
        this.y += vec.y;
        return this;
    }

    /**
     * Adds another vector to this one
     *
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.add(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 40)
     * @category Arithmetic operations
     */
    add(vec: Vector) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    /**
     * Adds the given scalar to both vector axes
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalar(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 22)
     * @category Arithmetic operations
     */
    addScalar(scalar: number) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }

    /**
     * Adds the given scalar to the X axis
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalarX(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 20)
     * @category Arithmetic operations
     */
    addScalarX(scalar: number) {
        this.x += scalar;
        return this;
    }

    /**
     * Adds the given scalar to the Y axis
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 22)
     * @category Arithmetic operations
     */
    addScalarY(scalar: number) {
        this.y += scalar;
        return this;
    }

    /**
     * Subtracts the X axis of another vector from this one
     *
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtractX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 30)
     * @category Arithmetic operations
     */
    subtractX(vec: Vector) {
        this.x -= vec.x;
        return this;
    }

    /**
     * Subtracts the Y axis of another vector from this one
     *
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtractY(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     * @category Arithmetic operations
     */
    subtractY(vec: Vector) {
        this.y -= vec.y;
        return this;
    }

    /**
     * Subtracts another vector from this one
     *
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtract(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     * @category Arithmetic operations
     */
    subtract(vec: Vector) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    /**
     * Subtracts the given scalar from both axes
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalar(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 18)
     * @category Arithmetic operations
     */
    subtractScalar(scalar: number) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }

    /**
     * Subtracts the given scalar from the X axis
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalarX(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 20)
     * @category Arithmetic operations
     */
    subtractScalarX(scalar: number) {
        this.x -= scalar;
        return this;
    }

    /**
     * Subtracts the given scalar from the Y axis
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 18)
     * @category Arithmetic operations
     */
    subtractScalarY(scalar: number) {
        this.y -= scalar;
        return this;
    }

    /**
     * Divides the X axis of this vector by the X axis of another one
     *
     * @param {Vector} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the X axis of the argument vector is 0
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 0);
     *
     * vec1.divideX(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     * @category Arithmetic operations
     */
    divideX(vec: Vector) {
        if (vec.x === 0) {
            throw new DivisionByZeroError();
        }

        this.x /= vec.x;
        return this;
    }

    /**
     * Divides the Y axis of this vector by the Y axis of another one
     *
     * @param {Vector} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the Y axis of the argument vector is 0
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(0, 2);
     *
     * vec1.divideY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 25)
     * @category Arithmetic operations
     */
    divideY(vec: Vector) {
        if (vec.y === 0) {
            throw new DivisionByZeroError();
        }

        this.y /= vec.y;
        return this;
    }

    /**
     * Divides both axes of this vector by those of another one
     *
     * @param {Vector} vec The vector to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If any axis of the argument vector is 0
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 2);
     *
     * vec1.divide(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 25)
     * @category Arithmetic operations
     */
    divide(vec: Vector) {
        if (vec.x === 0 || vec.y === 0) {
            throw new DivisionByZeroError();
        }

        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    }

    /**
     * Divides both vector axes by the given scalar
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the argument scalar is 0
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalar(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 25)
     * @category Arithmetic operations
     */
    divideScalar(scalar: number) {
        if (scalar === 0) {
            throw new DivisionByZeroError();
        }

        this.x /= scalar;
        this.y /= scalar;

        return this;
    }

    /**
     * Divides the X axis by the given scalar
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If x axis of argument vector is 0
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalarX(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 50)
     * @category Arithmetic operations
     */
    divideScalarX(scalar: number) {
        if (scalar === 0) {
            throw new DivisionByZeroError();
        }

        this.x /= scalar;
        return this;
    }

    /**
     * Divides the Y axis by the given scalar
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If x axis of argument vector is 0
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 25)
     * @category Arithmetic operations
     */
    divideScalarY(scalar: number) {
        if (scalar === 0) {
            throw new DivisionByZeroError();
        }

        this.y /= scalar;
        return this;
    }

    /**
     * Multiplies the X axis of this vector by the X axis of another one
     *
     * @param {Vector} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 0);
     *
     * vec1.multiplyX(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 50)
     * @category Arithmetic operations
     */
    multiplyX(vec: Vector) {
        this.x *= vec.x;
        return this;
    }

    /**
     * Multiplies the Y axis of this vector by the Y axis of another one
     *
     * @param {Vector} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(0, 2);
     *
     * vec1.multiplyY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 100)
     * @category Arithmetic operations
     */
    multiplyY(vec: Vector) {
        this.y *= vec.y;
        return this;
    }

    /**
     * Multiplies both axes of this vector by those of another one
     *
     * @param {Vector} vec The vector to multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 2);
     *
     * vec1.multiply(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 100)
     * @category Arithmetic operations
     */
    multiply(vec: Vector) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }

    /**
     * Multiplies both vector axes by the given scalar
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalar(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 100)
     * @category Arithmetic operations
     */
    multiplyScalar(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * Multiplies the X axis by the given scalar
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalarX(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 50)
     * @category Arithmetic operations
     */
    multiplyScalarX(scalar: number) {
        this.x *= scalar;
        return this;
    }

    /**
     * Multiplies the Y axis by the given scalar
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 100)
     * @category Arithmetic operations
     */
    multiplyScalarY(scalar: number) {
        this.y *= scalar;
        return this;
    }

    /**
     * Multiplies the X axis by `-1`
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invertX();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, 50)
     * @category Inversion
     * @see [Try it live](https://statox.github.io/simple-vector-examples/inversion)
     */
    invertX() {
        this.x *= -1;
        return this;
    }

    /**
     * Multiplies the Y axis by `-1`
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invertY();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, -50)
     * @category Inversion
     * @see [Try it live](https://statox.github.io/simple-vector-examples/inversion)
     */
    invertY() {
        this.y *= -1;
        return this;
    }

    /**
     * Multiplies both axes by `-1`
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invert();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, -50)
     * @category Inversion
     * @see [Try it live](https://statox.github.io/simple-vector-examples/inversion)
     */
    invert() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }

    /**
     * Reflects the vector about a line. The orientation of the line
     * is described by the parameter `surfaceNormal` a normal vector
     * that points away from the shape.
     *
     * @param {Vector} surfaceNormal The normal vector of the line to reflect about
     * @return `this` for chaining capabilities
     * @example
     * // normal vector
     * const n = new Vector(0, 1);
     * // vector to reflect
     * const v = new Vector(4, 6);
     *
     * // reflect v about n
     * v.reflect(n)
     *
     * assert.equal(vec.x, 4)
     * assert.equal(vec.y, -6)
     *
     * @category Reflection
     * @see [Try it live](https://statox.github.io/simple-vector-examples/reflect)
     */
    reflect(surfaceNormal: Vector) {
        const surfaceNormalCopy = surfaceNormal.clone().normalize();
        return this.subtract(surfaceNormalCopy.multiplyScalar(2 * this.dot(surfaceNormalCopy)));
    }

    /**
     * Normalize the vector (Keep the direction but change the magnitude to 1)
     *
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the vector is zero
     * @example
     * const vec = new Vector(10, 0);
     *
     * vec.normalize();
     * assert.equal(vec.x, 1)
     * assert.equal(vec.y, 0)
     * @category Resize
     * @see [Try it live](https://statox.github.io/simple-vector-examples/resize)
     */
    normalize() {
        return this.divideScalar(this.magnitude());
    }

    /**
     * Alias for {@link Vector.normalize}
     * @category Magnitude
     */
    norm = this.normalize;

    /**
     * Enforce the value of the X axis to be between a max and min value.
     *
     * If only one value is provided, it is used as the max bound and no
     * min bound is enforced.
     *
     * If two values are provided the method will sort them to use the largest
     * one as the max bound and the smallest one as the min bound.
     * These values must be of the same type (either two {@link Vector} or two
     * `number`)
     *
     * @param {Number} max The maximum value for the X axis
     * @param {Number} min The minimum value for the X axis
     * @return `this` for chaining capabilities
     * @throws {TypeError} TypeError If the second parameter is defined and not of the same type as the first parameter
     * @throws {InvalidNumberError} InvalidNumberError If one of the number parameter is invalid
     * @example
     * const vec = new Vector(100, 100);
     *
     * vec.clampX(0, 50)
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 100)
     * @category Clamp
     * @see [Try it live](https://statox.github.io/simple-vector-examples/clamp)
     */
    clampX(min: number, max: number): Vector;
    /**
     * Use the X axes of two vectors to enforce the bounds of the X axis of this vector.
     *
     * @param {Vector} minVector The vector defining the minimum value for the X axis
     * @param {Vector} maxVector The vector defining the maximum value for the X axis
     */
    clampX(minVector: Vector, maxVector: Vector): Vector;
    /**
     * Use a number to enforce the max value of the X axis of this vector.
     *
     * @param {Number} max The maximum value for the X axis
     */
    clampX(max: number): Vector;
    /**
     * Use the X axis of a vector to enforce the max value of the X axis of this vector.
     *
     * @param {Vector} maxVector The vector defining the maximum value for the X axis
     */
    clampX(maxVector: Vector): Vector;

    clampX(max: number | Vector, min?: number | Vector): Vector {
        const a = isVector(max) ? max.x : validateNumber(max);

        if (min === undefined) {
            this.x = Math.min(this.x, a);
            return this;
        }

        if (typeof max !== typeof min) {
            throw TypeError('Params must have the same type');
        }

        const b = isVector(min) ? min.x : validateNumber(min);
        const _min = Math.min(a, b);
        const _max = Math.max(a, b);

        this.x = getClampedValue(this.x, _min, _max);
        return this;
    }

    /**
     * Enforce the value of the Y axis to be between a max and min value.
     *
     * If only one value is provided, it is used as the max bound and no
     * min bound is enforced.
     *
     * If two values are provided the method will sort them to use the largest
     * one as the max bound and the smallest one as the min bound.
     * These values must be of the same type (either two {@link Vector} or two
     * `number`)
     *
     * @param {Number} max The maximum value for the Y axis
     * @param {Number} min The minimum value for the Y axis
     * @return `this` for chaining capabilities
     * @throws {TypeError} TypeError If the second parameter is defined and not of the same type as the first parameter
     * @throws {InvalidNumberError} InvalidNumberError If one of the number parameter is invalid
     * @example
     * const vec = new Vector(100, 100);
     *
     * vec.clampY(0, 50)
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 50)
     * @category Clamp
     * @see [Try it live](https://statox.github.io/simple-vector-examples/clamp)
     */
    clampY(min: number, max: number): Vector;
    /**
     * Use the Y axes of two vectors to enforce the bounds of the Y axis of this vector.
     *
     * @param {Vector} minVector The vector defining the minimum value for the Y axis
     * @param {Vector} maxVector The vector defining the maximum value for the Y axis
     */
    clampY(minVector: Vector, maxVector: Vector): Vector;
    /**
     * Use a number to enforce the max value of the Y axis of this vector.
     *
     * @param {Number} max The maximum value for the Y axis
     */
    clampY(max: number): Vector;
    /**
     * Use the Y axis of a vector to enforce the max value of the Y axis of this vector.
     *
     * @param {Vector} maxVector The vector defining the maximum value for the Y axis
     */
    clampY(maxVector: Vector): Vector;

    clampY(max: number | Vector, min?: number | Vector): Vector {
        const a = isVector(max) ? max.y : validateNumber(max);

        if (min === undefined) {
            this.y = Math.min(this.y, a);
            return this;
        }

        if (typeof max !== typeof min) {
            throw TypeError('Params must have the same type');
        }

        const b = isVector(min) ? min.y : validateNumber(min);
        const _min = Math.min(a, b);
        const _max = Math.max(a, b);

        this.y = getClampedValue(this.y, _min, _max);
        return this;
    }

    /**
     * Resize the vector to enforce its magnitude to be between and max and a min value.
     *
     * If only one value is provided, it is used as the max bound and no
     * min bound is enforced.
     *
     * If two values are provided the method will sort them to use the largest
     * one as the max bound and the smallest one as the min bound.
     * These values must be of the same type (either two {@link Vector} or two
     * `number`)
     *
     * This preserves the angle of the vector.
     *
     * @param {Number} max The maximum value for the magnitude
     * @param {Number} min  The minimum value for the magnitude
     * @return `this` for chaining capabilities
     * @throws { RangeError } RangeError if one of the parameter is a negative number
     * @throws {TypeError} TypeError If the second parameter is defined and not of the same type as the first parameter
     * @throws {InvalidNumberError} InvalidNumberError If one of the number parameter is invalid
     * @example
     * const vec = new Vector(100, 100);
     * const angle = vec.horizontalAngle();
     *
     * vec.clampMag(50)
     * assert.equal(vec.magnitude(), 50)
     * assert.equal(vec.horizontalAngle(), angle)
     * @category Clamp
     * @see [Try it live](https://statox.github.io/simple-vector-examples/clamp)
     */
    clampMag(min: number, max: number): Vector;
    /**
     * Use the magnitudes of two vectors to enforce the bounds of the magnitude of this vector.
     *
     * @param {Vector} minVector The vector defining the minimum value for magnitude
     * @param {Vector} maxVector The vector defining the maximum value for magnitude
     */
    clampMag(minVector: Vector, maxVector: Vector): Vector;
    /**
     * Use a number to enforce the max value of the magnitude of this vector.
     *
     * @param {Number} max The maximum value for the magnitude
     */
    clampMag(max: number): Vector;
    /**
     * Use the magnitude of a vector to enforce the max value of the magnitude of this vector.
     *
     * @param {Vector} maxVector The vector defining the maximum value for the magnitude of this vector
     */
    clampMag(maxVector: Vector): Vector;

    clampMag(max: number | Vector, min?: number | Vector) {
        const currentMag = this.mag();
        const a = isVector(max) ? max.mag() : validateNumber(max);

        if (a < 0) {
            throw RangeError("Can't clamp the magnitude to a negative value");
        }

        if (min === undefined) {
            if (currentMag > a) {
                this.resize(a);
            }
            return this;
        }

        if (typeof max !== typeof min) {
            throw TypeError('Params must have the same type');
        }

        const b = isVector(min) ? min.mag() : validateNumber(min);
        if (b < 0) {
            throw RangeError("Can't clamp the magnitude to a negative value");
        }
        const _minMag = Math.min(a, b);
        const _maxMag = Math.max(a, b);
        const clampedMag = getClampedValue(currentMag, _minMag, _maxMag);
        if (currentMag !== clampedMag) {
            this.resize(clampedMag);
        }
        return this;
    }

    /**
     * Enforce the value of both axes to be between a max and min value.
     * See {@link clampX} and {@link clampY} for details.
     *
     * This is equivalent to calling `.clampX(min, max).clampY(min, max)`
     *
     * @return `this` for chaining capabilities
     * @throws {TypeError} TypeError If the `min` value is defined and not of the same type as the `max` value
     * @throws {InvalidNumberError} InvalidNumberError If one of the number parameter is invalid
     * @example
     * const vec = new Vector(100, 100);
     *
     * vec.clampAxes(50)
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 50)
     * @category Clamp
     * @see [Try it live](https://statox.github.io/simple-vector-examples/clamp)
     */
    clampAxes(min: number, max: number): Vector;
    /**
     * Use the axes of two vectors to enforce the bounds of the axes of this vector.
     *
     * @param {Vector} minVector The vector defining the minimum value for the axes
     * @param {Vector} maxVector The vector defining the maximum value for the axes
     */
    clampAxes(minVector: Vector, maxVector: Vector): Vector;
    /**
     * Use a number to enforce the max value of the axes of this vector.
     *
     * @param {Number} max The maximum value for the axes
     */
    clampAxes(max: number): Vector;
    /**
     * Use the axes of a vector to enforce the max value of the axes of this vector.
     *
     * @param {Vector} maxVector The vector defining the maximum value for the axes
     */
    clampAxes(maxVector: Vector): Vector;

    clampAxes(max: number | Vector, min?: number | Vector) {
        // We add `as number` to avoid having to do the type checking here as
        // it is done in .clampX and .clampY
        return this.clampX(max as number, min as number).clampY(max as number, min as number);
    }

    /**
     * If the absolute value of the X axis is greater than `max`,
     * multiplies its value by `factor`
     *
     * @param {Number} max The maximum value for the X axis
     * @param {Number} factor Factor by which the axis is to be multiplied by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 100);
     *
     * vec.limitX(80, 0.9);
     * assert.equal(vec.x, 90)
     * assert.equal(vec.y, 100)
     * @category Limit
     * @see [Try it live](https://statox.github.io/simple-vector-examples/limit)
     */
    limitX(max: number, factor: number) {
        if (Math.abs(this.x) > max) {
            this.x *= factor;
        }
        return this;
    }

    /**
     * If the absolute value of the Y axis is greater than `max`,
     * multiplies its value by `factor`
     *
     * @param {Number} max The maximum value for the Y axes
     * @param {Number} factor Factor by which the axis is to be multiplied by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 100);
     *
     * vec.limitY(80, 0.9);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 90)
     * @category Limit
     * @see [Try it live](https://statox.github.io/simple-vector-examples/limit)
     */
    limitY(max: number, factor: number) {
        if (Math.abs(this.y) > max) {
            this.y *= factor;
        }
        return this;
    }

    /**
     * If the absolute value of the axes is greater than `max`,
     * multiplies the axis by `factor`
     *
     * @param {Number} max The maximum value for both X and Y axes
     * @param {Number} factor Factor by which the axes are to be multiplied by
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(100, 50);
     *
     * vec1.limit(80, 0.9);
     * assert.equal(vec1.x, 90)
     * assert.equal(vec1.y, 50)
     *
     * const vec2 = new Vector(100, 100);
     *
     * vec2.limit(80, 0.9);
     * assert.equal(vec2.x, 90)
     * assert.equal(vec2.y, 90)
     * @category Limit
     * @see [Try it live](https://statox.github.io/simple-vector-examples/limit)
     */
    limit(max: number, factor: number) {
        this.limitX(max, factor);
        this.limitY(max, factor);
        return this;
    }

    /**
     * Randomizes the X axis with a value between the X axes of 2 others vectors
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bounding vector
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeX(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     * @category Randomization
     * @see [Try it live](https://statox.github.io/simple-vector-examples/randomization)
     */
    randomizeX(topLeft: Vector, bottomRight: Vector) {
        const min = Math.min(topLeft.x, bottomRight.x);
        const max = Math.max(topLeft.x, bottomRight.x);
        this.x = random(min, max);
        return this;
    }

    /**
     * Randomizes the Y axis with a value between the Y axes of 2 others vectors
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bounding vector
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeY(topLeft, bottomRight);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 73.933542831865296)
     * @category Randomization
     * @see [Try it live](https://statox.github.io/simple-vector-examples/randomization)
     */
    randomizeY(topLeft: Vector, bottomRight: Vector) {
        const min = Math.min(topLeft.y, bottomRight.y);
        const max = Math.max(topLeft.y, bottomRight.y);
        this.y = random(min, max);
        return this;
    }

    /**
     * Randomizes both axes of the vector with a value between 2 vectors
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bounding vector
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomize(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 73.933542831865296)
     * @category Randomization
     * @see [Try it live](https://statox.github.io/simple-vector-examples/randomization)
     */
    randomize(topLeft: Vector, bottomRight: Vector) {
        this.randomizeX(topLeft, bottomRight);
        this.randomizeY(topLeft, bottomRight);

        return this;
    }

    /**
     * Randomly choses one axis and randomizes it with a value between the
     * corresponding axis of 2 other vectors
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bounding vector
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeAny(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     * @category Randomization
     */
    randomizeAny(topLeft: Vector, bottomRight: Vector) {
        if (Math.random() < 0.5) {
            this.randomizeX(topLeft, bottomRight);
        } else {
            this.randomizeY(topLeft, bottomRight);
        }
        return this;
    }

    /**
     * Rounds both axes to an integer value using `Math.round()`
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100.2, 50.9);
     *
     * vec.unfloat();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 51)
     * @category Precision
     */
    unfloat() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }

    /**
     * Fix both axes to a certain precision using {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed Number.toFixed()}
     * on each axis
     *
     * @param {Number} precision (default: 8)
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(100.2345, 50.9876);
     *
     * vec.fixPrecision(2);
     * assert.equal(vec.x, 100.23)
     * assert.equal(vec.y, 50.99)
     * @category Precision
     */
    fixPrecision(precision: number = 8) {
        this.x = Number(this.x.toFixed(precision));
        this.y = Number(this.y.toFixed(precision));
        return this;
    }

    /**
     * Performs a linear blend / interpolation of the X axis towards another vector.
     *
     * The `mixFactor` parameter is the amount to interpolate between this vector and
     * the other vector. 0.0 keeps the X axis equal to this vector's, 0.5 is
     * halfway between, and 1.0 sets the X axis equal to the other vector's.
     *
     * @param {Vector} vec The other vector
     * @param {Number} mixFactor The blend amount [0, 1] (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} RangeError if `mixFactor` is not between 0 and 1
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mixX(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 100)
     * @category Interpolation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/interpolation)
     */
    mixX(vec: Vector, mixFactor: number = 0.5) {
        if (mixFactor < 0 || mixFactor > 1) {
            throw new RangeError('The mixFactor argument must be between 0 and 1.');
        }
        this.x = (1 - mixFactor) * this.x + mixFactor * vec.x;
        return this;
    }

    /**
     * Performs a linear blend / interpolation of the Y axis towards another vector
     *
     * The `mixFactor` parameter is the amount to interpolate between this vector and
     * the other vector. 0.0 keeps the Y axis equal to this vector's, 0.5 is
     * halfway between, and 1.0 sets the Y axis equal to the other vector's.
     *
     * @param {Vector} vec The other vector
     * @param {Number} mixFactor The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} RangeError if `mixFactor` is not between 0 and 1
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mixY(vec2, 0.5);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 150)
     * @category Interpolation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/interpolation)
     */
    mixY(vec: Vector, mixFactor: number = 0.5) {
        if (mixFactor < 0 || mixFactor > 1) {
            throw new RangeError('The mixFactor argument must be between 0 and 1.');
        }
        this.y = (1 - mixFactor) * this.y + mixFactor * vec.y;
        return this;
    }

    /**
     * Performs a linear blend / interpolation towards another vector
     *
     * The `mixFactor` parameter is the amount to interpolate between this vector and
     * the other vector. 0.0 keeps the axes equal to this vector's, 0.5 is
     * halfway between, and 1.0 sets the axes equal to the other vector's.
     *
     * @param {Vector} vec The other vector
     * @param {Number} mixFactor The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} RangeError if `mixFactor` is not between 0 and 1
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mix(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 150)
     * @category Interpolation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/interpolation)
     */
    mix(vec: Vector, mixFactor: number = 0.5) {
        if (mixFactor < 0 || mixFactor > 1) {
            throw new RangeError('The mixFactor argument must be between 0 and 1.');
        }
        this.mixX(vec, mixFactor);
        this.mixY(vec, mixFactor);
        return this;
    }

    /**
     * Creates a clone of this vector with the same properties. This is particularly
     * useful when you need to apply the method which modifies the vector but keep
     * the original vector untouched
     *
     * @return The instance of the newly created vector
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = vec1.clone();
     *
     * assert.equal(vec2.x, vec1.x)
     * assert.equal(vec2.y, vec1.y)
     * assert.notEqual(vec1, vec2)
     * @category Constructor
     */
    clone() {
        return new Vector(this.x, this.y);
    }

    /**
     * Copies the X axis of another vector to this one
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copyX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     * @category Copy
     */
    copyX(vec: Vector) {
        this.x = vec.x;
        return this;
    }

    /**
     * Copies the Y axis of another vector to this one
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copyY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 20)
     * @category Copy
     */
    copyY(vec: Vector) {
        this.y = vec.y;
        return this;
    }

    /**
     * Copies the X and Y axes of another vector to this one
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copy(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 20)
     * @category Copy
     */
    copy(vec: Vector) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }

    /**
     * Calculates the dot product of this vector and another
     *
     * @param {Vector} vec The second vector
     * @return The dot product of this vector and the other one
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const dp = vec1.dot(vec2);
     * assert.equal(dp, 23000)
     * @category Product
     * @see [Try it live](https://statox.github.io/simple-vector-examples/product)
     */
    dot(vec: Vector) {
        return this.x * vec.x + this.y * vec.y;
    }

    /**
     * Calculates the cross product of this vector and another.
     *
     * Note that the resulting scalar value is due to considering
     * the Z axes as 0. See {@link https://stackoverflow.com/a/243977 stackoverflow.com}
     *
     * @param {Vector} vec The second vector
     * @return The cross product of this vector and the other one
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(500, 200);
     *
     * const cp = vec1.cross(vec2);
     * assert.equal(dp, -30000)
     * @category Product
     * @see [Try it live](https://statox.github.io/simple-vector-examples/product)
     */
    cross(vec: Vector) {
        return this.x * vec.y - this.y * vec.x;
    }

    /**
     * Projects a vector onto the direction of another vector
     *
     * @param {Vector} vec The second vector
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the vector to project onto is zero. This prevents `NaN` results.
     * @example
     * const vec1 = new Vector(100, 0);
     * const vec2 = new Vector(100, 100);
     *
     * vec1.projectOnto(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     * @category Interpolation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/interpolation)
     */
    projectOnto(vec: Vector) {
        if (vec.isZero()) {
            throw new DivisionByZeroError();
        }
        const coeff = (this.x * vec.x + this.y * vec.y) / (vec.x * vec.x + vec.y * vec.y);
        this.x = coeff * vec.x;
        this.y = coeff * vec.y;
        return this;
    }

    /**
     * Gets the angle θ in the plane (in radians, -π < θ < π ) between the positive
     * X axis and the ray from (0, 0) to the point (x, y).
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as `verticalAngle()`
     *
     * @return The angle in radians
     * @example
     * assert.equal(0,          (new Vector(10, 0)).horizontalAngle());
     * assert.equal(Math.PI/2,  (new Vector(0, 10)).horizontalAngle());
     * assert.equal(Math.PI,    (new Vector(-10, 0)).horizontalAngle());
     * assert.equal(-Math.PI/2, (new Vector(0, -10)).horizontalAngle());
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angle)
     */
    horizontalAngle() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Gets the angle θ in the plane (in degrees, -180 < θ < 180 ) between the positive
     * X axis and the ray from (0, 0) to the point (x, y)
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as verticalAngleDeg()
     *
     * @return The angle in degrees
     * @example
     * assert.equal(0,    (new Vector(10, 0)).horizontalAngleDeg());
     * assert.equal(90,   (new Vector(0, 10)).horizontalAngleDeg());
     * assert.equal(180,  (new Vector(-10, 0)).horizontalAngleDeg());
     * assert.equal(-90,  (new Vector(0, -10)).horizontalAngleDeg());
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angle)
     */
    horizontalAngleDeg() {
        return radian2degrees(this.horizontalAngle());
    }

    /**
     * Gets the angle θ in the plane (in rads -π < θ < π) between the positive
     * Y axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngle()
     *
     * @return The angle in radians
     * @example
     * assert.equal(0,          (new Vector(0, 10)).verticalAngle());
     * assert.equal(-Math.PI/2, (new Vector(-10, 0)).verticalAngle());
     * assert.equal(Math.PI/,   (new Vector(0, 10)).verticalAngle());
     * assert.equal(Math.PI/2,  (new Vector(10, 0)).verticalAngle());
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angle)
     */
    verticalAngle() {
        return Math.atan2(this.x, this.y);
    }

    /**
     * Gets the angle θ in the plane (in degrees -180 < θ < 180) between the positive
     * Y axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngleDeg()
     *
     * @return The angle in degrees
     * @example
     * assert.equal(0,   (new Vector(0, 10)).verticalAngleDeg());
     * assert.equal(-90, (new Vector(-10, 0)).verticalAngleDeg());
     * assert.equal(180, (new Vector(0, 10)).verticalAngleDeg());
     * assert.equal(90,  (new Vector(10, 0)).verticalAngleDeg());
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angle)
     */
    verticalAngleDeg() {
        return radian2degrees(this.verticalAngle());
    }

    /**
     * Alias for {@link Vector.horizontalAngle horizontalAngle}
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    angle = this.horizontalAngle;

    /**
     * Alias for {@link Vector.horizontalAngle horizontalAngle()}
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    direction = this.horizontalAngle;

    /**
     * Alias for .horizontalAngleDeg()
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    angleDeg = this.horizontalAngleDeg;

    /**
     * Computes the slope (or gradient) of the line passing by the vector.
     *
     * Note that the slope is positive for vectors in quadrants I and III,
     * negative for vectors in quadrants II and IV, `0` for horizontal vectors
     * and `Infinity` for vertical vectors
     *
     * @return The slope of the line passing by the vector
     * @example
     * assert.equal(0,   (new Vector(1, 0)).slope());
     * assert.equal(0,   (new Vector(-1, 0)).slope());
     * assert.equal(1,   (new Vector(1, 1)).slope());
     * assert.equal(1,   (new Vector(-1, -1)).slope());
     * assert.equal(-1,   (new Vector(-1, 1)).slope());
     * assert.equal(-1,   (new Vector(1, -1)).slope());
     * assert.equal(±Infinity,   (new Vector(0, 1)).slope());
     * assert.equal(±Infinity,   (new Vector(0, -1)).slope());
     *
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angle)
     */
    slope() {
        const m = this.y / this.x;
        if (Object.is(m, -0)) {
            return 0;
        }
        if (m === -Infinity) {
            return Infinity;
        }
        return m;
    }

    /**
     * Gets the angle in radian (0 < θ <= π) between this vector and another one
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in radians
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.angleWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.angleWith(new Vector(1, 1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.angleWith(new Vector(1, -1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.angleWith(new Vector(-1, 0));
     * assert.equal(a, Math.PI)
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angleWith)
     */
    angleWith(vec: Vector) {
        if (this.isZero() || vec.isZero()) {
            return 0;
        }
        /*
         * Math.acos() is only defined within [-1, 1] but in some cases
         * cosTheta can get slightly out of this range because of floating point errors.
         * This is the case e.g. for:
         *  const v1 = new Vector(0.9992141823705266, 0.039636066273028084);
         *  const v2 = new Vector(0.9992141823705266, 0.03963606627302818);
         * when this happens cosTheta is 1.0000000000000002 and Math.acos() becomes NaN
         * So we need to clamp cosTheta to avoid this. This is covered by a test case.
         */
        const cosTheta = (this.x * vec.x + this.y * vec.y) / (this.magnitude() * vec.magnitude());
        const fixedCosTheta = Math.max(-1, Math.min(1, cosTheta));
        return Math.acos(fixedCosTheta);
    }

    /**
     * Gets the angle in degrees (0 < θ <= 180 between this vector and another one
     *
     * If both vectors are null the method returns NaN
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in degrees
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.angleDegWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.angleDegWith(new Vector(1, 1));
     * assert.equal(a, 45)
     * a = vec1.angleDegWith(new Vector(1, -1));
     * assert.equal(a, 45)
     * a = vec1.angleDegWith(new Vector(-1, 0));
     * assert.equal(a, 180)
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angleWith)
     */
    angleDegWith(vec: Vector) {
        return radian2degrees(this.angleWith(vec));
    }

    /**
     * Gets the angle in radian ( -π < θ <= π) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleWith()
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in radians
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.orientedAngleWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.orientedAngleWith(new Vector(1, 1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.orientedAngleWith(new Vector(1, -1));
     * assert.equal(a, -Math.PI / 4)
     * a = vec1.orientedAngleWith(new Vector(-1, 0));
     * assert.equal(a, Math.PI)
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angleWith)
     */
    orientedAngleWith(vec: Vector) {
        return Math.atan2(this.x * vec.y - this.y * vec.x, this.x * vec.x + this.y * vec.y);
    }

    /**
     * Gets the angle in degrees ( -180 < θ <= 180) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleDegWith()
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in degrees
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.orientedAngleDegWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.orientedAngleDegWith(new Vector(1, 1));
     * assert.equal(a, 45)
     * a = vec1.orientedAngleDegWith(new Vector(1, -1));
     * assert.equal(a, -45)
     * a = vec1.orientedAngleDegWith(new Vector(-1, 0));
     * assert.equal(a, 180)
     * @category Angle
     * @see [Try it live](https://statox.github.io/simple-vector-examples/angleWith)
     */
    orientedAngleDegWith(vec: Vector) {
        return radian2degrees(this.orientedAngleWith(vec));
    }

    /**
     * Rotate the vector counter-clockwise by an angle in radians
     *
     * @param {number} angle The angle in radians to rotate the vector by
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 0);
     * assert.equal(0, vec.horizontalAngleDeg())
     *
     * vec.rotateBy(Math.PI)
     * assert.equal(180, vec.horizontalAngleDeg())
     *
     * vec.rotateBy(Math.PI / 2)
     * assert.equal(-90, vec.horizontalAngleDeg()) // π + π/2 => -π/2
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateBy(angle: number) {
        const nx = this.x * Math.cos(angle) - this.y * Math.sin(angle);
        const ny = this.x * Math.sin(angle) + this.y * Math.cos(angle);

        this.x = nx;
        this.y = ny;

        return this;
    }

    /**
     * Rotate the vector counter-clockwise by an angle in degrees
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 0);
     * assert.equal(0, vec.horizontalAngleDeg())
     *
     * vec.rotateByDeg(180)
     * assert.equal(180, vec.horizontalAngleDeg())
     *
     * vec.rotateByDeg(90)
     * assert.equal(-90, vec.horizontalAngleDeg()) // 180 + 90 => -90
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateByDeg(angle: number) {
        const radAngle = degrees2radian(angle);
        return this.rotateBy(radAngle);
    }

    /**
     * Rotate towards another vector limiting the rotation to a max
     * angle θ in radians (θ > 0)
     *
     * @param {Vector} vec The vector steering the current vector
     * @param {number} maxAngle The max angle in radians to rotate the vector by
     * @return `this` for chaining capabilities
     * @throws {RangeError} RangeError if `maxAngle` equal or less than zero
     * @example
     * const vec1 = new Vector(10, 0);
     * const vec2 = new Vector(0, 10);
     *
     * vec1.rotateTowards(vec2, Math.PI / 4);
     * assert.equal(vec1.horizontalAngle(), Math.PI / 4)
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateTowards(vec: Vector, maxAngle: number) {
        if (maxAngle <= 0) {
            throw new RangeError('The max angle must be positive');
        }
        const angle = this.angleWith(vec);

        // Clamp rotation
        let delta = Math.min(angle, maxAngle);

        // Decide direction (CW or CCW)
        if (this.cross(vec) < 0) {
            delta = -delta;
        }

        return this.rotateBy(delta);
    }

    /**
     * Rotate towards another vector limiting the rotation to a max
     * angle θ in degrees (θ > 0)
     *
     * @param {Vector} vec The vector steering the current vector
     * @param {number} maxAngle The max angle in degrees to rotate the vector by
     * @return `this` for chaining capabilities
     * @throws {RangeError} RangeError if `maxAngle` equal or less than zero
     * @example
     * const vec1 = new Vector(10, 0);
     * const vec2 = new Vector(0, 10);
     *
     * vec1.rotateTowardsDeg(vec2, 2);
     * assert.equal(vec1.horizontalAngleDeg(), 2)
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateTowardsDeg(vec: Vector, maxAngle: number) {
        return this.rotateTowards(vec, degrees2radian(maxAngle));
    }

    /**
     * Rotate the vector to an angle in radians using the positive
     * X axis as origin, move counter-clockwise
     *
     * @param {number} rotation The angle in radians to rotate the vector to
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 0);
     *
     * vec.rotateTo(Math.PI);
     * assert.equal(vec1.x, -10)
     * assert.equal(vec1.y, 0)
     *
     * v.rotateTo(-Math.PI/2);
     * assert.equal(v.x, 0);
     * assert.equal(v.y, -10);
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateTo(rotation: number) {
        return this.rotateBy(rotation - this.horizontalAngle());
    }

    /**
     * Rotate the vector to an angle in degrees using the positive
     * X axis as origin, move counter-clockwise
     *
     * @param {number} rotation The angle in degrees to rotate the vector to
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 0);
     *
     * vec.rotateToDeg(180);
     * assert.equal(vec1.x, -10)
     * assert.equal(vec1.y, 0)
     *
     * v.rotateTo(-90);
     * assert.equal(v.x, 0);
     * assert.equal(v.y, -10);
     * @category Rotation
     * @see [Try it live](https://statox.github.io/simple-vector-examples/rotation)
     */
    rotateToDeg(rotation: number) {
        const radRotation = degrees2radian(rotation);
        return this.rotateTo(radRotation);
    }

    /**
     * Calculates the distance from the X axis of another vector to the X axis of this one
     *
     * @param {Vector} vec The second vector
     * @return The distance between the X axes
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceX(vec2);
     * assert.equal(d, -100)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    distanceX(vec: Vector) {
        return this.x - vec.x;
    }

    /**
     * Same as {@link distanceX} but always returns an absolute number
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.absDistanceX(vec2);
     * assert.equal(d, 100)
     *
     * @param {Vector} vec The second vector
     * @return The absolute distance between the X axes
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    absDistanceX(vec: Vector) {
        return Math.abs(this.distanceX(vec));
    }

    /**
     * Calculates the distance from the Y axis of another vector to the Y axis of this one
     *
     * @param {Vector} vec The second vector
     * @return The distance between the Y axes
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceY(vec2);
     * assert.equal(d, -10)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    distanceY(vec: Vector) {
        return this.y - vec.y;
    }

    /**
     * Same as {@link distanceY} but always returns an absolute number
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.absDistanceY(vec2);
     * assert.equal(d, 10)
     *
     * @param {Vector} vec The second vector
     * @return The absolute distance between the Y axes
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    absDistanceY(vec: Vector) {
        return Math.abs(this.distanceY(vec));
    }

    /**
     * Calculates the euclidean distance between this vector and another one
     *
     * @param {Vector} vec The second vector
     * @return The euclidean distance between the vectors
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distance(vec2);
     * assert.equal(d, 100.4987562112089)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    distance(vec: Vector) {
        return Math.sqrt(this.distanceSq(vec));
    }

    /**
     * Calculates the squared euclidean distance between this vector and another.
     *
     * This is faster than {@link distance} because we don't use `Math.sqrt`.
     *
     * @param {Vector} vec The second vector
     * @return The squared euclidean distance between the vectors
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceSq(vec2);
     * assert.equal(d, 10100)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     */
    distanceSq(vec: Vector) {
        const dx = this.distanceX(vec);
        const dy = this.distanceY(vec);

        return dx * dx + dy * dy;
    }

    /**
     * Calculates the Manhattan distance between this vector and another.
     * This is the sum of the absolute difference between the respective coordinates
     * of the vectors.
     *
     * @param {Vector} vec The second vector
     * @return The Manhattan distance between the vectors
     * @example
     * const vec1 = new Vector(1, 1);
     * const vec2 = new Vector(3, 4);
     *
     * const d = vec1.distanceManhattan(vec2);
     * assert.equal(d, 5)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     * @see [Wikipedia definition](https://en.wikipedia.org/wiki/Taxicab_geometry)
     */
    distanceManhattan(vec: Vector) {
        return Math.abs(this.x - vec.x) + Math.abs(this.y - vec.y);
    }

    /**
     * Calculates the Chebyshev distance between this vector and another.
     * This is the greatest absolute difference between the respective coordinates
     * of the vectors.
     *
     * @param {Vector} vec The second vector
     * @return The Chebyshev distance between the vectors
     * @example
     * const vec1 = new Vector(1, 1);
     * const vec2 = new Vector(3, 4);
     *
     * const d = vec1.distanceChebyshev(vec2);
     * assert.equal(d, 3)
     * @category Distance
     * @see [Try it live](https://statox.github.io/simple-vector-examples/distance)
     * @see [Wikipedia definition](https://en.wikipedia.org/wiki/Chebyshev_distance)
     */
    distanceChebyshev(vec: Vector) {
        return Math.max(Math.abs(this.x - vec.x), Math.abs(this.y - vec.y));
    }

    /**
     * Calculates the magnitude (or length) of the vector
     *
     * @return The magnitude of the vector
     * @example
     * const vec = new Vector(100, 50);
     *
     * const m = vec.mag()
     * assert.equal(m, 111.80339887498948)
     * @category Magnitude
     * @see [Try it live](https://statox.github.io/simple-vector-examples/magnitude)
     */
    mag() {
        return Math.sqrt(this.magSq());
    }

    /**
     * Alias for {@link mag}
     *
     * @return The magnitude of the vector
     * @category Magnitude
     */
    magnitude = this.mag;

    /**
     * Calculates the squared length (or squared magnitude) of the vector
     *
     * This is faster than {@link mag} because we don't use `Math.sqrt`.
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const m = vec.magSq()
     * assert.equal(m, 12500)
     *
     * @return The squared magnitude of the vector
     * @category Magnitude
     * @see [Try it live](https://statox.github.io/simple-vector-examples/magnitude)
     */
    magSq() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Sets the vector axes to zero (0,0)
     *
     * @return `this` for chaining capabilities
     * @example
     * const vec = new Vector(10, 10);
     *
     * vec.zero();
     * assert.equal(vec1.x, 0)
     * assert.equal(vec1.y, 0)
     * @category Magnitude
     */
    zero() {
        this.x = 0;
        this.y = 0;
        return this;
    }

    /**
     * Resizes the vector so that its direction is not changed but its
     * magnitude is set to the new value. If the `magnitude` argument is
     * negative, the angle of the resulting vector is rotated by 180 degrees.
     *
     * @param {Number} magnitude The new value of the vector's magnitude
     * @return `this` for chaining capabilities
     * @throws {TypeError} TypeError if the `magnitude` argument is null or undefined
     * @throws {@link DivisionByZeroError} If the vector is zero
     * @example
     * const vec1 = new Vector(0, 1);
     * vec1.resize(10);
     * assert.equal(vec1.horizontalAngle(), 90);
     * assert.equal(vec1.magnitude(), 10);
     *
     * vec1.resize(-2);
     * assert.equal(vec1.horizontalAngle(), -90);
     * assert.equal(vec1.magnitude(), 2);
     * @category Resize
     * @see [Try it live](https://statox.github.io/simple-vector-examples/resize)
     */
    resize(magnitude: number) {
        if (magnitude === undefined || magnitude === null) {
            throw new TypeError('The magnitude argument must be defined');
        }
        this.normalize();
        this.multiplyScalar(magnitude);
        return this;
    }

    /**
     * Returns true if this vector is parallel to another one.
     *
     * This method has a small tolerance so that vectors which seems almost parallel
     * are considered parallel. This is to avoid rounding errors inherent to floating
     * point programming. (For example `v.isParallelTo(v.rotateBy(2 * Math.PI))` would be
     * likely to be `false` without this small tolerance).
     *
     * @return `true` if the vector is parallel to the other one
     * @example
     * const vec1 = new Vector(1, 1);
     * const vec2 = new Vector(-2, -2);
     * assert.true(vec1.isParallelTo(vec2))
     * @category Comparison
     * @see [Try it live](https://statox.github.io/simple-vector-examples/comparison)
     */
    isParallelTo(vec: Vector) {
        const EPSILON = 1e-6;
        return Math.abs(this.cross(vec)) < EPSILON;
    }

    /**
     * Returns true if this vector is perpendicular to another one.
     *
     * This method has a small tolerance so that vectors which seems almost perpendicular
     * are considered perpendicular. This is to avoid rounding errors inherent to floating
     * point programming. (For example `v.isParallelTo(v.isPerpendicularTo(Math.PI / 2))` would be
     * likely to be `false` without this small tolerance).
     *
     * @return true if the vector is perpendicular to the other one
     * @example
     * const vec1 = new Vector(1, 0);
     * const vec2 = new Vector(0, -2);
     * assert.true(vec1.isPerpendicularTo(vec2))
     * @category Comparison
     * @see [Try it live](https://statox.github.io/simple-vector-examples/comparison)
     */
    isPerpendicularTo(vec: Vector) {
        const EPSILON = 1e-6;
        return Math.abs(this.dot(vec)) < EPSILON;
    }

    /**
     * Returns true if vector is exactly (0, 0)
     *
     * @return true if the vector magnitude is 0, false otherwise
     * @example
     * const vec = new Vector(100, 50);
     * assert.false(vec.isZero())
     *
     * vec.zero();
     * assert.true(vec.isZero())
     * @category Comparison
     * @see [Try it live](https://statox.github.io/simple-vector-examples/comparison)
     */
    isZero() {
        return this.x === 0 && this.y === 0;
    }

    /**
     * Returns true if this vector axes values are exactly the same as another.
     *
     * Be cautious with floating point errors. If vectors are close but not exactly
     * the same this method returns `false`, in most cases you probably want to use
     * {@link isCloseTo} instead.
     *
     * @param {Vector} vec The second vector
     * @return true if the vector axes are equal to the other one's
     * @example
     * const vec1 = new Vector(100, 50);
     *
     * const vec2 = new Vector(100, 50);
     * assert.true(vec1.isEqualTo(vec2);
     *
     * const vec3 = new Vector(0, 0);
     * assert.false(vec1.isEqualTo(vec3);
     *
     * // Beware when manipulating vectors
     * const vec1Rot = vec1.clone().rotateByDeg(360)
     * // => {x: 100.00000000000001, y: 49.99999999999998}
     * assert.false(vec1.isEqualTo(vec1Rot));
     *
     * @category Comparison
     * @see [Try it live](https://statox.github.io/simple-vector-examples/comparison)
     */
    isEqualTo(vec: Vector) {
        return this.x === vec.x && this.y === vec.y;
    }

    /**
     * Returns true if this vector axes values are close to the axes of the other
     * vector, within the margin of the `epsilon` parameter.
     *
     * This is useful when dealing with floating point errors. You probably want
     * to use this method rather than {@link isEqualTo}.
     *
     * @param {Vector} vec The second vector
     * @param {number} epsilon (default `1e-6`) The size of the margin, you want to keep this value small
     * @return true if the vector axes are close to the other one's within the provided margin
     * @example
     * const vec1 = new Vector(100, 50);
     *
     * const vec2 = new Vector(100.000000001, 49.99999999998);
     * assert.false(vec1.isEqualTo(vec2);
     * assert.true(vec1.isCloseTo(vec2);
     *
     * // Useful when manipulating vectors
     * const vec1Rot = vec1.clone().rotateByDeg(360)
     * // => {x: 100.00000000000001, y: 49.99999999999998}
     * assert.true(vec1.isCloseTo(vec1Rot));
     * assert.false(vec1.isEqualTo(vec1Rot));
     *
     * @category Comparison
     * @see [Try it live](https://statox.github.io/simple-vector-examples/comparison)
     */
    isCloseTo(vec: Vector, epsilon: number = 1e-6) {
        return Math.abs(this.x - vec.x) <= epsilon && Math.abs(this.y - vec.y) <= epsilon;
    }

    /**
     * Returns a string representation of the vector
     *
     * @return A string representing the vector's axes
     * @example
     * const vec = new Vector(10, 20);
     * const s = vec.toString();
     * assert.equal(s, "x:10, y:20")
     * @category Constructor
     * @see [Try it live](https://statox.github.io/simple-vector-examples/constructors)
     */
    toString() {
        return `x:${this.x}, y:${this.y}`;
    }

    /**
     * Returns an array representation of the vector
     *
     * @return An array representation of the vector
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.toArray();
     * // [10, 20]
     * @category Constructor
     * @see [Try it live](https://statox.github.io/simple-vector-examples/constructors)
     */
    toArray() {
        return [this.x, this.y];
    }

    /**
     * Returns an object representation of the vector
     *
     * @return An object representation of the vector
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.toObject();
     * // { x: 10, y: 20 }
     * @category Constructor
     * @see [Try it live](https://statox.github.io/simple-vector-examples/constructors)
     */
    toObject(): VectorLike {
        return { x: this.x, y: this.y };
    }

    /**
     * Returns a polar representation of the vector.
     *
     * @return A polar representation of the vector
     * @example
     * const vec = new Vector(1, 1);
     *
     * vec.toPolar();
     * // { theta: Math.PI/ 4, r: Math.sqrt(2) }
     * @category Constructor
     * @see [Try it live](https://statox.github.io/simple-vector-examples/constructors)
     */
    toPolar(): Polar {
        const angle = Math.atan2(this.y, this.x);
        return {
            r: Math.sqrt(this.x * this.x + this.y * this.y),
            theta: Number.isNaN(angle) ? 0 : angle
        };
    }
}

const degrees = 180 / Math.PI;

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function radian2degrees(rad: number) {
    return rad * degrees;
}

function degrees2radian(deg: number) {
    return deg / degrees;
}
