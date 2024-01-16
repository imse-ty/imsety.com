/** @jsxImportSource theme-ui */

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import SiteFooter from '../site-footer';
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
            : 'surface.heavy'
        }}
      >
        <motion.div
          id='contact'
          style={{ scale }}
          sx={{
            transformOrigin: 'top',
            paddingTop: 6,
            backgroundColor: 'surface.extraheavy',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow: 'soft.highNorth'
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
                    color: 'surface.thin',
                    marginBottom: [3, 4],
                    fontSize: [7, 9, 10]
                  }}
                >
                  greetings@imsety.com
                </Heading>
              </a>
              <Text variant='body.summary' sx={{ color: 'surface.extralight' }}>
                Thinking of collaborating? I&apos;m here to listen! Let&apos;s
                connect.
              </Text>
            </Container>
            <SiteFooter
              textColor='surface.extralight'
              linkColor='surface.light'
            />
          </Flex>
        </motion.div>
      </Box>
    </div>
  );
}
