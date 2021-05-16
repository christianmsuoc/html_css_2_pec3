module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      },
      gridTemplateColumns: {
        'headerCols': 'auto minmax(75px, 400px) auto minmax(150px, 600px) auto',
        'mainCols': 'minmax(250px, 550px)',
        'footerCols': 'minmax(550px, 1600px)'
      },
      gridTemplateRows:  {
        'mainRows': 'minmax(250px, 550px) auto auto',
        'footerRows': '1fr 1fr 1fr'
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
      charcoal: {
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
