/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Box, Image } from 'krado-react';

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
      <Image
        alt='My about'
        src='work/space-and-time.png'
        sx={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: '40px'
        }}
      />

      <Box sx={{ textAlign: 'center' }}>
        <Heading
          variant='display.h1'
          sx={{ marginBottom: 2, color: 'surface.extralight' }}
        >
          About
        </Heading>

        <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Box>
    </Container>
  );
}
