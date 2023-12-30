/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import { Container, Image } from 'krado-react';

export default function AboutHero() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        marginTop: 6,
        marginBottom: 5
      }}
    >
      <Image
        alt='My about'
        src='work/space-and-time.png'
        sx={{
          width: '100%',
          objectFit: 'none',
          borderRadius: '40px'
        }}
      />
      <Heading
        variant='display.display'
        sx={{
          marginBottom: [1, 2]
        }}
      >
        About
      </Heading>
    </Container>
  );
}
