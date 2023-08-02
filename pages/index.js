/** @jsxImportSource theme-ui */
'use client';
import Layout from '@/components/layout';
import PageButton from '@/components/pageButton';
import { Box, Flex, Text, Heading, Button } from 'krado-react';
import { MdInfoOutline } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsMainButtonsVisible(true);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout>
      <AnimatePresence>
        <Box padding={[4, 5]} sx={{ height: '100%' }}>
          <Flex
            padding={[4, 5]}
            sx={{
              height: '100%',
              flexDirection: 'column',
              border: 1,
              borderRadius: 3,
              borderColor: 'surface.thin',
              justifyContent: 'space-between'
            }}
          >
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Button
                size="small"
                leftIcon={<MdInfoOutline />}
                sx={{ paddingX: 3, paddingY: 2, borderRadius: 1 }}
              >
                INFO
              </Button>
              <Box
                backgroundColor="divider"
                sx={{
                  width: '100%',
                  maxWidth: '60px',
                  height: '2px',
                  display: ['block', 'none']
                }}
              />
              <Text
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontStretch: 'expanded',
                  fontSize: [5, 6]
                }}
              >
                Imsety
              </Text>
            </Flex>

            {/* Hero */}
            <motion.div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh'
              }}
              layout
            >
              <motion.h1
                transition={{ type: 'spring', damping: 15 }}
                as="h1"
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
                ◤ Greetings! My name is Imsety. Thanks for stopping by :]
              </motion.h1>
              <motion.p
                transition={{ type: 'spring', damping: 13 }}
                sx={{ color: 'surface.light', fontSize: [1, 6] }}
                layout
              >
                Lorem ipsum dolor sit amet.
              </motion.p>
            </motion.div>
            {/* Main buttons */}

            {isMainButtonsVisible && (
              <motion.div
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.1 }}
                sx={{
                  display: 'flex',
                  height: '100vh',
                  flexDirection: ['column', null, 'row'],
                  gap: [2, null, 4]
                }}
                layout
              >
                <PageButton>Work</PageButton>
                <PageButton>Play</PageButton>
                <PageButton>Learn</PageButton>
              </motion.div>
            )}

            <Text variant="body.footnote" sx={{ marginTop: 3 }}>
              Copyright © 2023 Imsety Taylor. All rights reserved.
            </Text>
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}
