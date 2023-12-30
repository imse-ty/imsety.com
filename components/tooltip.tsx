import { Flex } from 'krado-react';
import Text from './fixed-krado-components/Text';

export default function Tooltip({ label, text }) {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Text variant='body.pretext' sx={{ color: 'text.secondary' }}>
        {label}
      </Text>
      <Text variant='body.bold'>{text}</Text>
    </Flex>
  );
}
