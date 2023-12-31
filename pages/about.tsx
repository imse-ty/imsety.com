/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex } from 'krado-react';
import Layout from '@/components/layout';
import AboutHero from '@/components/about/about-hero';
import ContactSection from '@/components/contact-section';
import Tooltip from '@/components/tooltip';

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <Container sx={{ maxWidth: '900px' }}>
        <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
          <Tooltip label='Timeline' text='2 months' />
          <Tooltip label='Year' text='2023' />
          <Tooltip label='Stress meter' text='Max' />
        </Flex>
        <Text variant='body.summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
          arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
          diam, rhoncus congue gravida ultrices, iaculis ac metus. Pellentesque
          eget blandit leo, facilisis fermentum mi.
        </Text>
      </Container>
      <ContactSection />
    </Layout>
  );
}
