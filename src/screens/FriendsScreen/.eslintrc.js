module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react-native/all'],
  // extends: ['babel-eslint'],
  env: {
    browser: true,
    jest: true,
    'react-native/react-native': true
  },
  plugins: ['react-native'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  rules: {
    quotes: ['error', 'single'],
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 1,
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    camelcase: 'off',
    'no-underscore-dangle': [
      'off',
      {
        allow: ['_id'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true
      }
    ],
    radix: 'off',
    'comma-dangle': 2,
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 1
  }
};
