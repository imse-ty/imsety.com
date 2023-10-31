'use client';

import { Box } from 'krado-react';

export default function Layout({ children }) {
  return (
    <Box
      as="main"
      backgroundColor="background"
      sx={{
        height: '100vh'
      }}
    >
      {children}
    </Box>
  );
}
