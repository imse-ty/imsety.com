/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex, Grid, colors } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { useReward } from 'react-rewards';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function Card({ children, ...rest }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 4,
        position: 'relative',
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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 'all' });
  const { reward } = useReward('rewardId', 'confetti', {
    lifetime: 500,
    spread: 100,
    colors: [
      colors.nut400,
      colors.ptah300,
      colors.usir300,
      colors.sekmet300,
      colors.oshun300
    ],
    position: 'absolute',
    elementSize: 20
  });

  useEffect(() => {
    reward();
  }, [isInView]);

  return (
    <div ref={ref}>
      <Card>
        <span
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            top: 0,
            bottom: 0
          }}
          id='rewardId'
        />
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
    </div>
  );
}
