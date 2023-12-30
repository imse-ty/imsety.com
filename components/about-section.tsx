/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex, Button, Image } from 'krado-react';

export default function AboutSection({ imageSrc, imageAlt, title, subtitle }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          marginTop: 'auto',
          marginBottom: 5,
          zIndex: 1
        }}
      >
        <Image
          alt={imageAlt}
          src={imageSrc}
          width='500'
          height='1000'
          sx={{
            height: '70vh',
            width: '100%',
            maxWidth: '900px',
            objectFit: 'none',
            borderRadius: '40px'
          }}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <Heading
            variant='display.h2'
            sx={{
              marginBottom: [1, 2]
            }}
          >
            {title}
          </Heading>
          <Text>{subtitle}</Text>
        </Flex>
        <Button leftIcon={<MdNorthEast />}>Explore</Button>
      </Container>
    </Flex>
  );
}
