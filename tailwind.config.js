module.exports = {
  purge: [`./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {}
  },
  plugins: []
};
