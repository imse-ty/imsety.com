import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Flex } from 'krado-react';
import { useState } from 'react';
import Heading from './fixed-krado-components/Heading';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';
import Link from 'next/link';
import { MdHome } from 'react-icons/md';

export default function Shade() {
  const notchSize = 75;
  const [isCovered, setIsCovered] = useState(true);

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  console.log(isCovered);

  const shadeVariants = {
    show: {
      clipPath: `polygon(0 0%, 194% 0, 0 194%, 0 0)`
    },
    hide: {
      clipPath: `polygon(0 0%, 6% 0, 0 6%, 0 0)`
    },
    hover: {
      backgroundColor: getColor(setyTheme, 'secondary.regular')
    }
  };

  const contentVariants = {
    show: {
      scale: 1
    },
    hide: {
      scale: 3
    }
  };
  return (
    <Flex
      as={motion.div}
      variants={shadeVariants}
      animate={isCovered ? 'show' : 'hide'}
      whileHover={isCovered ? '' : 'hover'}
      transition={{ type: 'spring', bounce: 0.2 }}
      onTap={() => setIsCovered(!isCovered)}
      sx={{
        position: 'fixed',

        // bottom: `calc(100% - ${notchSize}px)`,
        // right: `calc(100% - ${notchSize}px)`,

        // transform: `translate(calc(-100% + 75px), calc(-100% + 75px))`,
        width: '100vw',
        height: '100vh',
        color: 'primary.contrast',
        backgroundColor: 'text.primary',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center'
        //   clipPath: `polygon(
        //     100% 0,
        //     100% calc(-100% + 75px),
        //     calc(-100% + 75px) 100%,
        //     0 100%,
        //     0 0
        //   )
        // `
      }}
    >
      <Flex
        as={motion.div}
        variants={contentVariants}
        animate={isCovered ? 'show' : 'hide'}
        transition={{ type: 'spring', duration: 1 }}
        sx={{ flexDirection: 'column', gap: 3, alignItems: 'center' }}
        layout
      >
        <Heading variant="display.display" sx={{ color: 'secondary.bold' }}>
          Hello!
        </Heading>

        {isCovered && (
          <Link href="/">
            <Button
              as={motion.button}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              transition={{ type: 'spring', delay: 0.3, duration: 2 }}
              size="small"
              leftIcon={<MdHome />}
              sx={{
                borderRadius: 3,
                fontWeight: 500,
                color: 'text.primary',
                backgroundColor: 'secondary.bold'
              }}
            >
              Home
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}

// @keyframes wipe-out-top-left {
//   from {
//     clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
//   }
//   to {
//     clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
//   }
// }

// [transition-style="out:wipe:top-left"] {
//   animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-top-left both;
// }
