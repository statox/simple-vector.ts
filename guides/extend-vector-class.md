---
title: Extend the Vector class
group: Guides
---

# How to extend the `Vector` class

It is possible to add a method to the `Vector` class in your project, while keeping Typescript happy.

_The method described here follows the typescript documentation about [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)_

Let's say you need to add a new method `Vector.foo` which sets the `x` and `y` properties of the current vector to the `y` and `x` properties of another vector. (This is a silly example for demonstration purpose).

First create `src/extend-simple-vector.ts` (Or wherever you prefer placing this file in your project) with the following content:

```typescript
/*
 * This file extends the Vector class with a new method.
 */
import { Vector } from 'simple-vector';

// Let typescript know about the new method we are adding
declare module 'simple-vector' {
    interface Vector {
        foo(otherVector: Vector): Vector;
    }
}

// Implement the method
Vector.prototype.foo = function (otherVector: Vector) {
    this.x = otherVector.y;
    this.y = otherVector.x;

    // To be consistent with the other methods make sure to
    // return the vector so that the method is chainable.
    return this;
};
```

In `src/index.ts` (or whichever file you'll be using the `.foo` method:

```typescript
// Import the vector class as usual
import { Vector } from 'simple-vector';
// Import the override
import './extend-simple-vector';

const v1 = new Vector(1, 2);
const v2 = new Vector(0, 0);

v2.foo(v1); // v2 is now {x: 2, y: 1}
```

If you think the method you created could be useful to other and should be included in the main package don't hesitate to [create an issue](https://github.com/statox/simple-vector.ts/issues) on GitHub.
