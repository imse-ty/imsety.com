/** @jsxImportSource theme-ui */

import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';

export default function Hero() {
  const words = 'Symmetry in motion!'.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.02 * i,
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
        justifyContent: 'center',
        textAlign: 'center'
      }}
      layout
    >
      <Heading
        as={motion.h1}
        variants={container}
        transition={{ type: 'spring' }}
        initial="hidden"
        animate="visible"
        variant="display.display"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 4,
          lineHeight: 1,
          fontWeight: 'bold',
          letterSpacing: 'normal'
        }}
        layout
      >
        Symmetry in motion!
      </Heading>
      <Heading
        as={motion.h1}
        variants={container}
        transition={{ type: 'spring' }}
        initial="hidden"
        animate="visible"
        variant="display.h2"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: [2, 4],
          lineHeight: 1,
          letterSpacing: 'normal'
        }}
        layout
      >
        (is business strategy in action)
      </Heading>
      {/* <Text
        as={motion.p}
        transition={{ type: 'spring', damping: 20, delay: 1 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        variant="body.h3"
        sx={{ margin: 0, color: 'text.secondary' }}
        layout
      >
        Where good design meets good business.
      </Text> */}
    </motion.div>
  );
}
