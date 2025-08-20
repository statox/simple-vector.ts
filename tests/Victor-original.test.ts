/**
 * Tests in this file are a port of the tests in the original Victor library found here:
 * https://github.com/maxkueng/victor/blob/8383f436d63f6741e5529b09a39e7fb2b7f1dbfb/test/victor.js
 *
 * They were slightly modified to use the tooling of this repo but (safe for unexpected mistake)
 * should be functionnaly equivalent. I ported them to make sure I wasn't breaking the features
 * I kept from the original library.
 *
 */
import { describe, it, before } from 'node:test';
import assert from 'node:assert';

import { DivisionByZeroError, Vector, fromArray, fromObject } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

describe('static methods', function () {
    describe('new Vector', function () {
        it('should be an instance of Vector', function () {
            const v = new Vector(0, 0);
            assert.ok(v instanceof Vector);
        });

        it('should have axis from arguments', function () {
            const x = 10;
            const y = 100;
            const v = new Vector(x, y);
            assert.strictEqual(v.x, x);
            assert.strictEqual(v.y, y);
        });
    });

    describe('#fromArray()', function () {
        let arr: number[];
        let vec: Vector;

        before(function () {
            arr = [100, 200];
            vec = fromArray(arr);
        });

        it('should return an instance of Vector', function () {
            assert.ok(vec instanceof Vector);
        });

        it('should have axis from array', function () {
            assert.strictEqual(vec.x, arr[0]);
            assert.strictEqual(vec.y, arr[1]);
        });
    });

    describe('#fromObject()', function () {
        let obj: { x?: number; y?: number };
        let vec: Vector;

        before(function () {
            obj = { x: 100, y: 200 };
            vec = fromObject(obj);
        });

        it('should return an instance of Vector', function () {
            assert.ok(vec instanceof Vector);
        });

        it('should have axis from object', function () {
            assert.strictEqual(vec.x, obj.x);
            assert.strictEqual(vec.y, obj.y);
        });
    });
});

describe('chainable instance methods', function () {
    describe('#addX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.addX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add only the X axis of a vector', function () {
            assert.strictEqual(vec1.x, 50);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('#addY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.addY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add only the Y axis of a vector', function () {
            assert.strictEqual(vec1.x, 20);
            assert.strictEqual(vec1.y, 60);
        });
    });

    describe('#add()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(20, 40);
            vec2 = new Vector(30, 20);
            ret = vec1.add(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should add a vector', function () {
            assert.strictEqual(vec1.x, 50);
            assert.strictEqual(vec1.y, 60);
        });
    });

    describe('#subtractX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtractX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract only the X axis of a vector', function () {
            assert.strictEqual(vec1.x, 10);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('#subtractY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtractY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract only the Y axis of a vector', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, -20);
        });
    });

    describe('#subtract()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(20, 40);
            ret = vec1.subtract(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should subtract a vector', function () {
            assert.strictEqual(vec1.x, 10);
            assert.strictEqual(vec1.y, -20);
        });
    });

    describe('#divideX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divideX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide the X axis by 2', function () {
            assert.strictEqual(vec1.x, 15);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('#divideY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divideY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide the Y axis by 2', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, 10);
        });
    });

    describe('#divide()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.divide(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should divide both vector axis by 2', function () {
            assert.strictEqual(vec1.x, 15);
            assert.strictEqual(vec1.y, 10);
        });
    });

    describe('#divideScalar()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide both vector axis by 2', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 10);
        });

        it('should throw when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalar(scal), DivisionByZeroError);
        });
    });

    describe('#divideScalarX()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide the X axis by 2', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 20);
        });

        it('should return a zero X when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalarX(scal), DivisionByZeroError);
        });
    });

    describe('#divideScalarY()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.divideScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should divide the Y axis by 2', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 10);
        });

        it('should return a zero Y when dividing by 0', function () {
            vec = new Vector(30, 20);
            scal = 0;
            assert.throws(() => vec.divideScalarY(scal), DivisionByZeroError);
        });
    });

    describe('#multiplyX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiplyX(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply the X axis by 2', function () {
            assert.strictEqual(vec1.x, 60);
            assert.strictEqual(vec1.y, 20);
        });
    });

    describe('#multiplyY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiplyY(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply the Y axis by 2', function () {
            assert.strictEqual(vec1.x, 30);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('#multiply()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(30, 20);
            vec2 = new Vector(2, 2);
            ret = vec1.multiply(vec2);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should multiply both vector axis by 2', function () {
            assert.strictEqual(vec1.x, 60);
            assert.strictEqual(vec1.y, 40);
        });
    });

    describe('#multiplyScalar()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should multiply both vector axis by 2', function () {
            assert.strictEqual(vec.x, 60);
            assert.strictEqual(vec.y, 40);
        });
    });

    describe('#multiplyScalarX()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalarX(scal);
        });

        it('should multiply the X axis by 2', function () {
            assert.strictEqual(vec.x, 60);
            assert.strictEqual(vec.y, 20);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });
    });

    describe('#multiplyScalarY()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            scal = 2;
            ret = vec.multiplyScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should multiply the Y axis by 2', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 40);
        });
    });

    describe('#addScalar()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(1, 2);
            scal = 2;
            ret = vec.addScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to both vector axis', function () {
            assert.strictEqual(vec.x, 3);
            assert.strictEqual(vec.y, 4);
        });
    });

    describe('#addScalarX()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(1, 2);
            scal = 2;
            ret = vec.addScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the x axis', function () {
            assert.strictEqual(vec.x, 3);
            assert.strictEqual(vec.y, 2);
        });
    });

    describe('#addScalarY()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.addScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the y axis', function () {
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 22);
        });
    });

    describe('#subtractScalar()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalar(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should subtract 2 from both vector axis', function () {
            assert.strictEqual(vec.x, 8);
            assert.strictEqual(vec.y, 18);
        });
    });

    describe('#subtractScalarX()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalarX(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should subtract 2 from the x axis', function () {
            assert.strictEqual(vec.x, 8);
            assert.strictEqual(vec.y, 20);
        });
    });

    describe('#subtractScalarY()', function () {
        let vec: Vector;
        let scal: number;
        let ret: Vector;

        before(function () {
            vec = new Vector(10, 20);
            scal = 2;
            ret = vec.subtractScalarY(scal);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should add 2 to the y axis', function () {
            assert.strictEqual(vec.x, 10);
            assert.strictEqual(vec.y, 18);
        });
    });

    describe('#norm()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(13.37, 42.42);
            ret = vec.norm();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });
    });

    describe('#limit()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(30, 20);
            ret = vec.limit(20, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should limit both vector axis by limit', function () {
            assert.strictEqual(vec.x, 15);
            assert.strictEqual(vec.y, 20);
        });
    });

    describe('#randomize()', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);
        let vec: Vector;

        it('should be chainable', function () {
            vec = new Vector(30, 20);
            const ret = vec.randomize(topLeft, bottomRight);

            assert.ok(ret === vec);
        });

        it('should randomize both vector axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                vec.randomize(topLeft, bottomRight);
                assert.ok(vec.x >= minX && vec.x <= maxX);
                assert.ok(vec.y >= minY && vec.y <= maxY);
            }
        });
    });

    describe('#randomizeX()', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeX(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only the X axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const y = vec.y;
            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);

            for (let i = 0; i < count; i++) {
                vec.randomizeX(topLeft, bottomRight);

                assert.ok(vec.x >= minX && vec.x <= maxX);
                assert.strictEqual(vec.y, y);
            }
        });
    });

    describe('#randomizeY()', function () {
        const topLeft = new Vector(-50, 100);
        const bottomRight = new Vector(300, -500);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeY(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only the X axis and respect the boundaries', function () {
            const count = 100;
            const vec = new Vector(30, 20);

            const x = vec.x;
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                vec.randomizeY(topLeft, bottomRight);

                assert.ok(vec.y >= minY && vec.y <= maxY);
                assert.strictEqual(vec.x, x);
            }
        });
    });

    describe('#randomizeAny()', function () {
        const topLeft = new Vector(100, 100);
        const bottomRight = new Vector(300, 300);

        it('should be chainable', function () {
            const vec = new Vector(30, 20);
            const ret = vec.randomizeAny(topLeft, bottomRight);
            assert.ok(ret === vec);
        });

        it('should randomize only one vector axis and respect the boundaries', function () {
            const count = 100;
            const originX = 50;
            const originY = 50;

            const minX = Math.min(topLeft.x, bottomRight.x);
            const maxX = Math.max(topLeft.x, bottomRight.x);
            const minY = Math.min(topLeft.y, bottomRight.y);
            const maxY = Math.max(topLeft.y, bottomRight.y);

            for (let i = 0; i < count; i++) {
                const vec = new Vector(originX, originY);
                vec.randomizeAny(topLeft, bottomRight);

                if (vec.x !== originX) {
                    assert.ok(vec.x >= minX && vec.x <= maxX);
                    assert.strictEqual(vec.y, originY);
                } else {
                    assert.ok(vec.y >= minY && vec.y <= maxY);
                    assert.strictEqual(vec.x, originX);
                }
            }
        });
    });

    describe('#unfloat()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(30.333, 20.666);
            ret = vec.unfloat();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should round both vector axis to integers', function () {
            assert.strictEqual(vec.x, 30);
            assert.strictEqual(vec.y, 21);
        });
    });

    describe('#mixX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mixX(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate the X axis half way', function () {
            assert.strictEqual(vec1.x, 150);
            assert.strictEqual(vec1.y, 100);
        });
    });

    describe('#mixY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mixY(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate the Y axis half way', function () {
            assert.strictEqual(vec1.x, 100);
            assert.strictEqual(vec1.y, 150);
        });
    });

    describe('#mix()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 200);
            ret = vec1.mix(vec2, 0.5);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec1);
        });

        it('should interpolate half way', function () {
            assert.strictEqual(vec1.x, 150);
            assert.strictEqual(vec1.y, 150);
        });
    });

    describe('#zero()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.zero();
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should interpolate half way', function () {
            assert.strictEqual(vec.x, 0);
            assert.strictEqual(vec.y, 0);
        });
    });

    describe('#horizontalAngle()', function () {
        let angleX: number;
        let angleY: number;
        let angleXPi: number;
        before(function () {
            angleX = new Vector(100, 0).horizontalAngle();
            angleY = new Vector(0, 100).horizontalAngle();
            angleXPi = new Vector(-100, 0).horizontalAngle();
        });

        it('should x directed vector to 0°', function () {
            assertCloseTo(Math.abs(angleX - 0), 0);
        });

        it('should y directed vector to 90°', function () {
            assertCloseTo(Math.abs(angleY - Math.PI / 2), 0);
        });

        it('should negative x directed vector to 180°', function () {
            assertCloseTo(Math.abs(angleXPi - Math.PI), 0);
        });
    });

    describe('#rotate()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.rotate((90 * Math.PI) / 180);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should rotate the vector by certain degrees', function () {
            assert.strictEqual(vec.x, -100);
            assert.strictEqual(vec.y, 100);
            assertCloseTo(Math.abs(vec.horizontalAngle() - (135 * Math.PI) / 180), 0);
        });
    });

    describe('#rotateDeg()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.rotateDeg(90);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should set the rotation angle in degrees', function () {
            assert.strictEqual(vec.x, -100);
            assert.strictEqual(vec.y, 100);
        });
    });

    describe('#rotateTo()', function () {
        let vecX: Vector;
        let vecY: Vector;
        let retX: Vector;
        let retY: Vector;

        before(function () {
            vecX = new Vector(100, 0);
            vecY = new Vector(0, 100);
            retX = vecX.rotateTo((120 * Math.PI) / 180);
            retY = vecY.rotateTo((120 * Math.PI) / 180);
        });

        it('should be chainable', function () {
            assert.ok(retX === vecX);
        });

        it('should rotate any Vector to a given angle', function () {
            assertCloseTo(vecX.angle(), (120 * Math.PI) / 180);
            assertCloseTo(vecY.angle(), (120 * Math.PI) / 180);
        });

        it('should keep the length', function () {
            assert.strictEqual(retX.length(), 100);
            assert.strictEqual(retY.length(), 100);
        });
    });

    describe('#rotateToDeg()', function () {
        let vec: Vector;
        let ret: Vector;

        before(function () {
            vec = new Vector(100, 0);
            ret = vec.rotateToDeg(120);
        });

        it('should be chainable', function () {
            assert.ok(ret === vec);
        });

        it('should rotate any Vector to a given angle', function () {
            assertCloseTo(Math.abs(vec.angleDeg() - 120), 0);
        });

        it('should keep the length', function () {
            assert.strictEqual(ret.length(), 100);
        });
    });

    describe('#projectOnto()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let vec3: Vector;
        let vec4: Vector;
        let selfRet: Vector;
        let perpRet: Vector;
        let paraRet: Vector;
        let middleRet: Vector;

        before(function () {
            vec1 = new Vector(100, 0);
            vec2 = new Vector(100, 100);
            vec3 = new Vector(0, 100);
            vec4 = new Vector(200, 0);
            selfRet = vec1.projectOnto(vec1);
            perpRet = vec1.clone().projectOnto(vec3);
            paraRet = vec1.clone().projectOnto(vec4);
            middleRet = vec1.clone().projectOnto(vec2);
        });

        it('should be chainable', function () {
            assert.ok(selfRet === vec1);
        });

        it('should project same vector onto itself without change', function () {
            assert.strictEqual(selfRet.x, 100);
            assert.strictEqual(selfRet.y, 0);
        });

        it('should project orthogonal vectors into a zero-length vector', function () {
            assert.strictEqual(perpRet.x, 0);
            assert.strictEqual(perpRet.y, 0);
        });

        it('shuld project parallel vectors into a vector of same direction and magnitude', function () {
            assert.strictEqual(paraRet.x, 100);
            assert.strictEqual(paraRet.y, 0);
        });

        it('should project non-orthogonal non-parallel vectors correctly', function () {
            assert.strictEqual(middleRet.x, 50);
            assert.strictEqual(middleRet.y, 50);
        });
    });
});

describe('regular instance methods', function () {
    describe('#clone()', function () {
        let vec1: Vector;
        let vec2: Vector;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = vec1.clone();
        });

        it('should return a clone of a vector', function () {
            assert.ok(vec2 instanceof Vector);
            assert.ok(vec2 !== vec1);
        });

        it('should have the same values as the original', function () {
            assert.strictEqual(vec1.x, vec2.x);
            assert.strictEqual(vec1.y, vec2.y);
        });
    });

    describe('#dot()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.dot(vec2);
        });

        it('should return the dot product of 2 vectors', function () {
            assert.strictEqual(ret, 2730);
        });
    });

    describe('#distanceX()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.distanceX(vec2);
        });

        it('should return the distance between the X axis of 2 vectors', function () {
            assert.strictEqual(ret, -2);
        });
    });

    describe('#distanceY()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(42, 21);
            vec2 = new Vector(44, 42);
            ret = vec1.distanceY(vec2);
        });

        it('should return the distance between the Y axis of 2 vectors', function () {
            assert.strictEqual(ret, -21);
        });
    });

    describe.skip('#distance()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let ret: number;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(200, 100);
            ret = vec1.distance(vec2);
        });

        it('should return the euclidean distance between 2 vectors', function () {
            assert.strictEqual(ret, -21);
        });
    });

    describe('#length()', function () {
        let vec: Vector;
        let ret: number;

        before(function () {
            vec = new Vector(100, 100);
            ret = vec.length();
        });

        it('should return the length of the vector', function () {
            assert.strictEqual(Math.round(ret), 141);
        });
    });

    describe('#isZero()', function () {
        let vec: Vector;

        before(function () {
            vec = new Vector(100, 100);
            vec.zero();
        });

        it('should return true if the vector is zero', function () {
            assert.ok(vec.isZero());
        });
    });

    describe('#isEqualTo()', function () {
        let vec1: Vector;
        let vec2: Vector;
        let vec3: Vector;

        before(function () {
            vec1 = new Vector(100, 100);
            vec2 = new Vector(100, 120);
            vec3 = new Vector(100, 120);
        });

        it('should return false if the vectors are not the same', function () {
            assert.strictEqual(vec1.isEqualTo(vec2), false);
        });
        it('should return true if the vectors are the same', function () {
            assert.strictEqual(vec2.isEqualTo(vec3), true);
        });
    });
});

describe('utility methods', function () {
    describe('#toString()', function () {
        let vec: Vector;
        let ret: string;

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toString();
        });

        it('should return a string representation of the vector', function () {
            assert.strictEqual(ret, 'x:100, y:200');
        });
    });

    describe('#toArray()', function () {
        let vec: Vector;
        let ret: number[];

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toArray();
        });

        it('should return an array representation of the vector', function () {
            assert.strictEqual(ret.length, 2);
            assert.strictEqual(ret[0], 100);
            assert.strictEqual(ret[1], 200);
        });
    });

    describe('#toObject()', function () {
        let vec: Vector;
        let ret: { x?: number; y?: number };

        before(function () {
            vec = new Vector(100, 200);
            ret = vec.toObject();
        });

        it('should return an object representation of the vector', function () {
            assert.strictEqual(ret.x, 100);
            assert.strictEqual(ret.y, 200);
        });
    });
});
