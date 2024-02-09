import { buildColorTheme, getColors } from 'krado-react';

export function buildMonochromaticTheme(colorName) {
  return {
    primary: {
      regular: getColors(colorName, '500'),
      contrast: getColors('nso', '000')
    },
    secondary: {
      light: getColors(colorName, '300'),
      regular: getColors(colorName, '200'),
      bold: getColors(colorName, '800'),
      contrast: getColors(colorName, '100')
    },
    accent: {
      light: getColors(colorName, '100'),
      regular: getColors(colorName, '200'),
      medium: getColors(colorName, '100'),
      bold: getColors(colorName, '300'),
      contrast: getColors('nso', '000')
    },
    surface: buildColorTheme({ surface: colorName }).surface,
    action: {
      active: getColors(colorName, '700'),
      hover: getColors(colorName, '400'),
      selected: getColors(colorName, '500'),
      disabled: getColors(colorName, '300'),
      contrast: getColors(colorName, '100')
    },
    text: {
      primary: getColors(colorName, '800'),
      secondary: getColors(colorName, '600'),
      placeholder: getColors(colorName, '200'),
      disabled: getColors(colorName, '100')
    },
    background: getColors(colorName, '100'),
    divider: getColors(colorName, '200'),
    modes: {
      dark: {
        primary: {
          regular: getColors(colorName, '300'),
          contrast: getColors(colorName, '800')
        },
        secondary: {
          light: getColors(colorName, '200'),
          regular: getColors(colorName, '300'),
          bold: getColors(colorName, '800'),
          contrast: getColors(colorName, '100')
        },
        accent: {
          light: getColors(colorName, '100'),
          regular: getColors(colorName, '200'),
          medium: getColors(colorName, '100'),
          bold: getColors(colorName, '300'),
          contrast: getColors('nso', '000')
        },
        surface: buildColorTheme({ surface: colorName }).surface,
        action: {
          active: getColors(colorName, '400'),
          hover: getColors(colorName, '100'),
          selected: getColors(colorName, '500'),
          disabled: getColors(colorName, '300'),
          contrast: getColors(colorName, '100')
        },
        text: {
          primary: getColors(colorName, '100'),
          secondary: getColors(colorName, '300'),
          placeholder: getColors(colorName, '300'),
          disabled: getColors(colorName, '100')
        },
        background: getColors(colorName, '900'),
        divider: getColors(colorName, '300')
      }
    }
  };
}
