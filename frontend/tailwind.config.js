/** @type {import('tailwindcss').Config} */
const filters = require('tailwindcss-filters');
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  theme: {
    extend: {
      backdropFilter: {
        none: 'none',
        blur: 'blur(20px)',
      },
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
      },
      borderColor: {
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [
    // require('tailwindcss-filters'),
  ],
}
