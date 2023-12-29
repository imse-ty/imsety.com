/** @jsxImportSource theme-ui */
// @ts-nocheck

import {
  Button,
  Flex,
  Footer,
  FooterContent,
  FooterFootnote,
  FooterItem,
  ToggleIcon
} from 'krado-react';

import IndexHeader from '@/components/index-header';

import Hero from '@/components/hero';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from 'theme-ui';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ShadeHero() {
  const [colorMode, setColorMode] = useColorMode('dark');

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <IndexHeader />
      <Flex
        as={motion.div}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: 'spring', duration: 1 }}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 5
        }}
      >
        <Hero />

        <Flex sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link href='#'>
            <Button size='small' sx={{ borderRadius: 2, fontWeight: 500 }}>
              Play reel
            </Button>
          </Link>
          <Link href='#'>
            <Button
              variant='ghost'
              size='small'
              sx={{
                borderRadius: 2,
                fontWeight: 500,
                borderColor: 'white',
                color: 'white'
              }}
            >
              View work
            </Button>
          </Link>
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
    </Flex>
  );
}
