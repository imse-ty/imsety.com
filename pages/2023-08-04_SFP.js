/** @jsxImportSource theme-ui */
'use client';
import Layout from '@/components/layout';
import PageButton from '@/components/pageButton';
import { Box, Button, Flex } from 'krado-react';
import { AnimatePresence, motion } from 'framer-motion';

import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import IndexFooter from '@/components/index-footer';
import { MdArrowDownward, MdReceipt, MdReceiptLong } from 'react-icons/md';

import { FaReceipt } from 'react-icons/fa6';
import { useState } from 'react';

export default function Home() {
  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(false);

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
              border: 1,
              borderRadius: 3,
              borderColor: 'surface.thin',
              justifyContent: 'space-between',
              overflow: 'hidden'
            }}
          >
            <IndexHeader />

            <Hero />

            <AnimatePresence>
              {isMainButtonsVisible && (
                <Flex
                  sx={{
                    flexDirection: 'column'
                  }}
                >
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
                      marginX: 'auto',
                      color: 'white',
                      fontSize: 9,
                      marginBottom: 5
                    }}
                    layout
                  >
                    <MdArrowDownward />
                  </motion.div>

                  <motion.a
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                      stiffness: 300
                    }}
                    sx={{ width: '100%' }}
                  >
                    <Button
                      sx={{
                        width: '100%',
                        height: '100px',
                        fontFamily: 'display',
                        fontSize: 4,
                        fontWeight: 500,
                        textTransform: 'uppercase'
                      }}
                      leftIcon={<FaReceipt sx={{ fontSize: 5 }} />}
                    >
                      View Invoice
                    </Button>
                  </motion.a>
                </Flex>
              )}
            </AnimatePresence>

            <IndexFooter />
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}