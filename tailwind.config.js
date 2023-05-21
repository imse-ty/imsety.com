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
      sans: ['"Hubot Sans"', 'ui-sans-serif', 'system-ui']
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
      },
      typography: (theme) => ({
        lightbox: {
          css: [
            {
              img: {
                cursor: 'zoom-in'
              }
            }
          ]
        },
        dark: {
          css: [
            {
              hr: {
                borderColor: theme('colors.gray.400')
              },
              pre: {
                backgroundColor: theme('colors.gray.200')
              },
              img: {
                width: '100%'
              }
            }
          ]
        },
        light: {
          css: [
            {
              color: theme('colors.imsetyWhite'),
              '[class~="lead"]': {
                color: theme('colors.imsetyWhite')
              },
              a: {
                color: theme('colors.imsetyWhite')
              },
              strong: {
                color: theme('colors.imsetyWhite')
              },
              'ol > li::before': {
                color: theme('colors.imsetyWhite')
              },
              'ul > li::before': {
                backgroundColor: theme('colors.imsetyWhite')
              },
              hr: {
                borderColor: theme('colors.gray.400')
              },
              blockquote: {
                color: theme('colors.imsetyWhite'),
                borderLeftColor: theme('colors.gray.400')
              },
              h1: {
                color: theme('colors.imsetyWhite')
              },
              h2: {
                color: theme('colors.imsetyWhite')
              },
              h3: {
                color: theme('colors.imsetyWhite')
              },
              h4: {
                color: theme('colors.imsetyWhite')
              },
              'figure figcaption': {
                color: theme('colors.imsetyWhite')
              },
              code: {
                color: theme('colors.white')
              },
              'a code': {
                color: theme('colors.white')
              },
              pre: {
                color: theme('colors.imsetyWhite'),
                backgroundColor: theme('colors.gray.800')
              },
              thead: {
                color: theme('colors.imsetyWhite'),
                borderBottomColor: theme('colors.imsetyWhite')
              },
              'tbody tr': {
                borderBottomColor: theme('colors.imsetyWhite')
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      backdropFilter: ['dark'],
      typography: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
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
