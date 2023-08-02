/** @jsxImportSource theme-ui */
'use client';
import Layout from '@/components/layout';
import PageButton from '@/components/pageButton';
import { Box, Flex, Text, Heading, Button } from 'krado-react';
import { MdInfoOutline } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import IndexFooter from '@/components/index-footer';

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
              gap: 5,
              border: 1,
              borderRadius: 3,
              borderColor: 'surface.thin',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
          >
            <IndexHeader />

            <Hero />

            {isMainButtonsVisible && (
              <motion.div
                initial="hidden"
                animate="show"
                transition={{ staggerChildren: 0.1 }}
                sx={{
                  display: 'flex',
                  height: '100%',
                  maxHeight: ['100%', '376px'],
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

            <IndexFooter />
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}
