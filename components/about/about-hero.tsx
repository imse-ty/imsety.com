/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex } from 'krado-react';

export default function AboutHero() {
  return (
    <Container
      sx={{
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        marginBottom: 5
      }}
    >
      {/* <Image
        alt='My about'
        src='work/space-and-time.png'
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 3
        }}
      /> */}

      <Flex sx={{ flexDirection: 'column', gap: 4, textAlign: 'center' }}>
        <Heading
          variant='display.h1'
          sx={{ marginBottom: 3, color: 'surface.thin' }}
        >
          Hey, my name is&nbsp;Imsety
        </Heading>

        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          I&apos;m an Atlanta-based digital artist and developer. I blend art
          and technology to tell compelling stories.
        </Text>
        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          My journey has led me to collaborate with big names like Chick-fil-A,
          Ford, and Keller Williams, creating everything from satisfying product
          ads to to engaging event openers.
        </Text>
        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          Alongside design, I offer specialized front-end development services.
          If you&apos;re in need of a bespoke website or an engaging landing
          page, let&apos;s collaborate to create digital solutions that
          effectively tell your story.
        </Text>
      </Flex>
    </Container>
  );
}
