module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'import/extensions': ['error', 'always'], // require js file extensions in imports
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': ['error', { props: false }], // allow modifying properties of params
  },
};
