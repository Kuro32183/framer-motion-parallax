module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '90p': '90%',
        '86': '22rem'
      },
      backdropBlur: {
        'xs': '2px'
      },
      inset: {
        '1/6': '15%'
      },
      boxShadow: {
        '3xl': ',0px 0px 36px 0px rgba(0,0,0,0.25);',
      },
      fontFamily: {
      }
    },
    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'xmd': '880px',
      'lg': '992px',
      'xlg': '1024px',
      'xl': '1200px',
      '2xl': '1536px',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'app': '#00adef'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'app': '#00adef',
      'gray-txt': '#424E56'
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
