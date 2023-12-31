/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Image } from 'krado-react';

export default function AboutHero() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        marginBottom: 5
      }}
    >
      <Container sx={{ textAlign: 'center' }}>
        <Heading variant='display.h1' sx={{ marginBottom: 2 }}>
          About
        </Heading>

        <Text variant='body.summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Container>
      <Image
        alt='My about'
        src='work/space-and-time.png'
        sx={{
          width: '100%',
          objectFit: 'none',
          borderRadius: '40px'
        }}
      />
    </Container>
  );
}
