// eslint.config.js
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  prettier,

  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
]
