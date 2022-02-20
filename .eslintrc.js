module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'import-helpers',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^next/',
          'module',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'linebreak-style': 'off',
    'comma-spacing': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-trailing-spaces': 2,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'max-len': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'lines-between-class-members': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'no-restricted-syntax': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-new': 'off',
    'no-restricted-properties': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-typos': 'off',
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    '@next/next/no-img-element': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
