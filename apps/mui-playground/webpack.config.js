/* eslint-disable @typescript-eslint/no-var-requires */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const {
  cssRuleFactory,
  devServerFactory,
  extensions,
  fontsRule,
  imagesRule,
  scssRuleFactory,
  tsRuleE2E,
  tsRuleFactory
} = require('configs').webpack;

const { generateEnvKeys } = require('./envKeys');

const devName = 'public/[name]';
const prodName = 'public/[name].[chunkhash]';

module.exports = (env, argv) => {
  const shouldGetCoverage = !!env.coverage;
  const shouldAnalyzeBundle = !!env.analyzeBundle;
  const isDev = argv.mode === 'development';

  const envKeys = generateEnvKeys(isDev, env.target);

  const tsRule = shouldGetCoverage ? tsRuleE2E : tsRuleFactory(isDev);

  const config = {
    devServer: devServerFactory(8080),
    devtool: isDev ? 'eval-source-map' : 'source-map',
    entry: {
      app: './src/index.ts'
    },
    module: {
      rules: [
        tsRule,
        fontsRule,
        imagesRule,
        cssRuleFactory('mui-playground'),
        scssRuleFactory('mui-playground')
      ]
    },
    optimization: {
      minimizer: [],
      runtimeChunk: {
        name: 'runtime'
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'all',
            name: 'vendor',
            test: /node_modules/
          }
        }
      }
    },
    output: {
      chunkFilename: `${isDev ? devName : prodName}.js`,
      filename: `${isDev ? devName : prodName}.js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({ async: false }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: 'dist'
      }),
      new HtmlWebPackPlugin({
        favicon: './src/favicon.png',
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        chunkFilename: `${isDev ? devName : prodName}.css`,
        filename: `${isDev ? devName : prodName}.css`
      }),
      new webpack.DefinePlugin({
        __mode__: JSON.stringify(argv.mode),
        ...envKeys
      }),
      isDev && new ReactRefreshWebpackPlugin(),
      !isDev && new CompressionPlugin(),
      !isDev && new CssMinimizerPlugin(),
      !isDev && new TerserPlugin(),
      shouldAnalyzeBundle && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src', 'assets'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@constants': path.resolve(__dirname, 'src', 'constants'),
        '@dummy': path.resolve(__dirname, 'src', 'dummy'),
        '@managers': path.resolve(__dirname, 'src', 'managers'),
        '@pages': path.resolve(__dirname, 'src', 'pages'),
        '@providers': path.resolve(__dirname, 'src', 'providers'),
        '@root': path.resolve(__dirname, 'src'),
        '@services': path.resolve(__dirname, 'src', 'services'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        '@ui': path.resolve(__dirname, 'src', 'ui')
      },
      extensions
    }
  };

  return config;
};
