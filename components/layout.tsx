'use client';

import { Box } from 'krado-react';
import Navigation from './navigation';
import Toolbar from './toolbar';
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

export default function Layout({ children, showToolbarBack }) {
  const { scrollYProgress } = useScroll();

  const [isNavigationHidden, setIsNavigationHidden] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = scrollYProgress.getPrevious();

    if (latest > previous) {
      setIsNavigationHidden(true);
    } else if (latest === 0) {
      setIsNavigationHidden(true);
    } else if (latest >= 0.9) {
      setIsNavigationHidden(true);
    } else {
      setIsNavigationHidden(false);
    }
  });

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
