'use client';

import { Box } from 'krado-react';
import Navigation from './navigation';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Navigation />
      {children}
    </Box>
  );
}
