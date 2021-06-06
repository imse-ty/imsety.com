module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
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
  plugins: []
};
