/** @jsxImportSource theme-ui */
'use client';
import Layout from '@/components/layout';
import PageButton from '@/components/pageButton';
import { Box, Flex } from 'krado-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import IndexFooter from '@/components/index-footer';
import { MdArrowDownward } from 'react-icons/md';

export default function Home() {
  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(false);

  return (
    <Layout>
      <AnimatePresence>
        <Box
          padding={[4, 5]}
          sx={{ height: '100%' }}
          onWheel={() => setIsMainButtonsVisible(true)}
          onClick={() => setIsMainButtonsVisible(true)}
        >
          <Flex
            padding={[4, 5]}
            sx={{
              position: 'relative',
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

            <AnimatePresence>
              {!isMainButtonsVisible && (
                <motion.div
                  animate={{
                    y: 25,
                    transition: {
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 2
                    }
                  }}
                  exit={{ opacity: 0, y: 100 }}
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: [4, 5],
                    marginX: 'auto',
                    color: 'white',
                    fontSize: 9
                  }}
                  layout
                >
                  <MdArrowDownward />
                </motion.div>
              )}
            </AnimatePresence>
            <IndexFooter />
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}
