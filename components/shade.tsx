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

export default function Shade() {
  const { x, y } = useMousePosition();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const size = useTransform(scrollYProgress, [0, 1], [250, 8000]);
  const sizeSpring = useSpring(size, { damping: 30 });
  const maskSize = useMotionTemplate`auto, ${sizeSpring}px, auto`;
  const maskPosition = useTransform(scrollYProgress, [0, 0.05], [3, 2]);

  const variants = {
    follow: {
      maskPosition: `
      center center,
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
      maskPosition: 'center center, 0px 0px',
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.5
      }
    }
  };

  return (
    <div
      ref={ref}
      sx={{
        position: 'relative',
        height: '200vh',
        zIndex: 1,
        overflow: 'clip',
        pointerEvents: 'none'
      }}
    >
      <motion.div
        variants={variants}
        animate={scrollYProgress.get() > 0.3 ? 'lock' : 'follow'}
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
          backgroundColor: 'red',
          maskImage:
            'linear-gradient(black, black), url("/right-triangle.svg")',
          maskRepeat: 'no-repeat',
          maskComposite: 'exclude'
        }}
      />
    </div>
  );
}
