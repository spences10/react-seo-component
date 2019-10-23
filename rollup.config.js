import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: './index.js',
    format: 'cjs',
    exports: 'named',
    external: ['prop-types', 'react', 'react-helmet'],
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
