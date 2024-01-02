/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import { Container, Box, Flex, Image } from 'krado-react';
import { MdExpandMore } from 'react-icons/md';

function ScrollButton() {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 3,
        color: 'surface.black',
        backgroundColor: 'surface.light',
        zIndex: 2,
        fontSize: 7
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
          zIndex: 2
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <Heading
            variant='display.h1'
            sx={{
              color: 'secondary.contrast',
              marginBottom: [1, 2]
            }}
          >
            {title}
          </Heading>
          <Text variant='body.summary' sx={{ color: 'secondary.contrast' }}>
            {subtitle}
          </Text>
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
            zIndex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 60%, ${getColor(
              setyTheme,
              'secondary.bold'
            )} 100%)`
          }}
        />
        <Image
          as={motion.img}
          alt={imageAlt}
          src={imageSrc}
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          sx={{
            width: '100vw',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
          transition={{ type: 'spring', stiffness: 40 }}
        />
      </Box>
    </Flex>
  );
}
