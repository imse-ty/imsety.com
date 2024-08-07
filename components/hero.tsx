/** @jsxImportSource theme-ui */

import { MdNorthEast, MdPlayArrow } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex, Button } from 'krado-react';
import SiteFooter from './site-footer';
import { motion } from 'framer-motion';
import Header from './site-header';

export default function Hero({ primaryButtonOnClick }) {
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
          gap: [4, 5],
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
            as='h1'
            variant='display.display'
            sx={{
              marginBottom: [2, 3]
            }}
          >
            A creator and technologist
            <br />
            on a&nbsp;mission
          </Heading>
          <Text as='p' variant='body.summary'>
            Turning creative ideas into reality by mixing a little bit of art
            with a little of tech.
          </Text>
        </Flex>
        <Flex
          sx={{
            flexDirection: ['column', null, 'row'],
            gap: 3
          }}
        >
          <a href='#intro' data-umami-event='play-intro-button'>
            <Button
              leftIcon={<MdPlayArrow />}
              onClick={primaryButtonOnClick}
              sx={{ width: '100%' }}
            >
              Watch intro
            </Button>
          </a>
          <a href='#about' data-umami-event='about-me-button'>
            <Button
              variant='ghost'
              leftIcon={<MdNorthEast />}
              sx={{ width: '100%' }}
            >
              About me
            </Button>
          </a>
        </Flex>
      </Container>
    </Flex>
  );
}
