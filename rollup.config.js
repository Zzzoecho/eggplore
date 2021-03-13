import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from 'rollup-plugin-json'
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import image from '@rollup/plugin-image';
const path = require('path')

export default {
  input: 'src/index.js',
  output: {
    exports: "named",
    name: 'eggplore',
    file: 'lib/index.js',
    format: 'umd',
    globals: {
      vue: 'Vue',
    },
  },
  external: ['vue'],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    vue({
      css: false, // false 表示将 style 输出交给其他插件处理
    }),
    postcss({
      extract: true, // true 表示生成与 output.file 相同 basename 的 .css 文件
      plugins: [  
        autoprefixer()
      ]
    }),
    babel({
      exclude: '**/node_modules/**',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
      babelHelpers: 'runtime',
    }),
    image(),
  ],
};
