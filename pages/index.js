/** @jsxImportSource theme-ui */
'use client';
import { useState } from 'react';
import Layout from '@/components/layout';
import { Box, Button, Flex } from 'krado-react';
import { AnimatePresence, motion } from 'framer-motion';
import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import IndexFooter from '@/components/index-footer';
import SocialMediaIcons from '@/components/social-media-icons';
import { MdInfoOutline } from 'react-icons/md';
import { useColorMode } from 'theme-ui';

export default function Home() {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(false);

  setInterval(() => setIsMainButtonsVisible(true), 2000);

  return (
    <Layout>
      <AnimatePresence>
        <Box padding={[4, 5]} sx={{ height: '100%' }}>
          <Flex
            padding={[4, 5]}
            sx={{
              position: 'relative',
              height: '100%',
              flexDirection: 'column',
              gap: 5,
              border: 1,
              borderRadius: 3,
              borderColor: 'divider',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
          >
            <IndexHeader />

            <Flex sx={{ flexDirection: 'column', gap: 4 }}>
              <Hero />
              {isMainButtonsVisible && (
                <Flex sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <SocialMediaIcons />
                  {/* <motion.div
                  initial={{ width: '0px' }}
                  animate={{ width: '80px' }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: [0.485, 0.005, 0.17, 1.0]
                  }}
                  sx={{
                    height: '2px',
                    width: '80px',
                    backgroundColor: 'surface.extralight'
                  }}
                />
                <Flex sx={{ gap: 3 }}>
                  <Button
                    as={motion.button}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ type: 'spring', delay: 0.7 }}
                    leftIcon={<MdInfoOutline />}
                    sx={{
                      paddingX: 4,
                      paddingY: 3,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      fontWeight: 300
                    }}
                  >
                    About
                  </Button>
                  <Button
                    as={motion.button}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ type: 'spring', delay: 0.9 }}
                    leftIcon={<MdInfoOutline />}
                    sx={{
                      paddingX: 4,
                      paddingY: 3,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      fontWeight: 300
                    }}
                  >
                    Contact
                  </Button>
                </Flex> */}
                </Flex>
              )}
            </Flex>

            <IndexFooter />
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}
