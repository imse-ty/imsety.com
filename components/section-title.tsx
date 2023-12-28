import { Box, Flex, Text } from 'krado-react';
import Heading from './fixed-krado-components/Heading';

export default function SectionTitle({ title, summary }) {
  return (
    <Flex
      sx={{
        flexDirection: ['column', null, 'row'],
        marginBottom: [4, null, 5],
        borderRadius: '24px',
        border: '2px solid',
        paddingX: [0, null, 6],
        borderColor: 'secondary.bold',
        height: ['180px', '200px', null, '150px']
      }}
    >
      <Heading
        variant="display.h2"
        sx={{
          paddingX: [4, null, 0],
          marginY: 'auto',
          fontWeight: '500'
        }}
      >
        {title}
      </Heading>
      <Box
        sx={{
          marginX: [0, null, 6],
          width: ['100%', null, '2px'],
          height: ['2px', null, '100%'],
          backgroundColor: 'secondary.bold'
        }}
      />
      <Text
        as="p"
        variant="body.h3"
        sx={{
          paddingX: [4, null, 0],

          marginY: 'auto',
          maxWidth: ['none', null, '50%']
        }}
      >
        {summary}
      </Text>
    </Flex>
  );
}
