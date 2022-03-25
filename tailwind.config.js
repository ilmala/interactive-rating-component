const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      orange: '#FB7413',
      'light-gray': '#959EAC',
      'medium-gray': '#7C8798',
      'dark-blue': '#252D37',
      'very-dark-blue': '#121417',
    },
    fontSize: {
      'xs': ['11px', '18px'],
      'sm': ['14px', '22px'],
      'base': ['15px', '24px'],
      'lg': ['19px', '24px'],
      'xl': ['24px', '30px'],
      '2xl': ['28px', '35px'],
    },
    borderRadius: {
      'none': '0',
      DEFAULT : '16px',
      'lg': '30px',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        'sans': ['Overpass', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
