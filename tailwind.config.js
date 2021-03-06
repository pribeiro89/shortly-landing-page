const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      colors: {
        primary: {
          cyan: '#2acfcf',
          violet: '#3b3054'
        },
        secondary: {
          red: '#f46262'
        },
        neutral: {
          gray: '#bfbfbf',
          'violet-gray': '#9e9aa7',
          'dark-blue': '#35323e',
          'dark-violet': '#232127'
        }
      },
      backgroundImage: theme => ({
        'boost-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
        'shorten-desktop': "url('/src/assets/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/src/assets/images/bg-shorten-mobile.svg')",
      })
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
