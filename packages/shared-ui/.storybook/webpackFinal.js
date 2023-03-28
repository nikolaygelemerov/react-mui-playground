const { extensions, miniCssExtractPluginTest, scssRuleFactory } = require('configs').webpack;
const alias = require('./alias');

module.exports = (config) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, scssRuleFactory('shared-ui')]
    },
    plugins: [...config.plugins, miniCssExtractPluginTest],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...alias
      },
      extensions: [...config.resolve.extensions, ...extensions]
    }
  };
};
