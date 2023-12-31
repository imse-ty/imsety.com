'use client';

import { Box } from 'krado-react';

export default function Layout({ children, disableScroll }) {
  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: '100vh'
      }}
    >
      {children}
    </Box>
  );
}
