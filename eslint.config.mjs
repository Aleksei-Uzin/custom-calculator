import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['./src/**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    env: {
      jest: true,
    },
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
])
