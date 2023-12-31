/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex, Button, Image } from 'krado-react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ReelSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  href,
  id
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scaleSpring = useSpring(scale, { damping: 30 });

  return (
    <div ref={container}>
      <Flex
        as={motion.div}
        style={{ scale: scaleSpring }}
        id={id}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
          backgroundColor: 'black'
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            marginTop: 'auto',
            marginBottom: 5,
            zIndex: 1
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              textAlign: 'center'
            }}
          >
            <Heading
              variant='display.h1'
              sx={{
                marginBottom: [1, 2]
              }}
            >
              {title}
            </Heading>
            <Text variant='body.summary'>{subtitle}</Text>
          </Flex>
          <Link href={href}>
            <Button leftIcon={<MdNorthEast />}>Explore</Button>
          </Link>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            width: 'auto'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 4.23%, #180544 100%)'
            }}
          />
          <Image
            alt={imageAlt}
            src={imageSrc}
            sx={{ height: '100%', width: 'auto', objectFit: 'cover' }}
          />
        </Box>
      </Flex>
    </div>
  );
}
