/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Box, Link } from 'krado-react';

export default function AboutHero() {
  return (
    <Container
      sx={{
        maxWidth: '900px',
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

      <Box sx={{ textAlign: 'center' }}>
        <Heading
          variant='display.h1'
          sx={{ marginBottom: 3, color: 'surface.extralight' }}
        >
          About
        </Heading>

        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          Greetings! 👋🏾 I&apos;m Imsety, an Atlanta-based motion designer,
          developer, and creator creating stunning digital media experiences.
          From brand films to event openers and logo animations I&apos;ve worked
          with top brands to bring their ideas to life.
          <br />
          <br />
          With skills in web and app development, I build custom solutions for
          unique problems. Got one?{' '}
          <Link
            href='#contact'
            sx={{ color: 'surface.light', borderColor: 'surface.light' }}
          >
            Let&apos;s connect!
          </Link>
        </Text>
      </Box>
    </Container>
  );
}
