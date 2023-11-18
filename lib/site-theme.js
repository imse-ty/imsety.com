import { buildColorTheme, colors, theme } from 'krado-react';

const setyThemeColors = buildColorTheme({
  primary: 'nut',
  secondary: 'nso',
  accent: 'nso',
  action: 'nut',
  text: 'nso'
});

export const setyTheme = {
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
  colors: {
    ...setyThemeColors,

    text: {
      primary: colors.nso900,
      secondary: colors.nso800
    },
    background: colors.nso200,
    divider: colors.nso900,
    modes: {
      dark: {
        text: {
          primary: colors.nso200,
          secondary: colors.nso300
        },
        background: colors.nso1000,
        divider: colors.nso300
      }
    }
  },
  text: {
    ...theme.text,
    display: {
      display: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: [8, 9, '104px'],
        lineHeight: '1.1',
        letterSpacing: 'display'
      },
      h1: {
        variant: 'text.base',
        fontFamily: 'display',
        fontSize: [7, 10],
        lineHeight: '1.1',
        letterSpacing: 'display'
      },
      h2: {
        variant: 'text.display.h1',
        fontSize: 9,
        lineHeight: '65px'
      },
      h3: {
        variant: 'text.display.h1',
        fontSize: 8,
        lineHeight: '44px'
      },
      h4: {
        variant: 'text.display.h1',
        fontSize: [6, 7],
        lineHeight: '40px'
      },
      h5: {
        variant: 'text.display.h1',
        fontSize: 5,
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
        lineHeight: '1',
        letterSpacing: '-0.02em'
      },
      h1: {
        variant: 'text.base',
        fontSize: '1.1',
        lineHeight: 'heading'
      },
      h2: {
        variant: 'text.body.h1',
        fontSize: [3, 7]
      },
      h3: {
        variant: 'text.body.h1',
        fontSize: [5, 6]
      },
      h4: {
        variant: 'text.body.h1',
        fontSize: [4, 5]
      },
      h5: {
        variant: 'text.body.h1',
        fontWeight: 600,
        fontSize: 4
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
