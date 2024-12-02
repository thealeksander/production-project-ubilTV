module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'eslint-config-prettier',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'eslint-plugin-prettier', 'i18next'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    // только если react > 17 v
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'arrow-parens': 'off',
    'react/no-deprecated': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-props-no-spreading': 'warn',
    // Уже исправили в новой версии
    'no-shadow': 'warn',
    'no-underscore-dangle': 'off',
    'no-undef': 'warn',
    // только на отсутствие переводов jsx
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    'max-len': [
      'error',
      { ignoreComments: true, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/destructuring-assignment': 'warn',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: { 'i18next/no-literal-string': 'off' },
    },
  ],
};
