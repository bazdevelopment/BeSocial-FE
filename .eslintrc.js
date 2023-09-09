module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'unicorn', 'react-hooks', 'import'],
  extends: [
    'next/core-web-vitals',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'airbnb'
  ],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': [0, { anonymous: 'always', named: 'always' }],
    camelcase: 0,
    'no-return-assign': 0,
    'no-duplicate-imports': 'error',
    quotes: ['error', 'single'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'comma-dangle': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': 0,
    // react hooks eslint rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // import specific eslint rules
    'import/no-useless-path-segments': 'error',
    'import/exports-last': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling'], 'newlines-between': 'always' }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off'
  }
};
