// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  '@assets': path.resolve(__dirname, 'src', 'assets'),
  '@components': path.resolve(__dirname, 'src', 'components'),
  '@constants': path.resolve(__dirname, 'src', 'constants'),
  '@dummy': path.resolve(__dirname, 'src', 'dummy'),
  '@managers': path.resolve(__dirname, 'src', 'managers'),
  '@pages': path.resolve(__dirname, 'src', 'pages'),
  '@providers': path.resolve(__dirname, 'src', 'providers'),
  '@root': path.resolve(__dirname, 'src'),
  '@services': path.resolve(__dirname, 'src', 'services'),
  '@widgets': path.resolve(__dirname, 'src', 'widgets')
};
