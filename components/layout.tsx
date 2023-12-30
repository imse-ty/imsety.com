'use client';

import { Box } from 'krado-react';

export default function Layout({ children, disableScroll }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: disableScroll ? 'hidden' : 'initial'
      }}
    >
      {children}
    </Box>
  );
}
