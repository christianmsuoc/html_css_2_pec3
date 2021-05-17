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
        'md-header': '1fr minmax(75px, 400px) 1fr minmax(150px, 600px) 1fr',
        'md-main': 'minmax(250px, 550px)',
        'md-footer': 'minmax(250px, 1600px)',
        'md-footer-navbar': '1fr auto 1fr',
        'md-footer-links': 'auto auto auto auto',
        'md-footer-social': 'max-content max-content max-content'
      },
      gridTemplateRows: {
        'md-main-rows': 'minmax(250px, 550px) auto auto',
        'md-footer-rows': '2fr 1fr'
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
