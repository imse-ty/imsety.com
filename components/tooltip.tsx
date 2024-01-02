import { Flex } from 'krado-react';
import Text from './fixed-krado-components/Text';

export default function Tooltip({
  label,
  text,
  dividerColor,
  labelColor,
  textColor
}) {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderColor: dividerColor
      }}
    >
      <Text variant='body.pretext' sx={{ color: labelColor }}>
        {label}
      </Text>
      <Text variant='body.bold' sx={{ color: textColor }}>
        {text}
      </Text>
    </Flex>
  );
}
