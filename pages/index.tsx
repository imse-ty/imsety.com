/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';
import { Box } from 'krado-react';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isContactHidden, setIsContactHidden] = useState(true);

  return (
    <Layout disableScroll={false}>
      <Shade>
        <IndexSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='#work'
        />
      </Shade>
      <Box
        id='reel'
        sx={{
          height: '100vh',
          scrollSnapAlign: 'start'
        }}
      />

      <motion.div
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          scrollSnapAlign: 'start'
        }}
      >
        <IndexSection
          id='work'
          title='Work'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/chick-fil-a.png'
          href='/work'
        />
      </motion.div>
      <motion.div
        onViewportEnter={() => setIsContactHidden(false)}
        onViewportLeave={() => setIsContactHidden(true)}
        sx={{ position: 'sticky', top: 0, zIndex: 1 }}
      >
        <AboutSection
          title='About'
          subtitle='arcu, fringilla.'
          imageAlt='My image'
          imageSrc='work/space-and-time.png'
          href='/about'
        />
      </motion.div>
      <AnimatePresence>
        {!isContactHidden && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: 'fixed',
              width: '100%',
              top: 0,
              left: 0
            }}
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
