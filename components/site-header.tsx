import { Flex } from 'krado-react';
import Text from './fixed-krado-components/Text';

export default function Header() {
  return (
    <Flex
      sx={{
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: [4, 5],
        justifyContent: 'right'
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
