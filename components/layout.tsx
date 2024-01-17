'use client';

import { Box } from 'krado-react';
import Navigation from './navigation';
import Toolbar from './toolbar';
import { AnimatePresence } from 'framer-motion';

export default function Layout({
  children,
  showToolbarBack,
  isNavigationHidden
}) {
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Toolbar showBack={showToolbarBack} />
      <AnimatePresence>{!isNavigationHidden && <Navigation />}</AnimatePresence>
      {children}
    </Box>
  );
}
