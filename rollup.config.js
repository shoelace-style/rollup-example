import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    css({ output: 'bundle.css' }),
    terser(),
    copy({
      copyOnce: true,
      targets: [
        {
          src: path.resolve(
            __dirname,
            'node_modules/@shoelace-style/shoelace/dist/assets',
          ),
          dest: path.resolve(__dirname, 'dist/shoelace'),
        },
      ],
    }),
  ],
};
