/** @jsxImportSource theme-ui */

import Layout from '@/components/layout';
import Hero from '@/components/hero';
import IndexSection from '@/components/index-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <Layout disableScroll={false}>
      <Hero />
      <IndexSection
        title='Reel'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/beeple-3.png'
        href='/reel'
      />
      <IndexSection
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
