/** @jsxImportSource theme-ui */

import Heading from './fixed-krado-components/Heading';
import { Flex, Text } from 'krado-react';

export default function Hero() {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Heading
        variant='display.display'
        sx={{
          marginBottom: [2, 3],
          fontWeight: '600',
          fontSize: '140px'
        }}
      >
        Still coming back? 👀
      </Heading>
    </Flex>
  );
}
