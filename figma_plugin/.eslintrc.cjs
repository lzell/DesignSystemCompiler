/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ["dist/ui.js", "dist/code.js", "jest.config.js"],
  rules: {
    semi: ["error", "never"]
  }
};
