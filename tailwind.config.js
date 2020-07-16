const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '500': '#FBBF4F',
          '600': '#DDA131'
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
