const toggle = {
  OFF: 0,
  WARNING: 1,
  ON: 2,
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': toggle.OFF,
    'import/no-unresolved': toggle.OFF,
    'no-underscore-dangle': toggle.OFF,
    'no-plusplus': toggle.OFF,
    'jsx-a11y/anchor-is-valid': toggle.OFF,
    'import/prefer-default-export': toggle.OFF,
    'max-len': toggle.OFF,
    'no-return-assign': toggle.WARNING,
    'linebreak-style': toggle.OFF,
    'no-console': toggle.WARNING,
    'react/prop-types': toggle.OFF,
  },
};
