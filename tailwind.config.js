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
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
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