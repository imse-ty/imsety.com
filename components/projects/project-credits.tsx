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
        marginX: [0, null, null, '-25%', '-50%'],
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

function Mention({ title, name, url }) {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 2 }}>
      {title && (
        <Text variant="body.pretext" sx={{ color: 'surface.light' }}>
          {title}
        </Text>
      )}
      {name && (
        <a
          href={url}
          target="_blank"
          rel="noindex nofollow"
          sx={{ textDecoration: 'none' }}
        >
          <Text
            variant="body.summary"
            sx={{
              alignText: 'center',
              color: 'surface.thin',
              transition: 'color, font-weight 0.5s',
              '&:hover': {
                color: 'surface.extrathin',
                fontWeight: 600
              }
            }}
          >
            {name}
          </Text>
        </a>
      )}
    </Flex>
  );
}

export default function ProjectCredits({ text, names }) {
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
    elementSize: 15
  });

  useEffect(() => {
    reward();
  }, [isInView]);

  return (
    <figure ref={ref}>
      <Card>
        <span
          sx={{
            position: 'absolute'
          }}
          id="rewardId"
        />
        <Flex
          sx={{
            flexDirection: 'column',
            gap: [2, 3],
            marginBottom: [3, 5],
            maxWidth: '900px'
          }}
        >
          <Heading variant="display.h2" sx={{ color: 'surface.thin' }}>
            Credits
          </Heading>
          <Text variant="body.summary" sx={{ flex: 1, color: 'surface.thin' }}>
            {text}
          </Text>
        </Flex>
        <Grid
          sx={{
            gridTemplateColumns: '1fr 1fr',
            gap: [4, 6],
            flex: 1
          }}
        >
          {names.map((name, index) => {
            return (
              <Mention
                title={name.title}
                name={name.name}
                url={name.url}
                key={index}
              />
            );
          })}
        </Grid>
      </Card>
    </figure>
  );
}
