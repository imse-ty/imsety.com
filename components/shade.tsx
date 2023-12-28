/** @jsxImportSource theme-ui */
/** @ts-nocheck */

import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Flex,
  Footer,
  FooterContent,
  FooterFootnote,
  FooterItem,
  ToggleIcon
} from 'krado-react';
import { useState } from 'react';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';
import Link from 'next/link';
import Hero from '@/components/hero';
import IndexHeader from './index-header';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from 'theme-ui';

export function ShadeButton({ href, children, variant, onClick }) {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <Link href={href}>
      <Button
        onClick={onClick}
        as={motion.button}
        variants={buttonVariants}
        initial='hidden'
        animate='visible'
        size='small'
        transition={{ type: 'spring', delay: 0.7, duration: 2 }}
        variant={variant}
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

export default function Shade({
  playReelCallback,
  isCovered,
  onTap,
  children
}) {
  const [colorMode, setColorMode] = useColorMode('dark');
  // const [isCovered, setIsCovered] = useState(true);

  const shadeVariants = {
    show: {
      clipPath: `polygon(0 0%, 194% 0, 0 194%, 0 0)`
    },
    hide: {
      clipPath: `polygon(0 0%, 6% 0, 0 6%, 0 0)`
    }
  };

  const backgroundVariants = {
    hide: {
      backgroundColor: getColor(setyTheme, 'primary.contrast')
    }
  };

  const contentVariants = {
    show: {
      opacity: 1,
      scale: 1
    },
    hide: {
      opacity: 0,
      scale: 1.1
    }
  };
  return (
    <Flex
      as={motion.div}
      variants={shadeVariants}
      animate={isCovered ? 'show' : 'hide'}
      whileHover={isCovered ? '' : 'hover'}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
      onTap={onTap}
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <IndexHeader />
      <Flex
        as={motion.div}
        variants={contentVariants}
        initial='hide'
        animate={isCovered ? 'show' : 'hide'}
        transition={{ type: 'spring', duration: 1 }}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [3, 4],
          justifyContent: 'center',
          height: '100%',

          textAlign: 'center'
        }}
      >
        <Hero />
        <Flex sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {children}
        </Flex>
      </Flex>
      <Footer>
        <FooterFootnote>
          Copyright © 2023 Imsety LLC. All rights reserved.
        </FooterFootnote>
        <FooterContent>
          <Flex sx={{ alignItems: 'center' }}>
            <FooterItem href='#'>Contact</FooterItem>
            <FooterItem href='#'>About</FooterItem>
            <ToggleIcon
              onClick={(e) => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default');
              }}
              sx={{
                fontSize: 3,
                marginLeft: 4,
                color: 'text.secondary'
              }}
            >
              {colorMode === 'default' ? <FaMoon /> : <FaSun />}
            </ToggleIcon>
          </Flex>
        </FooterContent>
      </Footer>
      <motion.div
        variants={backgroundVariants}
        animate={isCovered ? 'show' : 'hide'}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'background',
          // backdropFilter: 'blur(30px)',
          opacity: 0.97,
          zIndex: -1
        }}
      />
    </Flex>
  );
}
