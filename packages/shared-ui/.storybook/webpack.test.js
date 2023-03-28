/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const alias = require('./alias');

const { extensions, fontsRule, imagesRule, miniCssExtractPluginTest, scssRuleFactory, tsRuleCy } =
  require('configs').webpack;

module.exports = {
  resolve: {
    alias,
    extensions: [...extensions, '.js', '.jsx']
  },
  module: {
    rules: [tsRuleCy, fontsRule, imagesRule, scssRuleFactory('shared-ui')]
  },
  plugins: [
    miniCssExtractPluginTest,
    new webpack.DefinePlugin({
      __mode__: 'development'
    })
  ]
};
