'use client';

import { ThemeUIProvider } from 'theme-ui';
import { Box } from 'krado-react';
import { hubotSans, monaSans } from '@/styles/fonts';
import { setyTheme } from '@/constants/site-theme';

export default function Layout({ children }) {
  return (
    <ThemeUIProvider theme={setyTheme}>
      <Box
        as="main"
        className={`${(monaSans.className, hubotSans.className)}`}
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
