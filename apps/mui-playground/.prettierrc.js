/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */

module.exports = {
  ...require('configs').prettier,
  importOrder: [
    '^react(.*)$',
    '^@mui(.*)$',
    '^@emotion(.*)$',
    '^@rounik(.*)$',
    '^@components(.*)|@components/(.*)|^@constants(.*)|@constants/(.*)|^@dummy(.*)|@dummy/(.*)|@managers(.*)|@managers/(.*)|@pages(.*)|@pages/(.*)|@providers(.*)|@providers/(.*)|@root(.*)|^@root/(.*)|@services(.*)|@services/(.*)|@styles(.*)|@styles/(.*)|@ui(.*)|@ui/(.*)$',
    '^[./].*(?<!\\.scss)$',
    '\\.scss$'
  ]
};
