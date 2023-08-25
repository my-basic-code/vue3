// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px'
      },
    },
    extend: {
      gridTemplateRows: {
        '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}