/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Flex, Button, Image } from 'krado-react';
import Link from 'next/link';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  href
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
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          position: 'relative',
          paddingTop: 5,
          backgroundColor: '#080808'
        }}
        id='about'
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
          <Image
            alt={imageAlt}
            src={imageSrc}
            width='500'
            height='1000'
            sx={{
              height: '70vh',
              width: '100%',
              maxWidth: '900px',
              objectFit: 'none',
              borderRadius: '40px'
            }}
          />
          <Flex
            sx={{
              flexDirection: 'column',
              textAlign: 'center'
            }}
          >
            <Heading
              variant='display.h2'
              sx={{
                marginBottom: [1, 2]
              }}
            >
              {title}
            </Heading>
            <Text>{subtitle}</Text>
          </Flex>
          <Link href={href}>
            <Button leftIcon={<MdNorthEast />}>Explore</Button>
          </Link>
        </Container>
      </Flex>
    </div>
  );
}
