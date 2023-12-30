/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex, Button } from 'krado-react';
import SiteFooter from './site-footer';

export default function Hero() {
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
        <Button leftIcon={<MdNorthEast />} sx={{ display: ['none', 'block'] }}>
          Explore
        </Button>
      </Container>
      <SiteFooter />
    </Flex>
  );
}
