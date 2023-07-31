'use client';
import Layout from '@/components/layout';
import PageButton from '@/components/pageButton';
import { Box, Flex, Text, Heading, Button } from 'krado-react';
import { MdInfoOutline } from 'react-icons/md';

export default function Home() {
  return (
    <Layout>
      <Box padding={4} sx={{ height: '100%' }}>
        <Flex
          padding={4}
          sx={{
            height: '100%',
            flexDirection: 'column',
            border: 1,
            borderRadius: 3,
            borderColor: 'surface.thin',
            justifyContent: 'space-between'
          }}
        >
          <Flex
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button
              size="small"
              leftIcon={<MdInfoOutline />}
              sx={{ paddingX: 3, paddingY: 2, borderRadius: 1 }}
            >
              INFO
            </Button>
            <Box
              backgroundColor="divider"
              sx={{
                width: '100%',
                maxWidth: '60px',
                height: '2px'
              }}
            />
            <Text sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              Imsety
            </Text>
          </Flex>
          <Box>
            <Heading
              as="h1"
              variant="display.h5"
              sx={{
                marginBottom: 3,
                fontSize: 6,
                fontWeight: 'bold',
                letterSpacing: 'normal'
              }}
            >
              ◤ Greetings! My name is Imsety. Thanks for stopping by :]
            </Heading>
            <Text variant="body.">Lorem ipsum dolor sit amet.</Text>
          </Box>
          <Flex sx={{ flexDirection: 'column', gap: 2 }}>
            <PageButton>Work</PageButton>
            <PageButton>Play</PageButton>
            <PageButton>Learn</PageButton>
          </Flex>
          <Text variant="body.footnote" sx={{ marginTop: 3 }}>
            Copyright © 2023 SetyMedia, LLC. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
}
