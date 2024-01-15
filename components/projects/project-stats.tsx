import { Flex, Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import CountUp from 'react-countup';
import { Container } from 'theme-ui';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { simpleComponents } from '@/lib/simple-components';

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
  numberDecimals,
  numberSuffix,
  number
}) {
  return (
    <Card>
      <Box sx={{ color: 'primary.regular', fontSize: 6, marginBottom: 3 }}>
        {icon}
      </Box>
      <Flex sx={{ flexDirection: 'column', gap: 2 }}>
        <Heading variant={isHeadingSmall ? 'display.h5' : 'display.h4'}>
          {number ? (
            <CountUp
              end={number}
              decimals={numberDecimals}
              duration={1.5}
              prefix={numberPrefix}
              suffix={numberSuffix}
              enableScrollSpy
            />
          ) : (
            heading
          )}
        </Heading>
        {text && (
          <Text>
            <TinaMarkdown content={text} components={simpleComponents} />
          </Text>
        )}
      </Flex>
    </Card>
  );
}

export function StatGrid({ children }) {
  return (
    <Container
      sx={{
        display: 'flex',
        maxWidth: '1000px',
        flexWrap: 'wrap',
        gap: 3
      }}
    >
      {children}
    </Container>
  );
}
