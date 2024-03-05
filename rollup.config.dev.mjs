import commonJs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: 'packages/my-package/index.ts',
        output: {
            format: 'umd',
            file: 'test.js',
            name: 'test',
        },
        plugins: [
            nodeResolve({
                ignoreGlobal: false,
                include: ['node_modules/**'],
                browser: true,
            }),
            commonJs(),
            typescript({
            }),
        ],
    }
]