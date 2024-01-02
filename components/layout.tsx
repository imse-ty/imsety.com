'use client';

import { Box } from 'krado-react';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      {children}
    </Box>
  );
}
