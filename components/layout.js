'use client';

import { ThemeUIProvider } from 'theme-ui';
import { Box, buildColorTheme, colors } from 'krado-react';

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
