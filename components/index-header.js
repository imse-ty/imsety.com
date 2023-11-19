/** @jsxImportSource theme-ui */

import { Container, Flex, Text } from 'krado-react';

export default function IndexHeader() {
  return (
    <Container>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: [4, 5]
        }}
      >
        <Text
          sx={{
            marginLeft: 'auto',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontStretch: 'expanded',
            fontSize: [5, 6]
          }}
        >
          Imsety
        </Text>
      </Flex>
    </Container>
  );
}
