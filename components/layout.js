'use client';

import { ThemeUIProvider } from 'theme-ui';
import { Box, buildColorTheme } from 'krado-react';

export default function Layout({ children }) {
  const setyTheme = buildColorTheme({ primary: 'nso' });

  return (
    <ThemeUIProvider theme={{ colors: setyTheme }}>
      <Box
        as="main"
        sx={{
          height: '100vh'
        }}
      >
        ${children}
      </Box>
    </ThemeUIProvider>
  );
}
