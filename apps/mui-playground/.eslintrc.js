module.exports = {
  extends: [require.resolve('configs/eslint/.eslintrc.js')],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
