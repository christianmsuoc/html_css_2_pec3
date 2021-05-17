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
        'headerCols': '1fr minmax(75px, 400px) 1fr minmax(150px, 600px) 1fr',
        'mainCols': 'minmax(250px, 550px)',
        'footerCols': 'minmax(550px, 1600px)',
        'footerNavbarCols': '1fr auto 1fr',
        'footerLinksCols': 'auto auto auto auto',
        'footerSocialCols': 'max-content max-content max-content'
      },
      gridTemplateRows:  {
        'mainRows': 'minmax(250px, 550px) auto auto',
        'footerRows': '2fr 1fr'
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
