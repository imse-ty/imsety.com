/** @jsxImportSource theme-ui */

import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';

export default function Hero() {
  const words = 'Lorem ipsum dolor sit amet.'.split(' ');

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
        variant="display.h1"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: [2, 3],
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
              scale: 0.96
            }}
            transition={{ type: 'spring' }}
            variants={child}
            sx={{ marginRight: 1 }}
            key={index}
            layout
          >
            {words}
          </motion.span>
        ))}
      </Heading>
      <Text
        as={motion.p}
        transition={{ type: 'spring', damping: 20, delay: 1 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        variant="body.summary"
        sx={{ margin: 0, color: 'text.secondary' }}
        layout
      >
        Consectetur adipiscing elit donec euismod hendrerit nisi.
      </Text>
    </motion.div>
  );
}
