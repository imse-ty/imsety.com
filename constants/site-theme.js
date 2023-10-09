import { buildColorTheme, colors } from 'krado-react';

const setyThemeColors = buildColorTheme({
  primary: 'nut',
  secondary: 'nso',
  accent: 'nso',
  action: 'nut',
  text: 'nso'
});

export const setyTheme = {
  fonts: {
    body: 'Mona-Sans, Arial, sans-serif',
    heading: 'Hubot-Sans, Arial, sans-serif',
    display: 'Hubot-Sans, Arial, sans-serif'
  },
  lineHeights: {
    body: 2,
    heading: 2
  },
  colors: {
    ...setyThemeColors,

    text: {
      primary: colors.nso900
    },
    background: colors.nso200,
    divider: colors.nso900,
    modes: {
      dark: {
        background: 'black'
      }
    }
  }
};
