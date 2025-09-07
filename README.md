A 2D vector math library built as a modern ECMAScript module without dependencies.

Check out [the documentation](https://statox.github.io/simple-vector.ts/) and [the interactive examples](https://statox.github.io/simple-vector-examples/).

The code is largely inspired from [Victor.js](https://www.npmjs.com/package/victor) adding Typescript typing, updating documentation, fixing some long running issues and
adding some features.

# Installation

## NodeJS

Install with

```shell
npm install --save simple-vector
```

Use:

```typescript
// If in an ESM project
import { Vector } from 'simple-vector';
// Else if in a commonJS project
const { Vector } = require('simple-vector');

// Create a new vector
const v = new Vector(1, 0);

// Create a second vector from the first one and transform it
const w = v
    .clone()
    .multiplyScalar(10)
    .rotateBy(Math.PI / 2);

// Compute their dot product
const dot = v.dot(w);
```

## Browser

Using a CDN to include the package in a vanilla JS page

```html
<html>
    <head>
        <title>SimpleVector Example</title>
    </head>
    <body>
        <script src="https://unpkg.com/simple-vector/dist/simple-vector.umd.js"></script>
        <script>
            const { Vector } = SimpleVector;

            const v1 = new Vector(0, 0);
            const v2 = new Vector(5, 5);

            const sum = v1.clone().add(v2);

            const span = document.createElement('span');
            span.innerText = `${v1.toString()} + ${v2.toString()} = ${sum.toString()}`;
            document.body.appendChild(span);
        </script>
    </body>
</html>
```

# Differences with Victor.js

If you are a user of `Victor.js` you should feel mostly at home with simple-vector. Be warned that some features have been reworked:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Related issue](https://github.com/maxkueng/victor/issues/37))
- Renamed `rotate` and `rotateDeg` to `rotateBy` and `rotateByDeg` to make the name more explicit.
- Added explicit errors when trying to divide by zero ([Related issue](https://github.com/maxkueng/victor/issues/40))
- Added explicit errors when required parameters are missing or have invalid values.
- `.toFixed()` was renamed to `.fixPrecision()`. Also it converted components to string so we fixed the method to keep them number ([Related issue](https://github.com/maxkueng/victor/issues/28))

Note that we also added a few features we felt were missing on Victor.js or were requested in the project's issues:

- Completed documentation (In particular for the remaining rotation functions)
- Added methods `angleWith`, `angleWithDeg`, `orientedAngleWith` and `orientedAngleDegWith` to compute angle between two vectors.
- `.mix()` now validates the percentage value and throws an error if the percentage is `<0` or `>1`.
- Added `resize()` ([Related issue](https://github.com/maxkueng/victor/issues/32), [Victor MR #39](https://github.com/maxkueng/victor/pull/39) but with a ~10x faster implementation than the proposed code)
- Added `rotateTowards`/`rotateTowardsDeg` to steer a vector toward another one.
- Updated `.fromArray` and `.fromObject` to explicitly fail on invalid input.
- Added `clamp` to clamp the magnitude and `clampX`, `clampY` to clamp the axes.
- Added `fromPolar` and `toPolar` methods. ([Related issue](https://github.com/maxkueng/victor/issues/26))
- Added `limitX` and `limitY` to go with `limit`
- Added `isParallelTo()` and `isPerpendicularTo()`. ([Victor #42](https://github.com/maxkueng/victor/pull/42) but using already existing `.dot` and `.cross` methods)

We also ported the original tests and added new ones.

# Development

[DEV.md](https://github.com/statox/simple-vector.ts/blob/main/DEV.md) has some notes about how to setup the repo for development.

I don't expect anyone to contribute to this repo anytime soon, if I'm wrong don't hesitate to create an [issue on Github](https://github.com/statox/simple-vector.ts/issues).
