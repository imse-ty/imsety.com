/** @jsxImportSource theme-ui */
// @ts-nocheck

'use client';
import { useState } from 'react';
import Layout from '@/components/layout';
import {
  Button,
  Flex,
  Footer,
  FooterContent,
  FooterFootnote,
  FooterItem,
  ToggleIcon
} from 'krado-react';
import { motion } from 'framer-motion';
import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from 'theme-ui';
import Link from 'next/link';

export default function Home() {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  const [colorMode, setColorMode] = useColorMode('dark');

  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(true);

  // setInterval(() => setIsMainButtonsVisible(true), 3000);

  return (
    <Layout>
      {/* <Shade /> */}
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <IndexHeader />
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: 5
          }}
        >
          <Hero />
          {isMainButtonsVisible && (
            <Flex sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Link href='/work'>
                <Button
                  as={motion.button}
                  variants={buttonVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ type: 'spring', delay: 2, duration: 2 }}
                  size='small'
                  sx={{
                    borderRadius: 2,

                    fontWeight: 500
                  }}
                >
                  Play reel
                </Button>
              </Link>
              <Link href='/play'>
                <Button
                  as={motion.button}
                  variants={buttonVariants}
                  initial='hidden'
                  animate='visible'
                  transition={{ type: 'spring', delay: 2.3, duration: 2 }}
                  variant='ghost'
                  size='small'
                  sx={{
                    borderRadius: 2,
                    fontWeight: 500,
                    borderColor: 'black',
                    color: 'black'
                  }}
                >
                  View work
                </Button>
              </Link>
            </Flex>
          )}
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
    </Layout>
  );
}
