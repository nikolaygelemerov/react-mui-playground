module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier-scss",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-no-unresolved-module",
    "stylelint-no-unsupported-browser-features",
    "stylelint-sass-render-errors",
  ],
  rules: {
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-comment", "after-declaration", "first-nested"],
        ignore: ["after-declaration"],
      },
    ],
    "no-descending-specificity": null,
    "selector-class-pattern": "^[A-Z][a-zA-Z0-9]+$",
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/no-unresolved-module": true,
    "plugin/no-unsupported-browser-features": true,
    "plugin/rational-order": [
      true,
      {
        "empty-line-between-groups": true,
      },
    ],
    "plugin/sass-render-errors": true,
    "property-no-unknown": [
      true,
      {
        ignoreSelectors: [":export", ":root"],
      },
    ],
    "scale-unlimited/declaration-strict-value": [
      ["/^margin/", "/^padding/", "/color$/", "font-size", "border-width", "border-radius", "box-shadow", "transition"],
    ],
  },
};
