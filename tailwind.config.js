module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'headerCols': 'auto minmax(150px, 400px) auto minmax(300px, 600px) auto'
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
