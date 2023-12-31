'use client';

import { motion } from 'framer-motion';
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
