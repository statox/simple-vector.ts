import typescript from '@rollup/plugin-typescript';

/*
 * Rollup is used to bundle the package as a UMD module.
 * `dist/simple-vector.umd.js` is used when importing in a browser to create
 * a global object `SimpleVector`
 * In other environments supporting modules like nodeJS we can use `import`
 * or `require` as usual.
 */
export default {
    input: 'index.ts',
    output: [
        {
            file: 'dist/simple-vector.esm.js',
            format: 'es',
        },
        {
            file: 'dist/simple-vector.umd.js',
            format: 'umd',
            name: 'SimpleVector'
        }
    ],
    plugins: [typescript()]
};
