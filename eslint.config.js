const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        $: 'readonly',
        jQuery: 'readonly',
        COMMON: 'readonly',
        Swiper: 'readonly'
      }
    },
    rules: {
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
    }
  },
  {
    files: ['*.js', 'scripts/**/*.js'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
    }
  }
];
