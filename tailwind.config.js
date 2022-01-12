const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: {
        max: '375px'
      },
      md: {
        max: '768px'
      },
      lg: {
        max: '1920px'
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      poppins: ['Poppins', 'sans-serif'],
    },

    extend: {},
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}
