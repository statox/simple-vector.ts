# SimpleVector.ts

The code is mostly taken from [Victor.js](https://www.npmjs.com/package/victor). I am currently adding Typescript type definitions and tests.

## Differences with Victor.js

This are changes already implemented:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Issue agreeing with that](https://github.com/maxkueng/victor/issues/37))
- Improved documentation (In particular for the remaining rotation functions)
- Ported the original tests and added new tests.
- Explicitly fail when trying to divide by zero
- Changed `random()` function. For some reason it generated a number between `min` and `max + 1` which sounded confusing.
- `.toFixed()` converted components to string, fixed to keep them number, might renamed the function as suggested here: https://github.com/maxkueng/victor/issues/28
- Added methods to compute angle between two vectors https://github.com/maxkueng/victor/issues/30
- Mix validate the percentage value and throws an error if <0 or >1
- Added `resize()` ([Victor #39](https://github.com/maxkueng/victor/pull/39) but with a ~10x faster implementation than the proposed code)

## TODO

Things I want to review before considering the library ready to be officially published:

- ~Rework categories (split angle and rotation)~
- In the README add a word about immutability https://github.com/maxkueng/victor/issues/18

- Rename `rotate` by `rotateBy`
- Add `rotateToward(vector, percent)` / `rotateToward(vec, maxAngle)` / `rotateToward(vec, fixedAngle)`
- ~Maybe add resize = normalize + multiplyScalar~
- Maybe add `fromPolar` https://github.com/maxkueng/victor/issues/26
- Maybe `isPerpendicular`, `isParallel` https://github.com/maxkueng/victor/pull/42
- Maybe rework `limit`: To me it would make more sense to make it work like `x = Math.max(x, limit)`. Maybe name the new version `clamp` instead of `limit` to keep the old version.
- Maybe integrate the code from [this issue](https://github.com/maxkueng/victor/issues/30). After testing I realized the proposed function computes the angle between the vector created between the 2 input vectors and the x axis. The name proposed in the issue needs to change.

- Rework publishing
    - For now published at https://www.npmjs.com/package/@statox/vector. I want to rename to `simplevector` when we are ready.
    - ~TODO: Proper publishing workflow (probably release and doc generated only by Github from the CI)~
        - ~For now the documentation is not synced with the published package but with the latest commit of the `main` branch.~

## Dev notes

Using latest node features to run typescript and tests so

- No `tsconfig.json` because node 24+ handles typescript
- We replaced the usage of `jest` and `chai` of Victor with nodeJS built-in test runner and assertions.

### Publishing

The Github CI handle the publication of the package to npm and the deployment of the github pages for the docs website. See [`.github/workflows/publish-npm.yml`](.github/workflows/publish-npm.yml).
