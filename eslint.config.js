import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import globals from 'globals'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Get the equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Converts plugin config into a rules object.
 * Returns {} if config is undefined, array, or missing `.rules`.
 */
function toRulesObject(config) {
  // No config at all
  if (!config) return {}

  // If config is an array, you can decide how to handle it (merge them? skip?):
  if (Array.isArray(config)) {
    // This example just returns empty for arrays
    return {}
  }

  // If it's an object, see if it has `.rules`:
  if (!config.rules || typeof config.rules !== 'object') {
    return {}
  }

  // Otherwise, return the `rules` object
  return config.rules
}

export default [
  // The basic recommended config from eslint
  js.configs.recommended,

  // TypeScript ESLint recommended
  tseslint.configs.recommended,
  tseslint.configs['recommended-requiring-type-checking'],

  // React recommended
  reactPlugin.configs.recommended,

  // React Hooks recommended
  reactHooksPlugin.configs.recommended,

  // Next.js recommended
  nextPlugin.configs.recommended,

  // Prettier recommended
  prettierPlugin.configs.recommended,

  {
    // Apply to JS/TS files:
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],

    // Register the plugins
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      '@next/next': nextPlugin,
    },

    // Tell ESLint to use the @typescript-eslint parser
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',

        // Crucial for type-aware linting:
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,

        // Let TS check JSDoc in .js files
        allowJs: true,
        checkJs: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Merge each plugin's recommended 'rules'
      ...toRulesObject(tseslint.configs?.recommended),
      ...toRulesObject(reactPlugin.configs?.recommended),
      ...toRulesObject(reactHooksPlugin.configs?.recommended),
      ...toRulesObject(prettierPlugin.configs?.recommended),
      ...toRulesObject(nextPlugin.configs?.recommended),

      // Your custom rules
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': 'error', // Use TypeScript-specific rule instead
      'no-undef': 'warn',
      'no-empty': 'warn',
      'no-case-declarations': 'warn',
      'react/display-name': 'warn',
      'no-useless-catch': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'prettier/prettier': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // Examples of turning certain rules into errors
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-fallthrough': 'error',
    },
  },
]
