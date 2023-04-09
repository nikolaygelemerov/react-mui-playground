// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackFinal = require('./webpackFinal');

module.exports = {
  // eslint-disable-next-line storybook/no-uninstalled-addons
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal
};
