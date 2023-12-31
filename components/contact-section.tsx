/** @jsxImportSource theme-ui */

import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import SiteFooter from './site-footer';

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#36454f'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1B1212',
          borderRadius: '48px 48px 0px 0px'
        }}
      >
        <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
          <Container sx={{ marginTop: 'auto', textAlign: 'center' }}>
            <a
              href='mailto:greetings@imsety.com'
              sx={{ textDecoration: 'none' }}
            >
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
          </Container>
          <SiteFooter />
        </Flex>
      </Box>
    </Box>
  );
}
