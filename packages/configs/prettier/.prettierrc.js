module.exports = {
  endOfLine: 'auto',
  importOrderCaseInsensitive: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100,
  singleQuote: true,
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false
      }
    }
  ],
  trailingComma: 'none'
};
