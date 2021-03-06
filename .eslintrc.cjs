module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': ['warn', 120, 2],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
    }],
  },
  plugins: [
    'json-format',
  ],
};
