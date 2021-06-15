const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    container: false
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        md: '5rem'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui']
    },

    extend: {
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh'
      },
      colors: {
        imsetyBlack: '#131214',
        imsetyWhite: '#EDEBEF'
      }
    }
  },
  variants: {
    extend: {
      backdropFilter: ['dark']
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const container = {
        '.container': {
          maxWidth: '1440px',
          margin: '0 auto',
          paddingInline: '2rem',
          '@screen md': {
            paddingInline: '5rem'
          }
        }
      };

      addComponents(container, { variants: ['responsive'] });
    })
  ]
};
