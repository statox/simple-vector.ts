# SimpleVector.ts

The code is mostly taken from [Victor.js](https://www.npmjs.com/package/victor). I am currently adding Typescript type definitions and tests.
Changes from Victor:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Issue agreeing with that](https://github.com/maxkueng/victor/issues/37))
- Improved documentation (In particular for the remaining rotation functions)
- Ported the original tests and added new tests.
- Explicitly fail when trying to divide by zero
- Changed `random()` function. For some reason it generated a number between `min` and `max + 1` which sounded confusing.
- `.toFixed()` converted components to string, fixed to keep them number, might renamed the function as suggested here: https://github.com/maxkueng/victor/issues/28
- Added methods to compute angle between two vectors https://github.com/maxkueng/victor/issues/30

Using latest node features to run typescript and tests so

- No `tsconfig.json` because node 24+ handles typescript
- No `jest` because using `node --test`
    - TBD: Do I still use `chai`? Probably not as we won't need complex assertions

- TBD: How to publish properly?
    - For now published at https://www.npmjs.com/package/@statox/vector
    - TODO: Proper publishing workflow
        - For now the documentation is not synced with the published package but with the latest commit of the `main` branch.
