import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';

// TODO: 去除不必要的文件 如 docs, website, .prettierrc 等
export default {
  input: 'src/index.js',
  output: {
    name: 'eggplore',
    file: 'dist/bundle.js',
    format: 'umd',
    globals: {
      vue: 'Vue',
    },
  },
  external: ['vue'],
  plugins: [
    scss(),
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: '**/node_modules/**',
    }),
    image(),
  ],
};
