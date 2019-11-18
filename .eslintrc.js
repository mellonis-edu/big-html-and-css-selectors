module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
  rules: {
    strict: [2, "global"],
  },
};
