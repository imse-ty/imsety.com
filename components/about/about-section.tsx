/** @jsxImportSource theme-ui */
//@ts-nocheck

import { MdDesignServices, MdInfoOutline, MdTerminal } from 'react-icons/md';

import Text from '../fixed-krado-components/Text';
import { Container, Box, Flex, Grid } from 'krado-react';
import AboutHero from './about-hero';
import Tooltip from '../tooltip';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { AboutCard } from './about-card';

function WhatIDoSection() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1000px',
        gap: 4
      }}
    >
      <Grid sx={{ gap: 3, gridTemplateColumns: ['1fr', '1fr 1fr'] }}>
        <AboutCard
          icon={<MdDesignServices />}
          heading='Motion design'
          text='Creating satisfying animations and visuals for brands and digital platforms.'
          isHeadingSmall={true}
        />
        <AboutCard
          icon={<MdTerminal />}
          heading='Front-end development'
          text='Developing intuitive, visually appealing websites and mobile applications.'
          isHeadingSmall={true}
        />
      </Grid>
    </Container>
  );
}

function Tooltips() {
  return (
    <Container sx={{ maxWidth: '900px' }}>
      <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
        <Tooltip
          label='Location'
          text='Atlanta, GA'
          dividerColor='surface.semiblack'
          labelColor='surface.light'
          textColor='surface.thin'
        />
        <Tooltip
          label='Tools'
          text='After Effects, Cinema 4D, VS Code'
          dividerColor='surface.semiblack'
          labelColor='surface.light'
          textColor='surface.thin'
        />
      </Flex>
    </Container>
  );
}

export default function AboutSection() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <div ref={container}>
      <Box
        id='about'
        sx={{
          backgroundColor: 'background'
        }}
      >
        <motion.div
          style={{ scale }}
          sx={{
            transformOrigin: 'top',
            display: 'flex',
            height: '100vh',
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'surface.heavy',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow: 'soft.highNorth'
          }}
        >
          <Box sx={{ margin: 'auto' }}>
            <AboutHero />
            <WhatIDoSection />
          </Box>
        </motion.div>
      </Box>
    </div>
  );
}
