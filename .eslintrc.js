module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      allowImportExportEverywhere: true
    },
    extends: [
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'react-app'
    ],
    plugins: [],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
        },
      ],
      "react/prop-types": 1
    }
  }