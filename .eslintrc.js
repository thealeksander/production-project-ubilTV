module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'eslint-plugin-prettier"'],
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
  },
};
