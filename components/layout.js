'use client';

import { ThemeUIProvider } from 'theme-ui';
import { Box } from 'krado-react';
import { setyTheme } from '@/lib/site-theme';

export default function Layout({ children }) {
  return (
    <ThemeUIProvider theme={setyTheme}>
      <Box
        as="main"
        backgroundColor="background"
        sx={{
          height: '100vh'
        }}
      >
        {children}
      </Box>
    </ThemeUIProvider>
  );
}
