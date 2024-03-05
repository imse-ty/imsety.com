'use client';

import { Box } from 'krado-react';
import Navigation from './navigation';
import Toolbar from './toolbar';
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

export default function Layout({
  children,
  showToolbarBack,
  hideTopNav,
  isHiddenByDefault,
  isToolbarHidden,
  typeOfCaseStudy,
  forceHideNav = false
}) {
  const { scrollYProgress } = useScroll();

  const [isNavigationHidden, setIsNavigationHidden] =
    useState(isHiddenByDefault);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const previous = scrollYProgress.getPrevious();

    if (latest > previous && latest > 0.5) {
      setIsNavigationHidden(true);
    } else if (latest === 0 && hideTopNav) {
      setIsNavigationHidden(true);
    } else if (latest >= 0.9) {
      setIsNavigationHidden(true);
    } else {
      setIsNavigationHidden(false);
    }
  });

  return (
    <Box
      as='main'
      sx={{
        position: 'relative'
      }}
    >
      <AnimatePresence>
        {!isToolbarHidden && (
          <Toolbar
            showBack={showToolbarBack}
            typeOfCaseStudy={typeOfCaseStudy}
          />
        )}
        {/* {!forceHideNav && <Navigation isHidden={isNavigationHidden} />} */}
      </AnimatePresence>
      {children}
    </Box>
  );
}
