'use client';

import { Box } from 'krado-react';
import Navigation from './navigation';
import Toolbar from './toolbar';

export default function Layout({ children, showToolbarBack, hideNavigation }) {
  return (
    <Box
      sx={{
        position: 'relative'
      }}
    >
      <Toolbar showBack={showToolbarBack} />
      {!hideNavigation && <Navigation />}
      {children}
    </Box>
  );
}
