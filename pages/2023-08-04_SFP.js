/** @jsxImportSource theme-ui */
'use client';
import Layout from '@/components/layout';
import { Box, Button, Flex, colors } from 'krado-react';
import { AnimatePresence, motion } from 'framer-motion';
import IndexHeader from '@/components/index-header';
import Hero from '@/components/hero';
import IndexFooter from '@/components/index-footer';
import {
  MdArrowDownward,
  MdFolderOpen,
  MdOutlineReceipt
} from 'react-icons/md';
import { useState } from 'react';

export default function Home() {
  const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(false);

  setInterval(() => setIsMainButtonsVisible(true), 5000);

  return (
    <Layout>
      <AnimatePresence>
        <Box
          as={motion.div}
          padding={[4, 5]}
          sx={{ height: '100%' }}
          initial={{ color: colors.nso800, backgroundColor: colors.nso200 }}
          animate={{ color: colors.nso200, backgroundColor: colors.nso1000 }}
        >
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

                <Flex
                  sx={{ flexDirection: ['column', null, 'row'], gap: [2, 4] }}
                >
                  <motion.a
                    href="https://link.waveapps.com/apqs4s-myakun"
                    target="_blank"
                    rel="noopener"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.5, type: 'spring' }
                    }}
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                      stiffness: 300
                    }}
                    sx={{
                      display: 'flex',
                      width: '100%',
                      gap: 3,
                      textDecoration: 'none'
                    }}
                  >
                    <Button
                      sx={{
                        width: '100%',
                        height: ['75px', '100px'],
                        fontFamily: 'display',
                        fontSize: [1, 4],
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        borderRadius: 3
                      }}
                      leftIcon={<MdOutlineReceipt sx={{ fontSize: 5 }} />}
                    >
                      View Invoice
                    </Button>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/open?id=1CV7iE3FuaDnGc6YVYREWer1rE4KasSrK&usp=drive_fs"
                    target="_blank"
                    rel="noopener"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.5, type: 'spring' }
                    }}
                    whileHover={{ scale: 0.9 }}
                    transition={{
                      type: 'spring',
                      duration: 0.5,
                      stiffness: 300
                    }}
                    sx={{
                      display: 'flex',
                      width: '100%',
                      gap: 3,
                      textDecoration: 'none'
                    }}
                  >
                    <Button
                      sx={{
                        width: '100%',
                        height: ['75px', '100px'],
                        fontFamily: 'display',
                        fontSize: [1, 4],
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        borderRadius: 3
                      }}
                      leftIcon={<MdFolderOpen sx={{ fontSize: 5 }} />}
                    >
                      View Deliverables
                    </Button>
                  </motion.a>
                </Flex>
              </Flex>
            )}

            <IndexFooter />
          </Flex>
        </Box>
      </AnimatePresence>
    </Layout>
  );
}
