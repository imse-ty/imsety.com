import { theme } from 'krado-react';
import { buildMonochromaticTheme } from './monochromatic-theme';

const pageTheme = buildMonochromaticTheme('nut');

export const setyTheme = {
  config: {
    initialColorModeName: 'light'
  },
  sizes: {
    container: '1920px'
  },
  fonts: {
    body: 'Mona Sans, Arial, sans-serif',
    heading: 'Hubot Sans, Arial, sans-serif',
    display: 'Hubot Sans, Arial, sans-serif'
  },
  lineHeights: {
    body: '1.1',
    heading: '1.1',
    display: '1.1'
  },
  radii: [4, 8, 16, 32, 64, 99999],
  colors: {
    ...pageTheme
  },
  buttons: {
    ...theme.buttons,
    ghost: {
      color: 'primary.regular',
      bg: 'transparent',
      border: 1,
      borderColor: 'primary.regular',
      '&:hover': {
        color: 'action.active',
        borderColor: 'transparent',
        bg: 'action.contrast',
        boxShadow: 'hard.high'
      },
      '&:active': {
        color: 'background',
        bg: 'action.active'
      },
      '&:disabled': {
        color: 'action.disabled',
        borderColor: 'action.disabled',
        boxShadow: 'none'
      }
    }
  },
  text: {
    ...theme.text,
    base: {
      color: 'text.primary'
    },
    default: {
      variant: 'text.base'
    },
    display: {
      display: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: [8, 9, '104px'],
        fontWeight: 600,
        lineHeight: '1.1',
        letterSpacing: 'display'
      },
      h1: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: [8, 11],
        fontWeight: 600,
        lineHeight: '1.1',
        letterSpacing: 'display'
      },
      h2: {
        variant: 'text.display.h1',
        fontSize: [9, 10],
        fontWeight: 600,
        lineHeight: '65px'
      },
      h3: {
        variant: 'text.display.h1',
        fontSize: [8, 9],
        lineHeight: '44px'
      },
      h4: {
        variant: 'text.display.h1',
        fontSize: [7, 8],
        lineHeight: '40px'
      },
      h5: {
        variant: 'text.display.h1',
        fontSize: [5, 6],
        lineHeight: '28px'
      },
      quote: {
        variant: 'text.base',
        fontFamily: 'display',
        fontStyle: 'italic',
        fontSize: 6,
        lineHeight: '31px'
      }
    },
    body: {
      summary: {
        variant: 'text.base',
        fontSize: [5, 6],
        lineHeight: '1.4',
        letterSpacing: '-0.02em'
      },
      h1: {
        variant: 'text.base',
        fontSize: [7, 8],
        lineHeight: 'heading'
      },
      h2: {
        variant: 'text.body.h1',
        fontSize: [3, 7]
      },
      h3: {
        variant: 'text.body.h1',
        fontSize: [4, 6]
      },
      h4: {
        variant: 'text.body.h1',
        fontSize: [4, 5]
      },
      h5: {
        variant: 'text.body.h1',
        fontWeight: 600,
        fontSize: [3, 4]
      },
      paragraph: {
        variant: 'text.base',
        fontSize: 4,
        lineHeight: '28px'
      },
      smallParagraph: {
        variant: 'text.base',
        fontSize: 2,
        lineHeight: '20px'
      },
      bold: {
        variant: 'text.base',
        fontWeight: 'bold',
        fontSize: 4,
        lineHeight: '28px'
      },
      callout: {
        variant: 'text.base',
        fontSize: 3,
        lineHeight: '20px'
      },
      caption: {
        variant: 'text.base',
        fontWeight: 500,
        fontSize: 0,
        lineHeight: '14.52px'
      },
      footnote: {
        variant: 'text.base',
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '16.34px'
      },
      pretext: {
        variant: 'text.base',
        fontWeight: 'bold',
        fontSize: 1,
        lineHeight: '18px',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'text.secondary'
      }
    }
  }
};
