import { Flex, Box } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import CountUp from 'react-countup';
import { Container } from 'krado-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { simpleComponents } from '@/lib/simple-components';

function Card({ children, ...rest }) {
  return (
    <Box
      sx={{
        padding: 4,
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
        <Heading
          as="h3"
          variant="display.h4"
          sx={{
            fontSize: isHeadingSmall ? [5, 6] : [6, null, 7, 8],
            lineHeight: isHeadingSmall ? '28px' : '40px'
          }}
        >
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
        {text && <TinaMarkdown content={text} components={simpleComponents} />}
      </Flex>
    </Card>
  );
}

export function StatGrid({ children }) {
  return (
    <Container
      sx={{
        display: 'flex',
        maxWidth: '1105px',
        flexDirection: ['column', 'row'],
        flexWrap: ['none', 'wrap'],
        gap: 3
      }}
    >
      {children}
    </Container>
  );
}
