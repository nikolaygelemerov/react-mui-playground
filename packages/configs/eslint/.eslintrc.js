module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  globals: {},
  ignorePatterns: [],
  overrides: [
    {
      extends: ["plugin:testing-library/react"],
      // Enable eslint-plugin-testing-library rules
      // or preset only for matching files:
      files: ["**/tests/**/*.test.ts", "**/tests/**/*.test.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "compat",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "testing-library",
    "typescript-sort-keys",
    "unused-imports",
  ],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": ["warn", { code: 100 }],
    "no-duplicate-imports": "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": 0,
    "sort-destructure-keys/sort-destructure-keys": [2, { caseSensitive: false }],
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: false, natural: false }],
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
