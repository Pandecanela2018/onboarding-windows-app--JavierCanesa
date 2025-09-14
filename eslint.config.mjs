// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['duplicate-repo/', 'node_modules/']),

  {
    files: ['**/*.js'],
    plugins: { js },
    extends: ['js/recommended', eslintConfigPrettier],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
