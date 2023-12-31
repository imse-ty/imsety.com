/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import AboutHero from './about/about-hero';
import Tooltip from './tooltip';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
      <Box sx={{ backgroundColor: 'background', marginTop: -5 }}>
        <motion.div
          style={{ scale }}
          sx={{
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'surface.heavy',
            borderRadius: '48px'
          }}
        >
          <AboutHero />
          <Container sx={{ maxWidth: '900px' }}>
            <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
              <Tooltip label='Timeline' text='2 months' />
              <Tooltip label='Year' text='2023' />
              <Tooltip label='Stress meter' text='Max' />
            </Flex>
            <Text variant='body.summary' sx={{ color: 'secondary.contrast' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
              arcu, fringilla a egestas condimentum, vulputate at purus. Sed
              enim diam, rhoncus congue gravida ultrices, iaculis ac metus.
              Pellentesque eget blandit leo, facilisis fermentum mi.
            </Text>
          </Container>
        </motion.div>
      </Box>
    </div>
  );
}
