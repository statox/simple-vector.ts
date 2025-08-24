# SimpleVector.ts

The code is mostly taken from [Victor.js](https://www.npmjs.com/package/victor). I am currently adding Typescript type definitions and tests.

## Differences with Victor.js

This are changes already implemented:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Issue agreeing with that](https://github.com/maxkueng/victor/issues/37))
- Renamed `rotate` and `rotateDeg` to `rotateBy` and `rotateByDeg` which make more sense.
- Improved documentation (In particular for the remaining rotation functions)
- Ported the original tests and added new tests.
- Explicitly fail when trying to divide by zero
- Changed `random()` function. For some reason it generated a number between `min` and `max + 1` which sounded confusing.
- `.toFixed()` converted components to string, fixed to keep them number, might renamed the function as suggested here: https://github.com/maxkueng/victor/issues/28
- Added methods to compute angle between two vectors https://github.com/maxkueng/victor/issues/30
- Mix validate the percentage value and throws an error if <0 or >1
- Added `resize()` ([Victor #39](https://github.com/maxkueng/victor/pull/39) but with a ~10x faster implementation than the proposed code)
- Added `rotateTowards`/`rotateTowardsDeg` to steer a vector toward another one
- Updated `.fromArray` and `.fromObject` to explicitly fail on invalid input but also accept string representations instead of numbers.
- Added `clamp` to clamp the magnitude and `clampX`, `clampY` to clamp the axes.
- Added `fromPolar` and `toPolar` methods.
- Added `limitX` and `limitY` to go with `limit`

## TODO

Things I want to review before considering the library ready to be officially published:

- ~Rework categories (split angle and rotation)~
- ~Rename `rotate` by `rotateBy`~
- ~Add `rotateToward(vec, maxAngle)`~
- ~Maybe add resize = normalize + multiplyScalar~
- ~Maybe add `fromPolar` https://github.com/maxkueng/victor/issues/26`~
- ~Maybe `isPerpendicular`, `isParallel` https://github.com/maxkueng/victor/pull/42~
- ~Implement `limitX` and `limitY` and use them in `limit`.~
- ~Implement `clamp(max: number, min?: number)`: Always apply `mag = Math.max(mag, max)` and if `min` is defined `mag = Math.min(mag, min)` (handle special case for `mag === 0`. `max` and `min` must always be positive. Also implement `clampX` and `clampY`.~
- ~Maybe integrate the code from [this issue](https://github.com/maxkueng/victor/issues/30). After testing I realized the proposed function computes the angle between the vector created between the 2 input vectors and the x axis. The name proposed in the issue needs to change.~ Won't do I would make more sense to use `vec1.subtract(v2).angle()`.
- In the README add a word about immutability https://github.com/maxkueng/victor/issues/18
- Add an `epsilon` property to `Vector` to improve computations stability?
- Use spellcheck to avoid typos.
- Find a way to validate docs (make sure all required tags are used, maybe make sure the documented method is used in the `@example` tag)
- Create a dedicated section for dev workflow documentation.

- Rework publishing
    - For now published at https://www.npmjs.com/package/@statox/vector. I want to rename to `simplevector` when we are ready.
    - ~TODO: Proper publishing workflow (probably release and doc generated only by Github from the CI)~
        - ~For now the documentation is not synced with the published package but with the latest commit of the `main` branch.~

## Dev notes

Using latest node features to run typescript and tests so

- No `tsconfig.json` because node 24+ handles typescript
- We replaced the usage of `jest` and `chai` of Victor with nodeJS built-in test runner and assertions.

- When cloning the repo `ln -s "$(pwd)/tools/pre-commit" .git/hooks/pre-commit` to enable local formatting and linting on commit.

### Publishing

The Github CI handle the publication of the package to npm and the deployment of the github pages for the docs website. See [`.github/workflows/publish-npm.yml`](.github/workflows/publish-npm.yml).

Update the `version` field in `package.json` to trigger the publishing of a new version and its documentation.
