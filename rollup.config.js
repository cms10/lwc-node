import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const __ENV__ = process.env.NODE_ENV ?? 'development';

export default (args) => {
    return {
        input: {
            main: 'src/lwc/main.js',
            products: 'src/lwc/productsPage.js'
        },

        output: {
            dir: 'lwc',
            entryFileNames: '[name].js',
            format: 'esm',
            name: '[name]'
        },

        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(__ENV__),
                preventAssignment: true,
            }),
            lwc(),
            args.watch &&
                serve({
                    open: false,
                    port: 3000,
                }),
            args.watch && livereload('/src/lwc'),
        ],
    };
};
