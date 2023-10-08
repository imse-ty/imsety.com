/** @jsxImportSource theme-ui */

import { Box, Flex, Text } from 'krado-react';

export default function IndexHeader() {
  return (
    <Flex
      sx={{
        justifyContent: 'right',
        alignItems: 'center'
      }}
    >
      <Box
        backgroundColor="divider"
        sx={{
          width: '100%',
          maxWidth: '60px',
          height: '2px',
          display: ['block', 'none']
        }}
      />
      <Text
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontStretch: 'expanded',
          fontSize: [5, 6]
        }}
      >
        Imsety
      </Text>
    </Flex>
  );
}
