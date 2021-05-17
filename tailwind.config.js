module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    height: {
      header: '9vh',
      footer: '15vh'
    },
    minHeight: {
      main: '76vh',
    },
    extend: {
      backgroundImage: {
        'footer-bg': "url('../images/themetalband.png')"
      }
    },
    fontFamily: {
      'roboto': ['roboto', 'sans-serif']
    },
    colors: {
      black: {
        light: '#161616',
        normal: '#090909'
      },
      tangerine: '#F18805FF',
      white: '#F0F0F0',
      'white-dark': '#CACACA',
      charcoal: {
        lighter: '#6b8f99',
        light: '#40575d',
        normal: '#36494E',
        dark: '#2c3b3f'
      },
      morningBlue: '#7B9E89FF',
      webBlack: '#111111DD'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
