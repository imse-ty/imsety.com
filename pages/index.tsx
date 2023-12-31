/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';

import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <Layout>
      <Shade>
        <IndexSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='#work'
        />
      </Shade>

      <IndexSection
        title='Work'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/chick-fil-a.png'
        href='/work'
      />
      <AboutSection
        title='About'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/space-and-time.png'
        href='/about'
      />
      <ContactSection />
    </Layout>
  );
}
