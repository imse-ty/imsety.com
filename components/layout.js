'use client';

import { ThemeUIProvider } from 'theme-ui';
import { Box, buildColorTheme, colors } from 'krado-react';
import { hubotSans, monaSans } from '@/styles/fonts';

export default function Layout({ children }) {
  const setyTheme = buildColorTheme({
    primary: 'nso',
    secondary: 'nso',
    accent: 'nso',
    action: 'nso'
  });

  return (
    <ThemeUIProvider
      theme={{
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
          ...setyTheme,
          primary: {
            regular: colors.nso900
          },
          action: {
            ...setyTheme.action,
            hover: colors.nso800
          },
          text: { primary: colors.nso100 },
          background: colors.nso1000
        }
      }}
    >
      <Box
        as="main"
        className={`${(monaSans.className, hubotSans.className)}`}
        backgroundColor="background"
        sx={{
          height: '100vh'
        }}
      >
        ${children}
      </Box>
    </ThemeUIProvider>
  );
}
