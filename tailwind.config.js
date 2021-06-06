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
      },
      boxShadow: {
        white:
          '0 10px 30px -3px rgba(255, 255, 255, 0.1), 0 4px 8px -2px rgba(255, 255, 255, 0.05)'
      }
    }
  },
  variants: {
    extend: { boxShadow: ['dark'] }
  },
  plugins: []
};
