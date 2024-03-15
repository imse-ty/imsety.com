/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex, Link } from 'krado-react';

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
          as='h2'
          variant='display.h1'
          sx={{ marginBottom: 3, color: 'surface.thin' }}
        >
          Hey, my name
          <br />
          is&nbsp;Imsety
        </Heading>

        <Text
          as='p'
          variant='body.summary'
          sx={{ color: 'surface.extralight' }}
        >
          I am the founder of{' '}
          <Link
            href='https://setangle.com/'
            target='_blank'
            rel='noindex nofollow'
            sx={{ color: 'surface.light', borderColor: 'surface.light' }}
          >
            Set Angle
          </Link>
          , a multidisciplinary digital creative agency specializing in
          animation, technology, and sound to deliver soulful experiences that
          captivate and inspire.
        </Text>
        <Text
          as='p'
          variant='body.summary'
          sx={{ color: 'surface.extralight' }}
        >
          I partner with creative individuals to spotlight brands like Ford,
          Chick-fil-A, and Keller Williams, specializing in creating captivating
          visuals for events, music, and advertising that resonate deeply with
          audiences. Based in Atlanta, my passion lies in crafting soulful brand
          experiences that inspire the culture we live in today.
        </Text>
        <Text
          as='p'
          variant='body.summary'
          sx={{ color: 'surface.extralight' }}
        >
          Creativity has been my playground since childhood, sparked by my first
          laptop at six and diving into motion design and coding by eight. Along
          the way, I discovered beat-making, shaping my unique vibe of weaving
          stories through animation, technology, design, and sound.
        </Text>
        <Text
          as='p'
          variant='body.summary'
          sx={{ color: 'surface.extralight' }}
        >
          Let&apos;s connect and make something amazing.
        </Text>
      </Flex>
    </Container>
  );
}
