import { colors, getColors, theme } from 'krado-react';

const coreColor = 'nut';

function buildColorTheme(
  colorNames = {
    primary: coreColor,
    secondary: coreColor,
    accent: 'nsoHot',
    error: 'asset',
    warning: 'oshun',
    success: 'usir',
    info: coreColor,
    surface: coreColor,
    action: coreColor,
    text: coreColor,
    background: coreColor,
    divider: coreColor
  }
) {
  return {
    primary: {
      regular: getColors(colorNames.primary, '500'),
      contrast: colors.nso000
    },
    secondary: {
      light: getColors(colorNames.secondary, '300'),
      regular: getColors(colorNames.secondary, '200'),
      bold: getColors(colorNames.secondary, '800'),
      contrast: colors.nso000
    },
    accent: {
      light: getColors(colorNames.accent, '100'),
      regular: getColors(colorNames.accent, '200'),
      medium: getColors(colorNames.accent, '100'),
      bold: getColors(colorNames.accent, '300'),
      contrast: colors.nso000
    },
    error: {
      light: getColors(colorNames.error, '000'),
      regular: getColors(colorNames.error, '400'),
      medium: getColors(colorNames.error, '600'),
      bold: getColors(colorNames.error, '800'),
      contrast: colors.nso000
    },
    warning: {
      light: getColors(colorNames.warning, '000'),
      regular: getColors(colorNames.warning, '500'),
      medium: getColors(colorNames.warning, '600'),
      bold: getColors(colorNames.warning, '800'),
      contrast: colors.nso000
    },
    success: {
      light: getColors(colorNames.success, '000'),
      regular: getColors(colorNames.success, '400'),
      medium: getColors(colorNames.success, '600'),
      bold: getColors(colorNames.success, '800'),
      contrast: colors.nso000
    },
    info: {
      light: getColors(colorNames.info, '000'),
      regular: getColors(colorNames.info, '500'),
      medium: getColors(colorNames.info, '600'),
      bold: getColors(colorNames.info, '800'),
      contrast: colors.nso000
    },
    surface: {
      extrathin: getColors(colorNames.surface, '000'),
      thin: getColors(colorNames.surface, '100'),
      extralight: getColors(colorNames.surface, '200'),
      light: getColors(colorNames.surface, '300'),
      regular: getColors(colorNames.surface, '400'),
      medium: getColors(colorNames.surface, '500'),
      semibold: getColors(colorNames.surface, '600'),
      bold: getColors(colorNames.surface, '700'),
      semiblack: getColors(colorNames.surface, '800'),
      black: getColors(colorNames.surface, '900'),
      heavy: getColors(colorNames.surface, '1000'),
      extraheavy: colors.nso1000
    },
    action: {
      active: getColors(colorNames.action, '700'),
      hover: getColors(colorNames.action, '400'),
      selected: getColors(colorNames.action, '500'),
      disabled: getColors(colorNames.action, '300'),
      contrast: getColors(colorNames.action, '100')
    },
    text: {
      primary: getColors(colorNames.text, '800'),
      secondary: getColors(colorNames.text, '600'),
      placeholder: getColors(colorNames.text, '200'),
      disabled: getColors(colorNames.text, '100')
    },
    background: getColors(colorNames.background, '200'),
    divider: getColors(colorNames.divider, '200')
  };
}

function buildDarkColorTheme(
  colorNames = {
    primary: coreColor,
    secondary: coreColor,
    accent: 'nsoHot',
    error: 'asset',
    warning: 'oshun',
    success: 'usir',
    info: coreColor,
    surface: coreColor,
    action: coreColor,
    text: coreColor,
    background: coreColor,
    divider: coreColor
  }
) {
  return {
    primary: {
      regular: getColors(colorNames.primary, '300'),
      contrast: getColors(colorNames.primary, '800')
    },
    secondary: {
      light: getColors(colorNames.secondary, '200'),
      regular: getColors(colorNames.secondary, '300'),
      bold: getColors(colorNames.secondary, '800'),
      contrast: getColors(colorNames.secondary, '100')
    },
    accent: {
      light: getColors(colorNames.accent, '100'),
      regular: getColors(colorNames.accent, '200'),
      medium: getColors(colorNames.accent, '100'),
      bold: getColors(colorNames.accent, '300'),
      contrast: colors.nso000
    },
    error: {
      light: getColors(colorNames.error, '000'),
      regular: getColors(colorNames.error, '400'),
      medium: getColors(colorNames.error, '600'),
      bold: getColors(colorNames.error, '800'),
      contrast: colors.nso000
    },
    warning: {
      light: getColors(colorNames.warning, '000'),
      regular: getColors(colorNames.warning, '500'),
      medium: getColors(colorNames.warning, '600'),
      bold: getColors(colorNames.warning, '800'),
      contrast: colors.nso000
    },
    success: {
      light: getColors(colorNames.success, '000'),
      regular: getColors(colorNames.success, '400'),
      medium: getColors(colorNames.success, '600'),
      bold: getColors(colorNames.success, '800'),
      contrast: colors.nso000
    },
    info: {
      light: getColors(colorNames.info, '000'),
      regular: getColors(colorNames.info, '500'),
      medium: getColors(colorNames.info, '600'),
      bold: getColors(colorNames.info, '800'),
      contrast: colors.nso000
    },
    surface: {
      extrathin: getColors(colorNames.surface, '000'),
      thin: getColors(colorNames.surface, '100'),
      extralight: getColors(colorNames.surface, '200'),
      light: getColors(colorNames.surface, '300'),
      regular: getColors(colorNames.surface, '400'),
      medium: getColors(colorNames.surface, '500'),
      semibold: getColors(colorNames.surface, '600'),
      bold: getColors(colorNames.surface, '700'),
      semiblack: getColors(colorNames.surface, '800'),
      black: getColors(colorNames.surface, '900'),
      heavy: getColors(colorNames.surface, '1000'),
      extraheavy: colors.nso1000
    },
    action: {
      active: getColors(colorNames.action, '400'),
      hover: getColors(colorNames.action, '200'),
      selected: getColors(colorNames.action, '500'),
      disabled: getColors(colorNames.action, '300'),
      contrast: getColors(colorNames.action, '100')
    },
    text: {
      primary: getColors(colorNames.text, '200'),
      secondary: getColors(colorNames.text, '300'),
      placeholder: getColors(colorNames.text, '300'),
      disabled: getColors(colorNames.text, '100')
    },
    background: getColors(colorNames.background, '900'),
    divider: getColors(colorNames.divider, '800')
  };
}

export const setyTheme = {
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
    ...buildColorTheme()
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
