# Victor (Name WIP?)

The code is mostly taken from [Victor.js](https://www.npmjs.com/package/victor). I am currently adding Typescript type definitions and tests.
Changes from Victor:

- Removed `rotateBy` and `rotateByDeg` which seemed to be broken or not useful ([Issue agreeing with that](https://github.com/maxkueng/victor/issues/37))
- Improved documentation (In particular for the remaining rotation functions)
- Added tests

- `.toFixed()` converted components to string, fixed to keep them number, might renamed the function as suggested here: https://github.com/maxkueng/victor/issues/28
- TODO Angle between 2 vectors https://github.com/maxkueng/victor/issues/30

Using latest node features to run typescript and tests so

- No `tsconfig.json` because node 24+ handles typescript
- No `jest` because using `node --test`
    - TBD: Do I still use `chai`? Probably not as we won't need complex assertions

- TBD: How to publish properly?
