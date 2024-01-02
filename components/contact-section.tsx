/** @jsxImportSource theme-ui */

import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import SiteFooter from './site-footer';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection({ useTransparentBackground }) {
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
        sx={{
          backgroundColor: useTransparentBackground
            ? 'transparent'
            : 'surface.heavy',
          marginTop: -5
        }}
      >
        <motion.div
          id='contact'
          style={{ scale }}
          sx={{
            paddingTop: 6,
            backgroundColor: 'surface.extraheavy',
            borderRadius: '48px 48px 0px 0px'
          }}
        >
          <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
            <Container sx={{ marginTop: 'auto', textAlign: 'center' }}>
              <a
                href='mailto:greetings@imsety.com'
                sx={{ textDecoration: 'none' }}
              >
                <Heading
                  variant='display.h2'
                  sx={{
                    color: 'surface.extralight',
                    fontSize: [7, 8, 9],
                    marginBottom: [3, 4]
                  }}
                >
                  greetings@imsety.com
                </Heading>
              </a>
              <Text variant='body.h3' sx={{ color: 'surface.light' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Container>
            <SiteFooter textColor='surface.light' linkColor='surface.thin' />
          </Flex>
        </motion.div>
      </Box>
    </div>
  );
}
