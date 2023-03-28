/* eslint-disable max-len */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
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
