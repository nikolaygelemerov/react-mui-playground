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

const { generateEnvKeys } = require('./envKeys');

const devName = 'public/[name]';
const prodName = 'public/[name].[chunkhash]';

module.exports = (env, argv) => {
  const shouldAnalyzeBundle = !!env.analyzeBundle;
  const isDev = argv.mode === 'development';

  const envKeys = generateEnvKeys(isDev, env.target);

  const config = {
    devServer: {
      client: {
        logging: 'error',
        overlay: true
      },
      compress: true,
      historyApiFallback: {
        index: 'http://localhost:8080'
      },
      hot: true,
      open: true
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    entry: {
      app: './src/index.ts'
    },
    module: {
      rules: [
        {
          test: /\.worker\./,
          use: { loader: 'worker-loader' }
        },
        {
          exclude: /node_modules/,
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-syntax-jsx',
                isDev && require.resolve('react-refresh/babel')
              ].filter(Boolean),
              presets: [
                '@babel/preset-typescript',
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ]
            }
          }
        },
        {
          generator: {
            filename: 'public/fonts/[name].[ext]'
          },
          test: /\.(woff|woff2|ttf|eot)$/,
          type: 'asset/resource'
        },
        {
          generator: {
            filename: 'public/images/[name].[ext]'
          },
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[name]__[local]__container__[hash:base64:5]'
                },
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer']
                }
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                modules: {
                  localIdentName: '[name]__[local]__container__[hash:base64:5]'
                },
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer']
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
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
      })
    ],
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
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  };

  if (!isDev) {
    config.plugins.push(new CompressionPlugin());
    config.optimization.minimizer.push(...[new CssMinimizerPlugin(), new TerserPlugin()]);

    if (shouldAnalyzeBundle) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  } else {
    config.plugins.push(new ReactRefreshWebpackPlugin());
  }

  return config;
};
