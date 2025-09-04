A 2D vector math library built as a modern ECMAScript module.

Check out [the website](https://statox.github.io/simple-vector.ts/) for documentation.

The goal of this package is to be thoroughly documented, easy to use and without dependencies.

The code is largely inspired from [Victor.js](https://www.npmjs.com/package/victor) adding Typescript typings, updating documentation and fixing some long running issues.

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
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Vector Example</title>
    </head>
    <body>
        <script src="https://unpkg.com/simple-vector/dist/simple-vector.umd.js"></script>
        <script>
            const { Vector } = SimpleVector;

            const v1 = new Vector(0, 0);
            const v2 = new Vector(5, 5);

            const sum = v1.clone().add(v2);

            document.body.innerHTML = `<p>${v1.toString()} + ${v2.toString()} = ${sum.toString()}</p>`;
        </script>
    </body>
</html>
```

# Differences with Victor.js

If you are a user a Victor.js you should feel mostly at home with simple-vector. Be warned that some features have been reworked:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Related issue](https://github.com/maxkueng/victor/issues/37))
- Renamed `rotate` and `rotateDeg` to `rotateBy` and `rotateByDeg` to make the name more explicit.
- Added explicit errors when trying to divide by zero ([Related issue](https://github.com/maxkueng/victor/issues/40))
- `.toFixed()` was renamed to `.fixPrecision()`. Also it converted components to string so we fixed the method to keep them number ([Related issue](https://github.com/maxkueng/victor/issues/28))

Note that we also added a few features we felt were missing on Victor or were requested in the project's issues:

- Completed documentation (In particular for the remaining rotation functions)
- Ported the original tests and added new ones.
- Added methods `angleWith`, `angleWithDeg`, `orientedAngleWith` and `orientedAngleDegWith` to compute angle between two vectors.
- `.mix()` now validates the percentage value and throws an error if the percentage is `<0` or `>1`.
- Added `resize()` ([Related issue](https://github.com/maxkueng/victor/issues/32), [Victor MR #39](https://github.com/maxkueng/victor/pull/39) but with a ~10x faster implementation than the proposed code)
- Added `rotateTowards`/`rotateTowardsDeg` to steer a vector toward another one
- Updated `.fromArray` and `.fromObject` to explicitly fail on invalid input but also accept string representations instead of numbers.
- Added `clamp` to clamp the magnitude and `clampX`, `clampY` to clamp the axes.
- Added `fromPolar` and `toPolar` methods. ([Related issue](https://github.com/maxkueng/victor/issues/26))
- Added `limitX` and `limitY` to go with `limit`
- Added `isParallelTo()` and `isPerpendicularTo()`. ([Victor #42](https://github.com/maxkueng/victor/pull/42) but using already existing `.dot` and `.cross` methods)

# Development

[DEV.md](https://github.com/statox/simple-vector.ts/blob/main/DEV.md) has some notes about how to setup the repo for development.

I don't expect anyone to contribute to this repo anytime soon, if I'm wrong don't hesitate to create an [issue on Github](https://github.com/statox/simple-vector.ts/issues).
