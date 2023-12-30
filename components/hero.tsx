/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex, Button } from 'krado-react';
import SiteFooter from './site-footer';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <Container
        as={motion.div}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          marginTop: 'auto'
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            textAlign: 'center'
          }}
        >
          <Heading
            variant='display.display'
            sx={{
              marginBottom: [2, 3]
            }}
          >
            Lorem ipsum!
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            arcu, fringilla a egestas condimentum, vulputate at purus.
          </Text>
        </Flex>
        <a href='#reel' sx={{ textDecoration: 'none' }}>
          <Button
            leftIcon={<MdNorthEast />}
            sx={{ display: ['none', 'block'] }}
          >
            Explore
          </Button>
        </a>
      </Container>
      <SiteFooter />
    </Flex>
  );
}
