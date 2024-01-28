import { Box, Flex, Grid } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';

function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4,

        marginY: 4,
        marginX: [0, null, null, null, '-50%'],
        padding: [4, 6],
        flex: '1 1 25%',
        borderRadius: 3,
        backgroundColor: 'surface.heavy',
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
    </Flex>
  );
}

function Mention() {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
      <Text variant='body.pretext' sx={{ color: 'surface.light' }}>
        Production
      </Text>
      <Text variant='body.summary' sx={{ color: 'surface.thin' }}>
        Will Taylor
      </Text>
    </Flex>
  );
}

export default function ProjectCredits() {
  return (
    <Card>
      <Flex
        sx={{
          flexDirection: 'column',
          gap: 3,
          marginBottom: 5,
          maxWidth: '900px'
        }}
      >
        <Heading variant='display.h2' sx={{ color: 'surface.thin' }}>
          Credits
        </Heading>
        <Text variant='body.summary' sx={{ flex: 1, color: 'surface.thin' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          facilisis quam ex, eu vehicula justo sollicitudin pharetra.
        </Text>
      </Flex>
      <Grid
        sx={{
          gridTemplateColumns: '1fr 1fr',
          gap: 6,
          flex: 1
        }}
      >
        <Mention />
        <Mention />
        <Mention />
        <Mention />
      </Grid>
    </Card>
  );
}
