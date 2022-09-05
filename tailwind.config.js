/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#FFF0E6',
          200: '#FFE5D4',
          300: '#F9D0B5',
          400: '#FCC39E',
          500: '#FFAD77',
          600: '#FE9E5F',
          700: '#DE7835',
          800: '#B14E0D',
          900: '#9B3E00',
        },
      },
    }
  }
}
