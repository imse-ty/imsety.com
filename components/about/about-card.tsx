import { Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import { Flex } from 'theme-ui';
import Text from '../fixed-krado-components/Text';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: 4,
        flex: '1 1 25%',
        borderRadius: 3,
        backgroundColor: 'surface.black',
        boxShadow: 'soft.low',
        transition: 'transform 325ms ease, box-shadow 325ms ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 'soft.highMiddle'
        }
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
export function AboutCard({ icon, heading, text, isHeadingSmall }) {
  return (
    <Card>
      <Box sx={{ color: 'surface.light', fontSize: 6, marginBottom: 3 }}>
        {icon}
      </Box>
      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
        <Heading
          variant={isHeadingSmall ? 'display.h5' : 'display.h4'}
          sx={{ color: 'surface.extralight' }}
        >
          {heading}
        </Heading>
        {text && <Text sx={{ color: 'surface.extralight' }}>{text}</Text>}
      </Flex>
    </Card>
  );
}
