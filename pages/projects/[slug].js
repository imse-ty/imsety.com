/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { Box, Container, Flex, Image } from 'krado-react';

export default function Project() {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6],
          position: 'relative'
        }}
      >
        <header sx={{ overflow: 'hidden' }}>
          <Flex
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '75vh',
              position: 'relative'
            }}
          >
            <Heading
              variant="display.display"
              sx={{ position: 'absolute', zIndex: 1 }}
            >
              Beloved Benefit
            </Heading>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                opacity: 0.5
              }}
            />
            <Image
              alt="My alt"
              src="/work/beloved-benefit-2.jpg"
              sx={{ objectFit: 'cover' }}
            />
          </Flex>
        </header>

        <Flex>
          <Text>Stat</Text>
          <Text>Stat</Text>
          <Text>Stat</Text>
        </Flex>

        <Container sx={{ color: 'white' }}>## My content Hello?</Container>
      </Flex>
    </Layout>
  );
}
