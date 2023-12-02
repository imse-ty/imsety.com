'use client';

import { Box } from 'krado-react';

export default function Layout({ children, disableScroll }) {
  return (
    <Box
      as="main"
      backgroundColor="background"
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: disableScroll ? 'hidden' : 'initial'
      }}
    >
      {children}
    </Box>
  );
}
