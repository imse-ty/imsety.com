/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { Button, Flex } from 'krado-react';
import { useState } from 'react';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';
import Link from 'next/link';
import Hero from '@/components/hero';

export function CTAButton({ href, children, variant }) {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <Link href={href}>
      <Button
        as={motion.button}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: 'spring', delay: 0.7, duration: 2 }}
        variant={variant}
        size="small"
        sx={{
          borderRadius: 2,
          fontWeight: 500
        }}
      >
        {children}
      </Button>
    </Link>
  );
}

export default function Shade() {
  const [isCovered, setIsCovered] = useState(true);

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
        width: '100vw',
        height: '100vh',
        color: 'primary.contrast',
        backgroundColor: 'rgba(232,232,232,0.97)',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Flex
        as={motion.div}
        variants={contentVariants}
        animate={isCovered ? 'show' : 'hide'}
        transition={{ type: 'spring', duration: 1 }}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          textAlign: 'center'
        }}
      >
        <Hero />
        <Flex sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <CTAButton href="#">Play reel</CTAButton>
          <CTAButton href="#" variant="ghost">
            View work
          </CTAButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
