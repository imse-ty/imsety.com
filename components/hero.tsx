/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex, Button } from 'krado-react';
import SiteFooter from './site-footer';
import { motion } from 'framer-motion';
import Header from './site-header';

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
      <Header />
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
          marginY: 'auto'
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
            An animator and developer
            <br />
            on a&nbsp;mission
          </Heading>
          <Text variant='body.summary'>
            Turning creative ideas into reality by mixing a little bit of art
            with a little of tech.
          </Text>
        </Flex>
        <a href='#work' sx={{ textDecoration: 'none' }}>
          <Button leftIcon={<MdNorthEast />} sx={{}}>
            View work
          </Button>
        </a>
      </Container>
    </Flex>
  );
}
