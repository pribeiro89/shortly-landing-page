module.exports = {
  extends: [
    'react-app',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2, { "SwitchCase": 1 }]
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/jsx-fragments': 'off',
    // 'import/prefer-default-export': 'off',
    // 'no-console': ['error', { allow: ['error', 'debug'] }],

    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    // '@typescript-eslint/explicit-function-return-type': 'error',
    // 'no-unused-vars': 'off',
    // curly: ['error', 'all'],
    // 'brace-style': ['error', '1tbs'],
    // 'padding-line-between-statements': [
    //   'error',
    //   { blankLine: 'always', prev: '*', next: ['return'] },
    //   { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    // ],
    // indent: ['error', 2, { "SwitchCase": 1 }],
    // 'no-plusplus': [
    //   'error',
    //   {
    //     allowForLoopAfterthoughts: true,
    //   },
    // ],
    // 'no-underscore-dangle': 'off',
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'always',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    // 'max-len': [
    //   'warn',
    //   {
    //     code: 140,
    //     ignoreComments: true,
    //   },
    // ],
    // 'no-restricted-syntax': 'off',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'error',
  },
  globals: {
    window: true,
    localStorage: true
  }
};
