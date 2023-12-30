/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex, Button, Image } from 'krado-react';
import Link from 'next/link';

export default function IndexSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  href
}) {
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
        <Link href={href}>
          <Button leftIcon={<MdNorthEast />}>Explore</Button>
        </Link>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: 'auto'
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
          sx={{ height: '100%', width: 'auto', objectFit: 'cover' }}
        />
      </Box>
    </Flex>
  );
}
