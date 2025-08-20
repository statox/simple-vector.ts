/**
 * MIT License
 *
 * Copyright (c) 2025 Adrien Fabre (statox)
 * Copyright (c) 2011 Max Kueng, George Crabtree
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/**
 * Victor - A JavaScript 2D vector class with methods for common vector operations
 *
 * Taken from https://github.com/maxkueng/victor
 *
 * My plan is to temporarily use this package to port victor to typescript and when
 * it's ready redistribute the package properly. Depending how it goes, that might
 * never happen.
 *
 * @module Victor
 */
/**
 * An exception thrown by some methods when a division by zero is attempted.
 */
export declare class DivisionByZeroError extends Error {
    constructor();
}
/**
 * A simple 2D vector class
 * @property {number} x axis value
 * @property {number} y axis value
 */
export declare class Victor {
    x: number;
    y: number;
    /**
     * A simple 2D vector class
     *
     * @example
     * const vec = new Victor(100, 50);
     *
     * @param {Number} x Value of the x axis
     * @param {Number} y Value of the y axis
     */
    constructor(x?: number, y?: number);
    /**
     * Adds the X axis of another vector to this one
     *
     * @category Addition
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 30);
     *
     * vec1.addX(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     *
     * @param {Victor} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     */
    addX(vec: Victor): this;
    /**
     * Adds the Y axis of another vector to this one
     *
     * @category Addition
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 30);
     *
     * vec1.addY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 40)
     *
     * @param {Victor} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     */
    addY(vec: Victor): this;
    /**
     * Adds another vector to this one
     *
     * @category Addition
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 30);
     *
     * vec1.add(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 40)
     * @param {Victor} vec The other vector you want to add to this one
     * @return `this` for chaining capabilities
     */
    add(vec: Victor): this;
    /**
     * Adds the given scalar to both vector axis
     *
     * @category Addition
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.addScalar(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 22)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     */
    addScalar(scalar: number): this;
    /**
     * Adds the given scalar to the X axis
     *
     * @category Addition
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.addScalarX(2);
     * assert.equal(vec.x, 12)
     * assert.equal(vec.y, 20)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     */
    addScalarX(scalar: number): this;
    /**
     * Adds the given scalar to the Y axis
     *
     * @category Addition
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.addScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 22)
     *
     * @param {Number} scalar The scalar to add
     * @return `this` for chaining capabilities
     */
    addScalarY(scalar: number): this;
    /**
     * Subtracts the X axis of another vector from this one
     *
     * @category Subtraction
     * @example
     * const vec1 = new Victor(30, 30);
     * const vec2 = new Victor(10, 20);
     *
     * vec1.subtractX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 30)
     *
     * @param {Victor} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     */
    subtractX(vec: Victor): this;
    /**
     * Subtracts the Y axis of another vector from this one
     *
     * @category Subtraction
     * @example
     * const vec1 = new Victor(30, 30);
     * const vec2 = new Victor(10, 20);
     *
     * vec1.subtractY(vec2);
     * assert.equal(vec1.x, 30)
     * assert.equal(vec1.y, 10)
     *
     * @param {Victor} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     */
    subtractY(vec: Victor): this;
    /**
     * Subtracts another vector from this one
     *
     * @category Subtraction
     * @example
     * const vec1 = new Victor(30, 30);
     * const vec2 = new Victor(10, 20);
     *
     * vec1.subtract(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     * @param {Victor} vec The other vector you want to subtract from this one
     * @return `this` for chaining capabilities
     */
    subtract(vec: Victor): this;
    /**
     * Subtracts the given scalar from both axis
     *
     * @category Subtraction
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.subtractScalar(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 18)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     */
    subtractScalar(scalar: number): this;
    /**
     * Subtracts the given scalar from the X axis
     *
     * @category Subtraction
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.subtractScalarX(2);
     * assert.equal(vec.x, 8)
     * assert.equal(vec.y, 20)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     */
    subtractScalarX(scalar: number): this;
    /**
     * Subtracts the given scalar from the Y axis
     *
     * @category Subtraction
     * @example
     * const vec = new Victor(10, 20);
     *
     * vec.subtractScalarY(2);
     * assert.equal(vec.x, 10)
     * assert.equal(vec.y, 18)
     *
     * @param {Number} scalar The scalar to subtract
     * @return `this` for chaining capabilities
     */
    subtractScalarY(scalar: number): this;
    /**
     * Divides the X axis of this vector by the X axis of another one
     *
     * @category Division
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(2, 0);
     *
     * vec1.divideX(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     *
     * @param {Victor} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     */
    divideX(vec: Victor): this;
    /**
     * Divides the Y axis of this vector by the Y axis of another one
     *
     * @category Division
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(0, 2);
     *
     * vec1.divideY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 25)
     *
     * @param {Victor} vec The other vector you want divide by
     * @return `this` for chaining capabilities
     */
    divideY(vec: Victor): this;
    /**
     * Divides the both axis of this vector by those of another one
     *
     * @category Division
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(2, 2);
     *
     * vec1.divide(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 25)
     *
     * @param {Victor} vec The vector to divide by
     * @return `this` for chaining capabilities
     */
    divide(vec: Victor): this;
    /**
     * Divides both vector axis by the given scalar
     *
     * @category Division
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.divideScalar(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 25)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     */
    divideScalar(scalar: number): this;
    /**
     * Divides the X axis by the given scalar
     *
     * @category Division
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.divideScalarX(2);
     * assert.equal(vec.x, 50)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     */
    divideScalarX(scalar: number): this;
    /**
     * Divides the Y axis by the given scalar
     *
     * @category Division
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.divideScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 25)
     *
     * @param {Number} scalar The scalar to divide by
     * @return `this` for chaining capabilities
     */
    divideScalarY(scalar: number): this;
    /**
     * Multiplies the X axis of this vector by the X axis of another one
     *
     * @category Multiplication
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(2, 0);
     *
     * vec1.multiplyX(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 50)
     *
     * @param {Victor} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     */
    multiplyX(vec: Victor): this;
    /**
     * Multiplies the Y axis of this vector by the Y axis of another one
     *
     * @category Multiplication
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(0, 2);
     *
     * vec1.multiplyY(vec2);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 100)
     *
     * @param {Victor} vec The other vector you want multiply by
     * @return `this` for chaining capabilities
     */
    multiplyY(vec: Victor): this;
    /**
     * Multiplies both axis of this vector by those of another one
     *
     * @category Multiplication
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(2, 2);
     *
     * vec1.multiply(vec2);
     * assert.equal(vec1.x, 200)
     * assert.equal(vec1.y, 100)
     *
     * @param {Victor} vec The vector to multiply by
     * @return `this` for chaining capabilities
     */
    multiply(vec: Victor): this;
    /**
     * Multiplies both vector axis by the given scalar
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.multiplyScalar(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 100)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     */
    multiplyScalar(scalar: number): this;
    /**
     * Multiplies the X axis by the given scalar
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.multiplyScalarX(2);
     * assert.equal(vec.x, 200)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     */
    multiplyScalarX(scalar: number): this;
    /**
     * Multiplies the Y axis by the given scalar
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.multiplyScalarY(2);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 100)
     *
     * @param {Number} scalar The scalar to multiply by
     * @return `this` for chaining capabilities
     */
    multiplyScalarY(scalar: number): this;
    /**
     * Inverts the X axis
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.invertX();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, 50)
     *
     * @return `this` for chaining capabilities
     */
    invertX(): this;
    /**
     * Inverts the Y axis
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.invertY();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, -50)
     *
     * @return `this` for chaining capabilities
     */
    invertY(): this;
    /**
     * Inverts both axis
     *
     * @category Multiplication
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.invert();
     * assert.equal(vec.x, -100)
     * assert.equal(vec.y, -50)
     *
     * @return `this` for chaining capabilities
     */
    invert(): this;
    /**
     * Normalize the vector. (Keep direction but reduce length to 1)
     *
     * @category Norm
     * @example
     * const vec = new Victor(10, 0);
     *
     * vec.normalize();
     * assert.equal(vec.x, 1)
     * assert.equal(vec.y, 0)
     *
     * @return `this` for chaining capabilities
     */
    normalize(): this;
    /**
     * Alias for {@link Victor.normalize}
     *
     * @category Norm
     * @return `this` for chaining capabilities
     */
    norm: () => this;
    /**
     * If the absolute vector axis is greater than `max`, multiplies the axis
     * by `factor`
     *
     * @category Norm
     * @example
     * const vec = new Victor(100, 50);
     *
     * vec.limit(80, 0.9);
     * assert.equal(vec.x, 90)
     * assert.equal(vec.y, 50)
     *
     * @param {Number} max The maximum value for both x and y axis
     * @param {Number} factor Factor by which the axis are to be multiplied with
     * @return `this` for chaining capabilities
     */
    limit(max: number, factor: number): this;
    /**
     * Randomizes the X axis with a value between the X axes of 2 others vectors
     *
     * @category Randomization
     * @example
     * const vec = new Victor(100, 50);
     *
     * const topLeft = new Victor(50, 60)
     * const bottomRight = new Victor(70, 80)
     *
     * vec.randomizeX(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     *
     * @param {Victor} topLeft First bounding vector
     * @param {Victor} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     */
    randomizeX(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomizes the Y axis with a value between the Y axes of 2 others vectors
     *
     * @category Randomization
     * @example
     * const vec = new Victor(100, 50);
     *
     * const topLeft = new Victor(50, 60)
     * const bottomRight = new Victor(70, 80)
     *
     * vec.randomizeY(topLeft, bottomRight);
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 73.933542831865296)
     *
     * @param {Victor} topLeft First bounding vector
     * @param {Victor} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     */
    randomizeY(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomizes both vector axis with a value between 2 vectors
     *
     * @category Randomization
     * @example
     * const vec = new Victor(100, 50);
     *
     * const topLeft = new Victor(50, 60)
     * const bottomRight = new Victor(70, 80)
     *
     * vec.randomize(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 73.933542831865296)
     *
     * @param {Victor} topLeft First bounding vector
     * @param {Victor} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     */
    randomize(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Randomly choses one axis and randomizes it with a value between the
     * corresponding axes of 2 other vectors
     *
     * @category Randomization
     * @example
     * const vec = new Victor(100, 50);
     *
     * const topLeft = new Victor(50, 60)
     * const bottomRight = new Victor(70, 80)
     *
     * vec.randomizeAny(topLeft, bottomRight);
     * assert.equal(vec.x, 67.17186656753522)
     * assert.equal(vec.y, 50)
     *
     * @param {Victor} topLeft First bounding vector
     * @param {Victor} bottomRight Second bouding vector
     * @return `this` for chaining capabilities
     */
    randomizeAny(topLeft: Victor, bottomRight: Victor): this;
    /**
     * Rounds both axis to an integer value using Math.round()
     *
     * @category Precision
     * @example
     * const vec = new Victor(100.2, 50.9);
     *
     * vec.unfloat();
     * assert.equal(vec.x, 100)
     * assert.equal(vec.y, 51)
     *
     * @return `this` for chaining capabilities
     */
    unfloat(): this;
    /**
     * Fix both axis to a certain precision using Number.toFixed()
     *
     * @category Precision
     * @example
     * const vec = new Victor(100.2345, 50.9876);
     *
     * vec.toFixed(2);
     * assert.equal(vec.x, 100.23)
     * assert.equal(vec.y, 50.99)
     *
     * @param {Number} precision (default: 8)
     * @return `this` for chaining capabilities
     */
    toFixed(precision?: number): this;
    /**
     * Performs a linear blend / interpolation of the X axis towards another vector
     *
     * @category Mixing
     * @example
     * const vec1 = new Victor(100, 100);
     * const vec2 = new Victor(200, 200);
     *
     * vec1.mixX(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 100)
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     */
    mixX(vec: Victor, amount?: number): this;
    /**
     * Performs a linear blend / interpolation of the Y axis towards another vector
     *
     * @category Mixing
     * @example
     * const vec1 = new Victor(100, 100);
     * const vec2 = new Victor(200, 200);
     *
     * vec1.mixY(vec2, 0.5);
     * assert.equal(vec1.x, 100)
     * assert.equal(vec1.y, 150)
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     */
    mixY(vec: Victor, amount?: number): this;
    /**
     * Performs a linear blend / interpolation towards another vector
     *
     * @category Mixing
     * @example
     * const vec1 = new Victor(100, 100);
     * const vec2 = new Victor(200, 200);
     *
     * vec1.mix(vec2, 0.5);
     * assert.equal(vec1.x, 150)
     * assert.equal(vec1.y, 150)
     *
     * @param {Victor} vec The other vector
     * @param {Number} amount The blend amount (optional, default: 0.5)
     * @return `this` for chaining capabilities
     */
    mix(vec: Victor, amount?: number): this;
    /**
     * Creates a clone of this vector
     *
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = vec1.clone();
     *
     * assert.equal(vec2.x, vec1.x)
     * assert.equal(vec2.y, vec1.y)
     *
     * @return The instance of the newly created vector
     */
    clone(): Victor;
    /**
     * Copies the X axis of another vector to this one
     *
     * @category Copy
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 20);
     *
     * vec1.copyX(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 10)
     *
     * @param {Victor} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     */
    copyX(vec: Victor): this;
    /**
     * Copies the Y axis of another vector to this one
     *
     * @category Copy
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 20);
     *
     * vec1.copyY(vec2);
     * assert.equal(vec1.x, 10)
     * assert.equal(vec1.y, 20)
     *
     * @param {Victor} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     */
    copyY(vec: Victor): this;
    /**
     * Copies vector axes to this one
     *
     * @category Copy
     * @example
     * const vec1 = new Victor(10, 10);
     * const vec2 = new Victor(20, 20);
     *
     * vec1.copy(vec2);
     * assert.equal(vec1.x, 20)
     * assert.equal(vec1.y, 20)
     *
     * @param {Victor} vec The other vector you want to copy to this one
     * @return `this` for chaining capabilities
     */
    copy(vec: Victor): this;
    /**
     * Sets the vector axes to zero (0,0)
     *
     * @category Norm
     * @example
     * const vec = new Victor(10, 10);
     *
     * vec.zero();
     * assert.equal(vec1.x, 0)
     * assert.equal(vec1.y, 0)
     *
     * @return `this` for chaining capabilities
     */
    zero(): this;
    /**
     * Calculates the dot product of this vector and another
     *
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const dp = vec1.dot(vec2);
     * assert.equal(dp, 23000)
     *
     * @param {Victor} vec The second vector
     * @return The dot product of this vector and the other one
     */
    dot(vec: Victor): number;
    /**
     * Calculates the cross product of this vector and another.
     *
     * Note that the resulting scalar value is due to considering
     * the z axes as 0 https://stackoverflow.com/a/243977
     *
     * @example
     * const vec1 = new Victor(100, 100);
     * const vec2 = new Victor(500, 200);
     *
     * const cp = vec1.cross(vec2);
     * assert.equal(dp, -30000)
     *
     * @param {Victor} vec The second vector
     * @return The cross product of this vector and the other one
     */
    cross(vec: Victor): number;
    /**
     * Projects a vector onto another vector, setting itself to the result.
     *
     * @example
     * const vec1 = new Victor(100, 0);
     * const vec2 = new Victor(100, 100);
     *
     * vec1.projectOnto(vec2);
     * assert.equal(vec1.x, 50)
     * assert.equal(vec1.y, 50)
     *
     * @param {Victor} vec The second vector
     * @return `this` for chaining capabilities
     */
    projectOnto(vec: Victor): this;
    /**
     * Gets the angle θ in the plane (in radians, -π < θ < π ) between the positive
     * x-axis and the ray from (0, 0) to the point (x, y).
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as verticalAngle()
     *
     * @category Angle
     * @example
     * assert.equal(0,          (new Victor(10, 0)).horizontalAngle());
     * assert.equal(Math.PI/2,  (new Victor(0, 10)).horizontalAngle());
     * assert.equal(Math.PI,    (new Victor(-10, 0)).horizontalAngle());
     * assert.equal(-Math.PI/2, (new Victor(0, -10)).horizontalAngle());
     *
     * @return The angle in radians
     */
    horizontalAngle(): number;
    /**
     * Gets the angle θ in the plane (in degrees, -180 < θ < 180 ) between the positive
     * x-axis and the ray from (0, 0) to the point (x, y)
     *
     * This is also the phase of the complex number x + iy.
     *
     * Caution: The direction is not the same as verticalAngleDeg()
     *
     * @category Angle
     * @example
     * assert.equal(0,    (new Victor(10, 0)).horizontalAngleDeg());
     * assert.equal(90,   (new Victor(0, 10)).horizontalAngleDeg());
     * assert.equal(180,  (new Victor(-10, 0)).horizontalAngleDeg());
     * assert.equal(-90,  (new Victor(0, -10)).horizontalAngleDeg());
     *
     * @return The angle in degrees
     */
    horizontalAngleDeg(): number;
    /**
     * Gets the angle θ in the plane (in rads -π < θ < π) between the positive
     * y-axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngle()
     *
     * @category Angle
     * @example
     * assert.equal(0,          (new Victor(0, 10)).verticalAngle());
     * assert.equal(-Math.PI/2, (new Victor(-10, 0)).verticalAngle());
     * assert.equal(Math.PI/,   (new Victor(0, 10)).verticalAngle());
     * assert.equal(Math.PI/2,  (new Victor(10, 0)).verticalAngle());
     *
     * @return The angle in degrees
     */
    verticalAngle(): number;
    /**
     * Gets the angle θ in the plane (in degrees -180 < θ < 180) between the positive
     * y-axis and the ray from (0, 0) to the point (x, y)
     *
     * Caution: The direction is not the same as horizontalAngleDeg()
     *
     * @category Angle
     * @example
     * assert.equal(0,   (new Victor(0, 10)).verticalAngleDeg());
     * assert.equal(-90, (new Victor(-10, 0)).verticalAngleDeg());
     * assert.equal(180, (new Victor(0, 10)).verticalAngleDeg());
     * assert.equal(90,  (new Victor(10, 0)).verticalAngleDeg());
     *
     * @return The angle in degrees
     */
    verticalAngleDeg(): number;
    /**
     * Alias for {@link Victor.horizontalAngle horizontalAngle}
     *
     * Kept for compatibility with Victor.js. Might change later
     *
     * @category Angle
     */
    angle: () => number;
    /**
     * Alias for {@link Victor.horizontalAngle horizontalAngle()}
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
     * @category Angle
     * @example
     * const vec1 = new Victor(1, 0);
     *
     * a = vec1.angleWith(new Victor(1, 0));
     * assert.equal(a, 0)
     * a = vec1.angleWith(new Victor(1, 1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.angleWith(new Victor(1, -1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.angleWith(new Victor(-1, 0));
     * assert.equal(a, Math.PI)
     *
     * @param {Victor} vec The second vector
     * @return The angle between both vectors in radians
     */
    angleWith(vec: Victor): number;
    /**
     * Gets the angle in degrees (0 < θ <= 180 between this vector and another one
     *
     * If both vectors are null the method returns NaN
     *
     * @category Angle
     * @example
     * const vec1 = new Victor(1, 0);
     *
     * a = vec1.angleWith(new Victor(1, 0));
     * assert.equal(a, 0)
     * a = vec1.angleWith(new Victor(1, 1));
     * assert.equal(a, 45)
     * a = vec1.angleWith(new Victor(1, -1));
     * assert.equal(a, 45)
     * a = vec1.angleWith(new Victor(-1, 0));
     * assert.equal(a, 180)
     *
     * @param {Victor} vec The second vector
     * @return The angle between both vectors in degrees
     */
    angleDegWith(vec: Victor): number;
    /**
     * Gets the angle in radian ( -π < θ <= π) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleWith()
     *
     * @category Angle
     * @example
     * const vec1 = new Victor(1, 0);
     *
     * a = vec1.orientedAngleWith(new Victor(1, 0));
     * assert.equal(a, 0)
     * a = vec1.orientedAngleWith(new Victor(1, 1));
     * assert.equal(a, Math.PI / 4)
     * a = vec1.orientedAngleWith(new Victor(1, -1));
     * assert.equal(a, -Math.PI / 4)
     * a = vec1.orientedAngleWith(new Victor(-1, 0));
     * assert.equal(a, Math.PI)
     *
     * @param {Victor} vec The second vector
     * @return The angle between both vectors in radians
     */
    orientedAngleWith(vec: Victor): number;
    /**
     * Gets the angle in degrees ( -180 < θ <= 180) between this vector and another one
     * measured in a counterclockwise direction from this to the other one.
     *
     * This method is roughly 20% slower than this.angleDegWith()
     *
     * @category Angle
     * @example
     * const vec1 = new Victor(1, 0);
     *
     * a = vec1.orientedAngleWith(new Victor(1, 0));
     * assert.equal(a, 0)
     * a = vec1.orientedAngleWith(new Victor(1, 1));
     * assert.equal(a, 45)
     * a = vec1.orientedAngleWith(new Victor(1, -1));
     * assert.equal(a, -45)
     * a = vec1.orientedAngleWith(new Victor(-1, 0));
     * assert.equal(a, 180)
     *
     * @param {Victor} vec The second vector
     * @return The angle between both vectors in radians
     */
    orientedAngleDegWith(vec: Victor): number;
    /**
     * Rotate the vector counter-clockwise by an angle in radians
     *
     * @category Angle
     * @example
     * const vec = new Victor(10, 0);
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
     */
    rotate(angle: number): this;
    /**
     * Rotate the vector counter-clockwise by an angle in degrees
     *
     * @category Angle
     * @example
     * const vec = new Victor(10, 0);
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
     */
    rotateDeg(angle: number): this;
    /**
     * Rotate the vector to an angle in radians using the positif
     * x-axis as origin, move counter-clockwise
     *
     * @category Angle
     * @example
     * const vec = new Victor(10, 0);
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
     */
    rotateTo(rotation: number): this;
    /**
     * Rotate the vector to an angle in degrees using the positif
     * x-axis as origin, move counter-clockwise
     *
     * @category Angle
     * @example
     * const vec = new Victor(10, 0);
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
     */
    rotateToDeg(rotation: number): this;
    /**
     * Calculates the distance between the X axis of this vector the X axis of another
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distanceX(vec2);
     * assert.equal(d, -100)
     *
     * @param {Victor} vec The second vector
     * @return The distance between the X axes
     */
    distanceX(vec: Victor): number;
    /**
     * Same as `distanceX()` but always returns an absolute number
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distanceX(vec2);
     * assert.equal(d, 100)
     *
     * @param {Victor} vec The second vector
     * @return The absolute distance between the X axes
     */
    absDistanceX(vec: Victor): number;
    /**
     * Calculates the distance between the X axis of this vector the X axis of another
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distanceY(vec2);
     * assert.equal(d, -10)
     *
     * @param {Victor} vec The second vector
     * @return The distance between the Y axes
     */
    distanceY(vec: Victor): number;
    /**
     * Same as `distanceY()` but always returns an absolute number
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distanceY(vec2);
     * assert.equal(d, 10)
     *
     * @param {Victor} vec The second vector
     * @return The absolute distance between the Y axes
     */
    absDistanceY(vec: Victor): number;
    /**
     * Calculates the euclidean distance between this vector and another
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distance(vec2);
     * assert.equal(d, 100.4987562112089)
     *
     * @param {Victor} vec The second vector
     * @return The euclidian distance between the vectors
     */
    distance(vec: Victor): number;
    /**
     * Calculates the squared euclidean distance between this vector and another
     *
     * @category Distance
     * @example
     * const vec1 = new Victor(100, 50);
     * const vec2 = new Victor(200, 60);
     *
     * const d = vec1.distanceSq(vec2);
     * assert.equal(d, 10100)
     *
     * @param {Victor} vec The second vector
     * @return The squared euclidian distance between the vectors
     */
    distanceSq(vec: Victor): number;
    /**
     * Calculates the length or magnitude of the vector
     *
     * @category Norm
     * @example
     * const vec = new Victor(100, 50);
     *
     * const m = vec.length()
     * assert.equal(m, 111.80339887498948)
     *
     * @return The magnitude of the vector
     */
    length(): number;
    /**
     * Alias for .length()
     *
     * @category Norm
     * @return The magnitude of the vector
     */
    magnitude: () => number;
    /**
     * Calculates the squared length or squared magnitude of the vector
     *
     * @category Norm
     * @example
     * const vec = new Victor(100, 50);
     *
     * const m = vec.lengthSq()
     * assert.equal(m, 12500)
     *
     * @return The squared magnitude of the vector
     */
    lengthSq(): number;
    /**
     * Returns true if vector is (0, 0)
     *
     * @category Norm
     * @example
     * const vec = new Victor(100, 50);
     * assert.false(vec.isZero())
     *
     * vec.zero();
     * assert.true(vec.isZero())
     *
     * @return true if the vector magnitude is 0, false otherwise
     */
    isZero(): boolean;
    /**
     * Returns true if this vector axes values are the same as another
     *
     * @example
     * const vec1 = new Victor(100, 50);
     *
     * const vec2 = new Victor(100, 50);
     * assert.true(vec1.isEqualTo(vec2);
     *
     * const vec3 = new Victor(0, 0);
     * assert.false(vec1.isEqualTo(vec3);
     *
     * @param {Victor} vec The second vector
     * @return true if the vector magnitude is 0, false otherwise
     */
    isEqualTo(vec: Victor): boolean;
    /**
     * Returns a string representation of the vector
     *
     * @example
     * const vec = new Victor(10, 20);
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
     * const vec = new Victor(10, 20);
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
     * const vec = new Victor(10, 20);
     *
     * vec.toObject();
     * // { x: 10, y: 20 }
     *
     * @return An object representation of the vector
     */
    toObject(): VectorLike;
}
/**
 * An object returned by {@link Victor.toObject}
 *
 * @property x The value of the x axis
 * @property y The value of the y axis
 */
export interface VectorLike {
    x: number;
    y: number;
}
/**
 * Creates a new instance from an array
 *
 * @example
 * const vec = Victor.fromArray([42, 21]);
 *
 * vec.toString();
 * // 'x:42, y:21'
 *
 * @param {Array} arr Array with the x and y values at index 0 and 1 respectively
 * @return A new Victor instance
 */
export declare const fromArray: (arr: number[]) => Victor;
/**
 * Creates a new instance from an object ressembling a vector
 * (Object can have a `x: number` and/or a `y: number` property)
 *
 * @example
 * const vec1 = Victor.fromObject({ x: 42, y: 21 });
 * const vec2 = new Victor(42, 21);
 *
 * assert.true(vec1.isEqualTo(vec2))
 *
 * @param {Object} obj Object with properties x and/or y
 * @return A new Victor instance
 */
export declare const fromObject: (obj: {
    x?: number;
    y?: number;
}) => Victor;
