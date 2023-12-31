/** @jsxImportSource theme-ui */

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';

import { Box } from 'krado-react';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

export default function NewHome() {
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
          height: '100vh'
        }}
      />

      <IndexSection
        id='work'
        title='Work'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/chick-fil-a.png'
        href='/work'
      />
      <AboutSection
        title='About'
        subtitle='arcu, fringilla.'
        imageAlt='My image'
        imageSrc='work/space-and-time.png'
        href='/about'
      />
      <ContactSection />
    </Layout>
  );
}
