/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';

export default function Hero() {
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
        transition={{ type: 'spring', damping: 15 }}
        sx={{
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
        ◤ Greetings Maya Table & Sam Frank Productions team!
      </motion.h1>
      <motion.p
        transition={{ type: 'spring', damping: 13 }}
        sx={{ margin: 0, color: 'surface.light', fontSize: [1, 6] }}
        layout
      >
        Excited to work together! Imsety will animate{' '}
        <strong>seven infographic slides </strong>
        for the Fearless Fund using existing assets starting{' '}
        <strong>August 04, 2023.</strong>
      </motion.p>
    </motion.div>
  );
}
