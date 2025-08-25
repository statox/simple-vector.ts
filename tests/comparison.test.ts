import { test, describe, it, before } from 'node:test';
import assert from 'node:assert';

import { Vector } from '../src/Vector.ts';

test('Comparison methods', () => {
    describe('.isZero', function () {
        let vec: Vector;

        before(function () {
            vec = new Vector(100, 100);
            vec.zero();
        });

        it('should return true if the vector is zero', function () {
            assert.ok(vec.isZero());
        });
    });

    describe('.isEqualTo', function () {
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

    describe('.isParallelTo', () => {
        it('Should have a tolerance for rounding errors', () => {
            const vec1 = new Vector(14, -23);
            const vec2 = vec1.clone().rotateBy(2 * Math.PI);
            assert.ok(vec1.isParallelTo(vec2));
        });

        it('Should find parallel vectors - 1', () => {
            assert.ok(new Vector(2, 2).isParallelTo(new Vector(-2, -2)));
        });
        it('Should find parallel vectors - 2', () => {
            assert.ok(new Vector(-1, 3).isParallelTo(new Vector(-4, 12)));
        });
        it('Should find parallel vectors - 4', () => {
            assert.ok(new Vector(7, -4).isParallelTo(new Vector(3.5, -2)));
        });
        it('Should find parallel vectors - 5', () => {
            assert.ok(new Vector(-8, 2).isParallelTo(new Vector(-4, 1)));
        });
        it('Should find parallel vectors - 6', () => {
            assert.ok(new Vector(12, 0).isParallelTo(new Vector(-2134, 0)));
        });
        it('Should find parallel vectors - 6', () => {
            assert.ok(new Vector(0, 4).isParallelTo(new Vector(0, -1)));
        });
        it('Should find parallel vectors - 7', () => {
            assert.ok(new Vector(-0, 3).isParallelTo(new Vector(0, 1)));
        });

        it('Should find non parallel vectors - 1', () => {
            assert.strictEqual(false, new Vector(2, 2).isParallelTo(new Vector(3, 6)));
        });
        it('Should find non parallel vectors - 1', () => {
            assert.strictEqual(false, new Vector(213, -123).isParallelTo(new Vector(0, 90)));
        });
    });

    describe('.isPerpendicularTo', () => {
        it('Should have a tolerance for rounding errors -1 ', () => {
            const vec1 = new Vector(14, -23);
            const vec2 = vec1.clone().rotateBy(Math.PI / 2);
            assert.ok(vec1.isPerpendicularTo(vec2));
        });
        it('Should have a tolerance for rounding errors -2', () => {
            const vec1 = new Vector(14, -23);
            const vec2 = vec1.clone().rotateBy(-Math.PI / 2);
            assert.ok(vec1.isPerpendicularTo(vec2));
        });

        it('Should find perpendicular vectors - 1', () => {
            assert.ok(new Vector(-1, 0).isPerpendicularTo(new Vector(0, 2)));
        });
        it('Should find parallel vectors - 2', () => {
            assert.ok(new Vector(1, 1).isPerpendicularTo(new Vector(-4, 4)));
        });

        it('Should find non perpendicular vectors - 1', () => {
            assert.strictEqual(false, new Vector(2, 2).isPerpendicularTo(new Vector(3, 6)));
        });
        it('Should find non perpendicular vectors - 1', () => {
            assert.strictEqual(false, new Vector(213, -123).isPerpendicularTo(new Vector(0, 90)));
        });
    });
});
