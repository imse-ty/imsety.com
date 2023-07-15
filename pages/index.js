'use client';
import PageButton from '@/components/pageButton';
import { Box, Flex, Text, Heading, colors, Button } from 'krado-react';
import { MdInfoOutline } from 'react-icons/md';

export default function Home() {
  return (
    <Box
      as="main"
      sx={{
        height: '100vh'
      }}
    >
      <Box
        padding={4}
        color={colors.nso200}
        backgroundColor={colors.nso1000}
        sx={{ height: '100%' }}
      >
        <Flex
          padding={4}
          sx={{
            height: '100%',
            flexDirection: 'column',
            border: 1,
            borderColor: colors.nso100,
            borderRadius: 3,
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
              sx={{
                width: '100%',
                maxWidth: '60px',
                height: '2px',
                backgroundColor: colors.nso100
              }}
            />
            <Text
              color="inherit"
              sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Imsety
            </Text>
          </Flex>
          <Box>
            <Heading
              as="h1"
              variant="display.h5"
              color="inherit"
              sx={{ fontWeight: 'bold', marginBottom: 3 }}
            >
              Greetings! My name is Imsety. Thanks for stopping by :]
            </Heading>
            <Text variant="body." color={colors.nso300}>
              Lorem ipsum dolor sit amet.
            </Text>
          </Box>
          <Flex sx={{ flexDirection: 'column', gap: 2 }}>
            <PageButton>Work</PageButton>
            <PageButton>Play</PageButton>
            <PageButton>Learn</PageButton>
          </Flex>
          <Text
            variant="body.footnote"
            color={colors.nso300}
            sx={{ marginTop: 3 }}
          >
            Copyright © 2023 SetyMedia, LLC. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
