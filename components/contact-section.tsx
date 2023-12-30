/** @jsxImportSource theme-ui */

import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex } from 'krado-react';
import SiteFooter from './site-footer';

export default function ContactSection() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: 'background'
      }}
    >
      <Container
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
          <a href='mailto:greetings@imsety.com' sx={{ textDecoration: 'none' }}>
            <Heading
              variant='display.h2'
              sx={{
                fontSize: [7, 8, 9],
                marginBottom: [3, 4]
              }}
            >
              greetings@imsety.com
            </Heading>
          </a>
          <Text variant='body.h3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Flex>
      </Container>
      <SiteFooter />
    </Flex>
  );
}
