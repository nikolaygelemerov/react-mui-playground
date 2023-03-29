module.exports = {
  extends: [require.resolve('configs/eslint/.eslintrc.js'), 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
