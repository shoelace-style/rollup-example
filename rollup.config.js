import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    { dir: path.resolve('dist/'), format: 'cjs' }
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extensions: [ '.css' ]
    }),
    copy({
      targets: [
        { 
          src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/shoelace/icons'), 
          dest: path.resolve(__dirname, 'dist/icons')
        },
      ]
    })    
  ]
};