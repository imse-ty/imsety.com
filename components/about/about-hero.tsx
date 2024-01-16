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
          Hey, my name
          <br />
          is&nbsp;Imsety
        </Heading>

        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          I am a motion designer and developer in Atlanta. I love blending
          design and technology to tell good stories.
        </Text>
        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          My journey has led me to collaborate with Ford, Chick-fil-A, and
          Keller Williams. I create satisfying music videos, engaging event
          openers, social content, product ads, custom websites, landing pages,
          and more.
        </Text>
        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          Let&apos;s connect and make something amazing.
        </Text>
      </Flex>
    </Container>
  );
}
