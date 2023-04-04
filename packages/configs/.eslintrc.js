module.exports = {
  extends: [require.resolve("./eslint/.eslintrc.js")],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
