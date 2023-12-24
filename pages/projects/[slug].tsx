/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { Box, Container, Flex, Image, Button } from 'krado-react';

export function ProjectStat({ children }) {
  return (
    <Text
      variant='body.h1'
      sx={{ borderLeft: 1, borderColor: 'divider', paddingX: 4 }}
    >
      {children}
    </Text>
  );
}

const mdxComponents = {
  Button,
  Image
};

export default function Project({ post }) {
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
        <Flex
          as='header'
          sx={{
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw'
          }}
        >
          <Image
            alt='My alt'
            src='/work/beloved-benefit-2.jpg'
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '75%'
            }}
          />
          <Container sx={{ height: '100%' }}>
            <Flex
              sx={{
                flexDirection: ['column', null, null, 'row'],
                width: '100%',
                height: '100%',
                justifyContent: ['left', null, null, 'space-between'],
                gap: [5, null, null, 0],
                alignItems: ['left', null, null, 'center']
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                <Heading variant='display.display' sx={{ marginBottom: 3 }}>
                  Beloved Benefit
                </Heading>
                <Text
                  variant='body.summary'
                  sx={{
                    fontWeight: 400
                  }}
                >
                  Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                  adipiscing augue sit.
                </Text>
              </Flex>
              <Flex>
                <ProjectStat>800 Hrs</ProjectStat>
                <ProjectStat>$130k</ProjectStat>
                <ProjectStat>88.00</ProjectStat>
              </Flex>
            </Flex>
          </Container>
        </Flex>

        <Box
          sx={{ backgroundColor: 'red', width: '100%', height: '100vh' }}
        ></Box>
      </Flex>
    </Layout>
  );
}
