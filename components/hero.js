/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { colors } from 'krado-react';

export default function Hero() {
  const words = '◤ Greetings Maya Table & Sam Frank Productions team! 👋🏾'.split(
    ' '
  );

  const container = {
    hidden: { opacity: 0, color: colors.nut500 },
    visible: (i = 1) => ({
      opacity: 1,
      color: colors.nso200,
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
          fontSize: [6, 10, null, '108px'],
          lineHeight: 1,
          fontWeight: 'bold',
          letterSpacing: 'normal',
          color: 'white'
        }}
        layout
      >
        {words.map((words, index) => (
          <motion.span
            whileHover={{ scale: 0.96, color: colors.nut300 }}
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
      <motion.p
        transition={{ type: 'spring', damping: 13, delay: 2 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        sx={{ margin: 0, color: 'surface.light', fontSize: [1, 6] }}
        layout
      >
        Excited to work together! Imsety will animate{' '}
        <strong>seven infographic slides </strong>
        for the Fearless Fund starting <strong>August 04, 2023.</strong>
      </motion.p>
    </motion.div>
  );
}
