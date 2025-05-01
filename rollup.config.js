// see https://github.com/rozek/build-configuration-study

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input:    './src/yjs-esm.ts',
  output: [
    {
      file:      './dist/yjs-esm.esm.js',
      format:    'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(), commonjs(), typescript(),
    terser({ format:{ comments:false, safari10:true } })
  ],
};
