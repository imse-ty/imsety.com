/** @jsxImportSource theme-ui */

import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import SiteFooter from './site-footer';

export default function ContactSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'surface.heavy'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'surface.extraheavy',
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
                  marginBottom: [3, 4],
                  color: 'secondary.contrast'
                }}
              >
                greetings@imsety.com
              </Heading>
            </a>
            <Text variant='body.h3' sx={{ color: 'surface.extralight' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Container>
          <SiteFooter />
        </Flex>
      </Box>
    </Box>
  );
}
