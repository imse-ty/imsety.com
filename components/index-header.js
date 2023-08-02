/** @jsxImportSource theme-ui */

import { Box, Button, Flex, Text } from 'krado-react';
import { MdInfoOutline } from 'react-icons/md';

export default function IndexHeader() {
  return (
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
