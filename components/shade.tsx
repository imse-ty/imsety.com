/** @jsxImportSource theme-ui */

import useMousePosition from '@/lib/use-mouse-position';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef } from 'react';
import Hero from './hero';

export default function Shade({ children }) {
  const { x, y } = useMousePosition();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const size = useTransform(scrollYProgress, [0, 1], [250, 8000]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const sizeSpring = useSpring(size, { damping: 30 });
  const maskSize = useMotionTemplate`${sizeSpring}px, auto`;
  const maskPosition = useTransform(scrollYProgress, [0, 0.05], [3, 2]);

  const variants = {
    follow: {
      maskPosition: `
      ${x - sizeSpring.get() / maskPosition.get()}px
      ${y - sizeSpring.get() / maskPosition.get()}px
    `,
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.5
      }
    },
    lock: {
      maskPosition: '0px 0px',
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.5
      }
    },
    hidden: {
      maskImage: 'none'
    }
  };

  function getMaskState() {
    if (scrollYProgress.get() > 0.3) {
      return 'lock';
    } else {
      return 'follow';
    }
  }

  function hideHero() {
    if (scrollYProgress.get() > 0.5) {
      return 'none';
    } else {
      return 'block';
    }
  }

  return (
    <div
      ref={ref}
      sx={{
        height: '200vh',
        backgroundColor: 'secondary.bold'
      }}
    >
      <motion.div
        style={{ opacity, scale: heroScale }}
        sx={{
          display: hideHero(),
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={variants}
        animate={getMaskState()}
        style={{ maskSize: maskSize }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.5
        }}
        sx={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          maskImage: 'url("/right-triangle.svg")',
          maskRepeat: 'no-repeat'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
