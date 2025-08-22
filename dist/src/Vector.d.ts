/**
 * Vector - A JavaScript 2D vector class with methods for common vector operations
 *
 * Taken from https://github.com/maxkueng/victor
 *
 * My plan is to temporarily use this package to port victor to typescript and when
 * it's ready redistribute the package properly. Depending how it goes, that might
 * never happen.
 *
 * @module Vector
 */
/**
 * An exception thrown by some methods when a division by zero is attempted.
 */
export declare class DivisionByZeroError extends Error {
    constructor();
}
/**
 * A simple 2D vector class
 * @property {number} x The X axis value
 * @property {number} y The Y axis value
 */
export declare class Vector {
    x: number;
    y: number;
    /**
     * A simple 2D vector class
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * @param {Number} x Value of the X axis
     * @param {Number} y Value of the Y axis
     */
    constructor(x?: number, y?: number);
    /**
     * Adds the X axis of another vector to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.addX(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     *
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    addX(vec: Vector): this;
    /**
     * Adds the Y axis of another vector to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.addY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 40)
     *
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    addY(vec: Vector): this;
    /**
     * Adds another vector to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 30);
     *
     * vec1.add(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 40)
     * @param {Vector} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    add(vec: Vector): this;
    /**
     * Adds the given scalar to both vector axes
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalar(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 22)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    addScalar(scalar: number): this;
    /**
     * Adds the given scalar to the X axis
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalarX(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 20)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    addScalarX(scalar: number): this;
    /**
     * Adds the given scalar to the Y axis
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.addScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 22)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    addScalarY(scalar: number): this;
    /**
     * Subtracts the X axis of another vector from this one
     *
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtractX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 30)
     *
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtractX(vec: Vector): this;
    /**
     * Subtracts the Y axis of another vector from this one
     *
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtractY(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     *
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtractY(vec: Vector): this;
    /**
     * Subtracts another vector from this one
     *
     * @example
     * const vec1 = new Vector(30, 30);
     * const vec2 = new Vector(10, 20);
     *
     * vec1.subtract(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     * @param {Vector} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtract(vec: Vector): this;
    /**
     * Subtracts the given scalar from both axes
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalar(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 18)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtractScalar(scalar: number): this;
    /**
     * Subtracts the given scalar from the X axis
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalarX(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 20)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtractScalarX(scalar: number): this;
    /**
     * Subtracts the given scalar from the Y axis
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.subtractScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 18)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    subtractScalarY(scalar: number): this;
    /**
     * Divides the X axis of this vector by the X axis of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 0);
     *
     * vec1.divideX(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     *
     * @param {Vector} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the X axis of the argument vector is 0
     * @category Arithmetic operations
     */
    divideX(vec: Vector): this;
    /**
     * Divides the Y axis of this vector by the Y axis of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(0, 2);
     *
     * vec1.divideY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 25)
     *
     * @param {Vector} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the Y axis of the argument vector is 0
     * @category Arithmetic operations
     */
    divideY(vec: Vector): this;
    /**
     * Divides both axes of this vector by those of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 2);
     *
     * vec1.divide(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 25)
     *
     * @param {Vector} vec The vector to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If any axis of the argument vector is 0
     * @category Arithmetic operations
     */
    divide(vec: Vector): this;
    /**
     * Divides both vector axes by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalar(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 25)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If the argument scalar is 0
     * @category Arithmetic operations
     */
    divideScalar(scalar: number): this;
    /**
     * Divides the X axis by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalarX(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If x axis of argument vector is 0
     * @category Arithmetic operations
     */
    divideScalarX(scalar: number): this;
    /**
     * Divides the Y axis by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.divideScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 25)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     * @throws {@link DivisionByZeroError} If x axis of argument vector is 0
     * @category Arithmetic operations
     */
    divideScalarY(scalar: number): this;
    /**
     * Multiplies the X axis of this vector by the X axis of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 0);
     *
     * vec1.multiplyX(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 50)
     *
     * @param {Vector} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiplyX(vec: Vector): this;
    /**
     * Multiplies the Y axis of this vector by the Y axis of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(0, 2);
     *
     * vec1.multiplyY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 100)
     *
     * @param {Vector} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiplyY(vec: Vector): this;
    /**
     * Multiplies both axes of this vector by those of another one
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(2, 2);
     *
     * vec1.multiply(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 100)
     *
     * @param {Vector} vec The vector to multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiply(vec: Vector): this;
    /**
     * Multiplies both vector axes by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalar(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 100)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiplyScalar(scalar: number): this;
    /**
     * Multiplies the X axis by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalarX(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiplyScalarX(scalar: number): this;
    /**
     * Multiplies the Y axis by the given scalar
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.multiplyScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 100)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     * @category Arithmetic operations
     */
    multiplyScalarY(scalar: number): this;
    /**
     * Inverts the X axis
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invertX();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, 50)
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    invertX(): this;
    /**
     * Inverts the Y axis
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invertY();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, -50)
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    invertY(): this;
    /**
     * Inverts both axes
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.invert();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, -50)
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    invert(): this;
    /**
     * Normalize the vector. (Keep direction but reduce length to 1)
     *
     * @example
     * const vec = new Vector(10, 0);
     *
     * vec.normalize();
     * assert.equal(vec.x, 1)
     * assert.equal(vec.y, 0)
     *
     * @return `this` for chaining capabilities
     * @category Magnitude
     */
    normalize(): this;
    /**
     * Alias for {@link Vector.normalize}
     *
     * @return `this` for chaining capabilities
     * @category Magnitude
     */
    norm: () => this;
    /**
     * If the absolute value of the axes is greater than `max`,
     * multiplies the axis by `factor`
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * vec.limit(80, 0.9);
     * assert.equal(vec.x, 90)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} max The maximum value for both X and Y axes
     * @param {Number} factor Factor by which the axes are to be multiplied with
     * @return `this` for chaining capabilities
     * @category Magnitude
     */
    limit(max: number, factor: number): this;
    /**
     * Randomizes the X axis with a value between the X axes of 2 others vectors
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeX(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     * @category Randomization
     */
    randomizeX(topLeft: Vector, bottomRight: Vector): this;
    /**
     * Randomizes the Y axis with a value between the Y axes of 2 others vectors
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeY(topLeft, bottomRight);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 73.933542831865296)
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     * @category Randomization
     */
    randomizeY(topLeft: Vector, bottomRight: Vector): this;
    /**
     * Randomizes both vector axes with a value between 2 vectors
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomize(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 73.933542831865296)
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     * @category Randomization
     */
    randomize(topLeft: Vector, bottomRight: Vector): this;
    /**
     * Randomly choses one axis and randomizes it with a value between the
     * corresponding axes of 2 other vectors
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const topLeft = new Vector(50, 60)
     * const bottomRight = new Vector(70, 80)
     *
     * vec.randomizeAny(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     *
     * @param {Vector} topLeft First bounding vector
     * @param {Vector} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     * @category Randomization
     */
    randomizeAny(topLeft: Vector, bottomRight: Vector): this;
    /**
     * Rounds both axes to an integer value using Math.round()
     *
     * @example
     * const vec = new Vector(100.2, 50.9);
     *
     * vec.unfloat();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 51)
     *
     * @return `this` for chaining capabilities
     * @category Precision
     */
    unfloat(): this;
    /**
     * Fix both axes to a certain precision using Number.toFixed()
     *
     * @example
     * const vec = new Vector(100.2345, 50.9876);
     *
     * vec.toFixed(2);
     * assert.equal(vec.x, 100.23)
     * assert.equal(vec.y, 50.99)
     *
     * @param {Number} precision (default: 8)
     * @return `this` for chaining capabilities
     * @category Precision
     */
    toFixed(precision?: number): this;
    /**
     * Performs a linear blend / interpolation of the X axis towards another vector.
     *
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mixX(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 100)
     *
     * @param {Vector} vec The other vector
     * @param {Number} amount The blend amount [0, 1] (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} if `amount` is not between 0 and 1
     * @category Interpolation
     */
    mixX(vec: Vector, amount?: number): this;
    /**
     * Performs a linear blend / interpolation of the Y axis towards another vector
     *
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mixY(vec2, 0.5);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 150)
     *
     * @param {Vector} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} if `amount` is not between 0 and 1
     * @category Interpolation
     */
    mixY(vec: Vector, amount?: number): this;
    /**
     * Performs a linear blend / interpolation towards another vector
     *
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(200, 200);
     *
     * vec1.mix(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 150)
     *
     * @param {Vector} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     * @throws {RangeError} if `amount` is not between 0 and 1
     * @category Interpolation
     */
    mix(vec: Vector, amount?: number): this;
    /**
     * Creates a clone of this vector
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = vec1.clone();
     *
     * assert.equal(vec2.x, vec1.x)
     * assert.equal(vec2.y, vec1.y)
     *
     * @return The instance of the newly created vector
     */
    clone(): Vector;
    /**
     * Copies the X axis of another vector to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copyX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @category Copy
     */
    copyX(vec: Vector): this;
    /**
     * Copies the Y axis of another vector to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copyY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 20)
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @category Copy
     */
    copyY(vec: Vector): this;
    /**
     * Copies vector axes to this one
     *
     * @example
     * const vec1 = new Vector(10, 10);
     * const vec2 = new Vector(20, 20);
     *
     * vec1.copy(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 20)
     *
     * @param {Vector} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     * @category Copy
     */
    copy(vec: Vector): this;
    /**
     * Calculates the dot product of this vector and another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const dp = vec1.dot(vec2);
     * assert.equal(dp, 23000)
     *
     * @param {Vector} vec The second vector
     * @return The dot product of this vector and the other one
     * @category Product & Projection
     */
    dot(vec: Vector): number;
    /**
     * Calculates the cross product of this vector and another.
     *
     * Note that the resulting scalar value is due to considering
     * the z axes as 0 https://stackoverflow.com/a/243977
     *
     * @example
     * const vec1 = new Vector(100, 100);
     * const vec2 = new Vector(500, 200);
     *
     * const cp = vec1.cross(vec2);
     * assert.equal(dp, -30000)
     *
     * @param {Vector} vec The second vector
     * @return The cross product of this vector and the other one
     * @category Product & Projection
     */
    cross(vec: Vector): number;
    /**
     * Projects a vector onto another vector, setting itself to the result.
     *
     * @example
     * const vec1 = new Vector(100, 0);
     * const vec2 = new Vector(100, 100);
     *
     * vec1.projectOnto(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     *
     * @param {Vector} vec The second vector
     * @return `this` for chaining capabilities
     * @category Product & Projection
     */
    projectOnto(vec: Vector): this;
    /**
     * Gets the angle θ in the plane (in radians, -π < θ < π ) between the positive
     * X axis and the ray from (0, 0) to the point (x, y).
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as verticalAngle()
     *
     * @example
     * assert.equal(0,          (new Vector(10, 0)).horizontalAngle());
     * assert.equal(Math.PI/2,  (new Vector(0, 10)).horizontalAngle());
     * assert.equal(Math.PI,    (new Vector(-10, 0)).horizontalAngle());
     * assert.equal(-Math.PI/2, (new Vector(0, -10)).horizontalAngle());
     *
     * @return The angle in radians
     * @category Angle
     */
    horizontalAngle(): number;
    /**
     * Gets the angle θ in the plane (in degrees, -180 < θ < 180 ) between the positive
     * X axis and the ray from (0, 0) to the point (x, y)
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as verticalAngleDeg()
     *
     * @example
     * assert.equal(0,    (new Vector(10, 0)).horizontalAngleDeg());
     * assert.equal(90,   (new Vector(0, 10)).horizontalAngleDeg());
     * assert.equal(180,  (new Vector(-10, 0)).horizontalAngleDeg());
     * assert.equal(-90,  (new Vector(0, -10)).horizontalAngleDeg());
     *
     * @return The angle in degrees
     * @category Angle
     */
    horizontalAngleDeg(): number;
    /**
     * Gets the angle θ in the plane (in rads -π < θ < π) between the positive
     * Y axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngle()
     *
     * @example
     * assert.equal(0,          (new Vector(0, 10)).verticalAngle());
     * assert.equal(-Math.PI/2, (new Vector(-10, 0)).verticalAngle());
     * assert.equal(Math.PI/,   (new Vector(0, 10)).verticalAngle());
     * assert.equal(Math.PI/2,  (new Vector(10, 0)).verticalAngle());
     *
     * @return The angle in degrees
     * @category Angle
     */
    verticalAngle(): number;
    /**
     * Gets the angle θ in the plane (in degrees -180 < θ < 180) between the positive
     * Y axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngleDeg()
     *
     * @example
     * assert.equal(0,   (new Vector(0, 10)).verticalAngleDeg());
     * assert.equal(-90, (new Vector(-10, 0)).verticalAngleDeg());
     * assert.equal(180, (new Vector(0, 10)).verticalAngleDeg());
     * assert.equal(90,  (new Vector(10, 0)).verticalAngleDeg());
     *
     * @return The angle in degrees
     * @category Angle
     */
    verticalAngleDeg(): number;
    /**
     * Alias for {@link Vector.horizontalAngle horizontalAngle}
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    angle: () => number;
    /**
     * Alias for {@link Vector.horizontalAngle horizontalAngle()}
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    direction: () => number;
    /**
     * Alias for .horizontalAngleDeg()
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    angleDeg: () => number;
    /**
     * Gets the angle in radian (0 < θ <= π) between this vector and another one
     *
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
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in radians
     * @category Angle
     */
    angleWith(vec: Vector): number;
    /**
     * Gets the angle in degrees (0 < θ <= 180 between this vector and another one
     *
     * If both vectors are null the method returns NaN
     *
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.angleWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.angleWith(new Vector(1, 1));
     * assert.equal(a, 45)
     * a = vec1.angleWith(new Vector(1, -1));
     * assert.equal(a, 45)
     * a = vec1.angleWith(new Vector(-1, 0));
     * assert.equal(a, 180)
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in degrees
     * @category Angle
     */
    angleDegWith(vec: Vector): number;
    /**
     * Gets the angle in radian ( -π < θ <= π) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleWith()
     *
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
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in radians
     * @category Angle
     */
    orientedAngleWith(vec: Vector): number;
    /**
     * Gets the angle in degrees ( -180 < θ <= 180) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleDegWith()
     *
     * @example
     * const vec1 = new Vector(1, 0);
     *
     * a = vec1.orientedAngleWith(new Vector(1, 0));
     * assert.equal(a, 0)
     * a = vec1.orientedAngleWith(new Vector(1, 1));
     * assert.equal(a, 45)
     * a = vec1.orientedAngleWith(new Vector(1, -1));
     * assert.equal(a, -45)
     * a = vec1.orientedAngleWith(new Vector(-1, 0));
     * assert.equal(a, 180)
     *
     * @param {Vector} vec The second vector
     * @return The angle between both vectors in radians
     * @category Angle
     */
    orientedAngleDegWith(vec: Vector): number;
    /**
     * Rotate the vector counter-clockwise by an angle in radians
     *
     * @example
     * const vec = new Vector(10, 0);
     * assert.equal(0, vec.horizontalAngleDeg())
     *
     * vec.rotate(Math.PI)
     * assert.equal(180, vec.horizontalAngleDeg())
     *
     * vec.rotate(Math.PI / 2)
     * // π + π / 2 => -π/2
     * assert.equal(-90, vec.horizontalAngleDeg())
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    rotate(angle: number): this;
    /**
     * Rotate the vector counter-clockwise by an angle in degrees
     *
     * @example
     * const vec = new Vector(10, 0);
     * assert.equal(0, vec.horizontalAngleDeg())
     *
     * vec.rotateDeg(180)
     * assert.equal(180, vec.horizontalAngleDeg())
     *
     * vec.rotateDeg(90)
     * // 180 + 90 => -90
     * assert.equal(-90, vec.horizontalAngleDeg())
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    rotateDeg(angle: number): this;
    /**
     * Rotate the vector to an angle in radians using the positif
     * X axis as origin, move counter-clockwise
     *
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
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    rotateTo(rotation: number): this;
    /**
     * Rotate the vector to an angle in degrees using the positif
     * X axis as origin, move counter-clockwise
     *
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
     *
     * @return `this` for chaining capabilities
     * @category Transformation
     */
    rotateToDeg(rotation: number): this;
    /**
     * Calculates the distance between the X axis of this vector the X axis of another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceX(vec2);
     * assert.equal(d, -100)
     *
     * @param {Vector} vec The second vector
     * @return The distance between the X axes
     * @category Distance
     */
    distanceX(vec: Vector): number;
    /**
     * Same as `distanceX()` but always returns an absolute number
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceX(vec2);
     * assert.equal(d, 100)
     *
     * @param {Vector} vec The second vector
     * @return The absolute distance between the X axes
     * @category Distance
     */
    absDistanceX(vec: Vector): number;
    /**
     * Calculates the distance between the X axis of this vector the X axis of another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceY(vec2);
     * assert.equal(d, -10)
     *
     * @param {Vector} vec The second vector
     * @return The distance between the Y axes
     * @category Distance
     */
    distanceY(vec: Vector): number;
    /**
     * Same as `distanceY()` but always returns an absolute number
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceY(vec2);
     * assert.equal(d, 10)
     *
     * @param {Vector} vec The second vector
     * @return The absolute distance between the Y axes
     * @category Distance
     */
    absDistanceY(vec: Vector): number;
    /**
     * Calculates the euclidean distance between this vector and another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distance(vec2);
     * assert.equal(d, 100.4987562112089)
     *
     * @param {Vector} vec The second vector
     * @return The euclidian distance between the vectors
     * @category Distance
     */
    distance(vec: Vector): number;
    /**
     * Calculates the squared euclidean distance between this vector and another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     * const vec2 = new Vector(200, 60);
     *
     * const d = vec1.distanceSq(vec2);
     * assert.equal(d, 10100)
     *
     * @param {Vector} vec The second vector
     * @return The squared euclidian distance between the vectors
     * @category Distance
     */
    distanceSq(vec: Vector): number;
    /**
     * Calculates the length or magnitude of the vector
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const m = vec.length()
     * assert.equal(m, 111.80339887498948)
     *
     * @return The magnitude of the vector
     * @category Magnitude
     */
    length(): number;
    /**
     * Alias for .length()
     *
     * @return The magnitude of the vector
     * @category Magnitude
     */
    magnitude: () => number;
    /**
     * Calculates the squared length or squared magnitude of the vector
     *
     * @example
     * const vec = new Vector(100, 50);
     *
     * const m = vec.lengthSq()
     * assert.equal(m, 12500)
     *
     * @return The squared magnitude of the vector
     * @category Magnitude
     */
    lengthSq(): number;
    /**
     * Sets the vector axes to zero (0,0)
     *
     * @example
     * const vec = new Vector(10, 10);
     *
     * vec.zero();
     * assert.equal(vec1.x, 0)
     * assert.equal(vec1.y, 0)
     *
     * @return `this` for chaining capabilities
     * @category Magnitude
     */
    zero(): this;
    /**
     * Returns true if vector is (0, 0)
     *
     * @example
     * const vec = new Vector(100, 50);
     * assert.false(vec.isZero())
     *
     * vec.zero();
     * assert.true(vec.isZero())
     *
     * @return true if the vector magnitude is 0, false otherwise
     * @category Comparison
     */
    isZero(): boolean;
    /**
     * Returns true if this vector axes values are the same as another
     *
     * @example
     * const vec1 = new Vector(100, 50);
     *
     * const vec2 = new Vector(100, 50);
     * assert.true(vec1.isEqualTo(vec2);
     *
     * const vec3 = new Vector(0, 0);
     * assert.false(vec1.isEqualTo(vec3);
     *
     * @param {Vector} vec The second vector
     * @return true if the vector magnitude is 0, false otherwise
     * @category Comparison
     */
    isEqualTo(vec: Vector): boolean;
    /**
     * Returns a string representation of the vector
     *
     * @example
     * const vec = new Vector(10, 20);
     * const s = vec.toString();
     * assert.equal(s, "x:10, y:20")
     *
     * @return A string representing the vector's axes
     */
    toString(): string;
    /**
     * Returns an array representation of the vector
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.toArray();
     * // [10, 20]
     *
     * @return An array representation of the vector
     */
    toArray(): number[];
    /**
     * Returns an object representation of the vector
     *
     * @example
     * const vec = new Vector(10, 20);
     *
     * vec.toObject();
     * // { x: 10, y: 20 }
     *
     * @return An object representation of the vector
     */
    toObject(): VectorLike;
}
/**
 * An object returned by {@link Vector.toObject}
 *
 * @property x The value of the X axis
 * @property y The value of the Y axis
 */
export interface VectorLike {
    x: number;
    y: number;
}
/**
 * Creates a new instance from an array
 *
 * @example
 * const vec = Vector.fromArray([42, 21]);
 *
 * vec.toString();
 * // 'x:42, y:21'
 *
 * @param {Array} arr Array with the x and y values at index 0 and 1 respectively
 * @return A new Vector instance
 */
export declare const fromArray: (arr: number[]) => Vector;
/**
 * Creates a new instance from an object ressembling a vector
 * (Object can have a `x: number` and/or a `y: number` property)
 *
 * @example
 * const vec1 = Vector.fromObject({ x: 42, y: 21 });
 * const vec2 = new Vector(42, 21);
 *
 * assert.true(vec1.isEqualTo(vec2))
 *
 * @param {Object} obj Object with properties x and/or y
 * @return A new Vector instance
 */
export declare const fromObject: (obj: {
    x?: number;
    y?: number;
}) => Vector;
