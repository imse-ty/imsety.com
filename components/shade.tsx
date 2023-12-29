/** @jsxImportSource theme-ui */
// @ts-nocheck

import useMousePosition from '@/lib/use-mouse-position';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Flex } from 'krado-react';
import ShadeHero from './shade-hero';

export default function Shade({ children, isActive, setIsActive }) {
  const { x, y } = useMousePosition();
  const size = isActive ? 1000 : 250;

  const variants = {
    follow: {
      WebkitMaskPosition: `${x - size / 3}px ${y - size / 3}px`,
      WebkitMaskSize: '250px',

      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.5
      }
    },
    lock: {
      WebkitMaskPosition: '0px 0px',
      WebkitMaskSize: ['250px', '500px', '5000px', '10000px'],
      maskImage: 'none',
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.5,
        WebkitMaskSize: {
          type: 'tween',
          ease: 'easeOut',
          duration: 1.5
        },
        maskImage: {
          delay: 1
        }
      }
    }
  };

  return (
    <Flex
      sx={{
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        onClick={setIsActive}
        sx={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}
      >
        <AnimatePresence>{!isActive && <ShadeHero />}</AnimatePresence>
      </div>
      <Box
        as={motion.div}
        variants={variants}
        animate={isActive ? 'lock' : 'follow'}
        sx={{
          position: 'absolute',
          overflowY: 'scroll',
          top: 0,
          left: 0,
          width: '100%',
          height: '600%',
          maskImage: 'url(/right-triangle.svg)',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '250px'
        }}
      >
        {children}
      </Box>
    </Flex>
  );
}
