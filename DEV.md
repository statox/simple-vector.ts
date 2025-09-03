# TODO

Things I want to review before considering the library ready to be officially published:

- [x] Rework categories (split angle and rotation)~
- [x] Rename `rotate` by `rotateBy`~
- [x] Add `rotateToward(vec, maxAngle)`~
- [x] Maybe add resize = normalize + multiplyScalar~
- [x] Maybe add `fromPolar` https://github.com/maxkueng/victor/issues/26`~
- [x] Maybe `isPerpendicular`, `isParallel` https://github.com/maxkueng/victor/pull/42~
- [x] Implement `limitX` and `limitY` and use them in `limit`.~
- [x] Implement `clamp(max: number, min?: number)`: Always apply `mag = Math.max(mag, max)` and if `min` is defined `mag = Math.min(mag, min)` (handle special case for `mag === 0`. `max` and `min` must always be positive. Also implement `clampX` and `clampY`.~
- [x] Maybe integrate the code from [this issue](https://github.com/maxkueng/victor/issues/30). After testing I realized the proposed function computes the angle between the vector created between the 2 input vectors and the x axis. The name proposed in the issue needs to change. **Won't do I would make more sense to use `vec1.subtract(v2).angle()`.**
- [x] Create a dedicated section for dev workflow documentation.
- [ ] Create interactive example of the different methods to make the discoverability easier.
- [ ] Look into UMD to allow import from `<script>` without `type="module"`
- [ ] Add an `epsilon` property to `Vector` to improve computations stability?
- [ ] Use spellcheck to avoid typos.
- [ ] Find a way to validate docs (make sure all required tags are used, maybe make sure the documented method is used in the `@example` tag)
- [ ] In the README add a word about immutability https://github.com/maxkueng/victor/issues/18
    - [ ] Think of an approach for a `VectorOps` collection of methods which would operate on immutable vectors. After reading [this blogpost](https://blog.tojicode.com/2012/04/if-i-built-physics-engine.html) I experimented with creating `type IVector = Float32Array` and methods like `add = (v1: IVector, v2: IVector, res: IVector)` but I realized accessing a `TypedArray` member like `res[0] = v1[0] + v2[0];` is much slower than `this.x = this.x + other.x`. So for now this is on hold, I'll rethink about that later on.

# Dev tooling

- **When cloning the repo `ln -s "$(pwd)/tools/pre-commit" .git/hooks/pre-commit` to enable local formatting and linting on commit.**
- We are using node's (24+) built-in support of typescript so we don't have a `tsconfig.json` file.
- When migrating from Victor.js, we replaced the usage of `jest` and `chai` of Victor with nodeJS built-in test runner and assertions.
- For testing we are using node's [built-in test runner](https://nodejs.org/api/test.html) and its assertions system. The assertion system is a bit poor and we might want to use [chai](https://www.npmjs.com/package/chai) assertions if testing becomes too tedious in the future.

Dev workflow:

```shell
npm install      # We use only dev-dependencies

npmr build:watch # Watches both the typescript transpilation and the building of the docs from the TSdoc comments

npmr serve:doc   # Serve the generated doc website locally
```

# Publishing

The Github CI handle the publication of the [package to npm](https://www.npmjs.com/package/simple-vector) and the deployment of the Github Pages for the docs website. See [`.github/workflows/publish-npm.yml`](.github/workflows/publish-npm.yml).

- Updating the `version` field in `package.json` triggers the publishing of a new version and its documentation.
- The docs can be updated without publishing a new version of the package running [`.github/workflows/publish-docs-only.yml`](.github/workflows/publish-docs-only.yml), [here on Github](https://github.com/statox/simple-vector.ts/actions/workflows/publish-docs-only.yml)
