const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      gray: colors.teal,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
