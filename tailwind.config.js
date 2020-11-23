const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: colors.gray
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
