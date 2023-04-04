/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extensions = [".ts", ".tsx", ".js", ".jsx"];

// Rules:
const fontsRule = {
  generator: {
    filename: "public/fonts/[name][ext]",
  },
  test: /\.(woff|woff2|ttf|eot)$/,
  type: "asset/resource",
};

const imagesRule = {
  generator: {
    filename: "public/images/[name][ext]",
  },
  test: /\.(png|jpe?g|gif|svg|ico)$/,
  type: "asset/resource",
};

const cssRuleFactory = (moduleHashPrefix) => ({
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        modules: {
          localIdentName: `[name]__[local]__${moduleHashPrefix}__[hash:base64:5]`,
        },
        sourceMap: true,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["autoprefixer"],
        },
      },
    },
  ],
});

const scssRuleFactory = (moduleHashPrefix) => ({
  test: /\.scss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: 2,
        modules: {
          localIdentName: `[name]__[local]__${moduleHashPrefix}__[hash:base64:5]`,
        },
        sourceMap: true,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["autoprefixer"],
        },
      },
    },
    { loader: "sass-loader" },
  ],
});

const tsRuleFactory = (isDev) => ({
  exclude: /node_modules/,
  test: /\.(ts|tsx)$/,
  use: {
    loader: "babel-loader",
    options: {
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-jsx",
        isDev && require.resolve("react-refresh/babel"),
      ].filter(Boolean),
      presets: ["@babel/preset-typescript", "@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
    },
  },
});

const tsRuleE2E = {
  exclude: /node_modules/,
  test: /\.(ts|tsx)$/,
  use: {
    loader: "babel-loader",
    options: {
      plugins: [require.resolve("react-refresh/babel"), "istanbul"],
    },
  },
};

const tsRuleCy = {
  exclude: /node_modules/,
  test: /\.(js|jsx|ts|tsx)$/,
  use: {
    loader: "babel-loader",
    options: {
      plugins: ["@babel/plugin-transform-runtime", "istanbul"],
      presets: ["@babel/preset-typescript", "@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
    },
  },
};

// Plugins:
const miniCssExtractPluginTest = new MiniCssExtractPlugin({
  chunkFilename: "[name].css",
  filename: "[name].css",
});

const devServerFactory = (port) => ({
  client: {
    logging: "error",
    overlay: true,
  },
  compress: true,
  historyApiFallback: {
    index: `http://localhost:${port}`,
  },
  hot: true,
  open: true,
  port,
});

module.exports = {
  cssRuleFactory,
  devServerFactory,
  extensions,
  fontsRule,
  imagesRule,
  miniCssExtractPluginTest,
  scssRuleFactory,
  tsRuleCy,
  tsRuleE2E,
  tsRuleFactory,
};
