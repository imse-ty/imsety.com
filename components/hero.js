/** @jsxImportSource theme-ui */

import { setyTheme } from '@/constants/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import { colors, theme } from 'krado-react';

export default function Hero() {
  const words =
    '◤ Greetings! My name is Imsety. Thanks for stopping by :]'.split(' ');

  const container = {
    hidden: { opacity: 0, color: getColor(setyTheme, 'primary.regular') },
    visible: (i = 1) => ({
      opacity: 1,
      color: getColor(setyTheme, 'text.primary'),
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
        duration: 2
      }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      layout
    >
      <motion.h1
        variants={container}
        transition={{ type: 'spring' }}
        initial="hidden"
        animate="visible"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          variant: 'display.h5',
          marginBottom: [3, 4],
          fontSize: [6, 10, null, null, '108px'],
          lineHeight: 1,
          fontWeight: 'bold',
          letterSpacing: 'normal',
          color: 'text.primary'
        }}
        layout
      >
        {words.map((words, index) => (
          <motion.span
            whileHover={{
              scale: 0.96,
              color: getColor(setyTheme, 'primary.regular')
            }}
            transition={{ type: 'spring' }}
            variants={child}
            sx={{ marginRight: [1, 3] }}
            key={index}
            layout
          >
            {words}
          </motion.span>
        ))}
      </motion.h1>
      {/* <motion.p
        transition={{ type: 'spring', damping: 13, delay: 2 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{ margin: 0, color: 'surface.light', fontSize: [1, 6] }}
        layout
      >
        Maker of things...
      </motion.p> */}
    </motion.div>
  );
}
