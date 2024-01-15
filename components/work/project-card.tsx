/** @jsxImportSource theme-ui */

import { Flex, Image, Box } from 'krado-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Text from '../fixed-krado-components/Text';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';

export default function ProjectCard({ title, src, href }) {
  return (
    <Link href={href} sx={{ textDecoration: 'none' }}>
      <Flex
        sx={{
          position: 'relative',
          aspectRatio: '4/3',
          overflow: 'hidden',
          flexDirection: 'column',
          borderRadius: 3,
          marginBottom: 3,
          transition: 'transform 325ms ease, box-shadow 325ms ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 'soft.highMiddle'
          }
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 2,
            position: 'absolute',
            left: [3, 4, null, 5],
            bottom: [3, 4, null, 5],
            zIndex: 1
          }}
        >
          <Text
            variant='display.h3'
            sx={{ color: 'secondary.contrast', fontWeight: 600 }}
          >
            {title}
          </Text>
          <Text sx={{ color: 'secondary.contrast', opacity: 0.8 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. vitae.
          </Text>
        </Flex>
        <Box
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 50%, ${getColor(
              setyTheme,
              'secondary.bold'
            )} 100%)`,
            pointerEvents: 'none'
          }}
        />
        <Image
          as={motion.img}
          src={src}
          alt='My alt'
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </Flex>
    </Link>
  );
}
