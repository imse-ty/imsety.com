/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Box, Flex, Image } from 'krado-react';
import { MdExpandMore } from 'react-icons/md';

function ScrollButton() {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 4,
        backgroundColor: 'primary.regular',
        zIndex: 1,
        fontSize: 8
      }}
    >
      <MdExpandMore />
    </Flex>
  );
}

export default function ProjectHeader({ imageSrc, imageAlt, title, subtitle }) {
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
      </Container>
      <ScrollButton />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: 'auto',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 4.23%, #180544 100%)'
          }}
        />
        <Image
          alt={imageAlt}
          src={imageSrc}
          sx={{ width: '100vw', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Flex>
  );
}
