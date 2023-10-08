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
