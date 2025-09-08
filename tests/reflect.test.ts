import { test, it } from 'node:test';

import { Vector } from '../src/Vector.ts';
import { assertCloseTo } from './helpers.ts';

test('.reflect', () => {
    it('Should reflect a vector parallel to the normal', () => {
        const n = new Vector(1, 1);
        const v = new Vector(3, 3);
        const r = v.clone().reflect(n);

        assertCloseTo(r.x, -v.x);
        assertCloseTo(r.y, -v.y);
    });

    it('If the vector is perpendicular to the normal, the reflected is the same direction', () => {
        const n = new Vector(4, 7);
        const v = n.clone().rotateByDeg(90);
        const r = v.clone().reflect(n);

        assertCloseTo(v.x, r.x);
        assertCloseTo(v.y, r.y);
    });

    it('should reflect a vector on an horizontal normal', () => {
        const n = new Vector(0, 1);
        const v = new Vector(4, 6);
        const r = v.clone().reflect(n);

        assertCloseTo(v.x, r.x);
        assertCloseTo(v.y, -r.y);
    });
});
