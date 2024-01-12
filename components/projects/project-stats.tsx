import { Flex, Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import CountUp from 'react-countup';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: [3, 4],
        flex: '1 1 25%',
        borderRadius: 3,
        backgroundColor: 'background',
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

export function StatCard({
  icon,
  heading,
  text,
  isHeadingSmall,
  numberPrefix,
  numberSuffix,
  number
}) {
  return (
    <Card>
      <Box sx={{ color: 'primary.regular', fontSize: 6, marginBottom: 3 }}>
        {icon}
      </Box>
      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
        <Heading variant={isHeadingSmall ? 'display.h5' : 'display.h3'}>
          {number ? (
            <CountUp
              end={number}
              duration={1}
              prefix={numberPrefix}
              suffix={numberSuffix}
              enableScrollSpy
            />
          ) : (
            heading
          )}
        </Heading>
        {text && <Text>{text}</Text>}
      </Flex>
    </Card>
  );
}

export function StatGrid({ children }) {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        gap: 3,
        marginX: [0, null, null, null, '-25%']
      }}
    >
      {children}
    </Flex>
  );
}
