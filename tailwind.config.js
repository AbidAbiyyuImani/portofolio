const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const AOS = require('./node_modules/aos/dist/aos');
// npx tailwindcss -i ./src/input.css -o ./public/dist/css/main.css --watch
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/aos/dist/aos.css",
    "./node_modules/aos/dist/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
    postcss,
    AOS,
    require('flowbite/plugin'),
  ],
}

