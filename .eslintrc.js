module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    newCap: 'off'
  }
};
