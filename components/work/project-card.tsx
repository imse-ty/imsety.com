/** @jsxImportSource theme-ui */

import { Flex, Image, Box } from 'krado-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Text from '../fixed-krado-components/Text';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';
import { ThemeUIProvider } from 'theme-ui';
import { buildMonochromaticTheme } from '@/lib/monochromatic-theme';

export default function ProjectCard({ title, subtitle, src, href, color }) {
  const pageColor = buildMonochromaticTheme(color);

  return (
    <Link href={href} sx={{ textDecoration: 'none' }}>
      <ThemeUIProvider theme={{ colors: { ...pageColor } }}>
        <Flex
          sx={{
            position: 'relative',
            aspectRatio: '4/3',
            overflow: 'hidden',
            flexDirection: 'column',
            borderRadius: 3,
            transition: 'transform 325ms ease, box-shadow 325ms ease',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 'soft.highMiddle'
            }
          }}
        >
          <Flex
            as={motion.div}
            sx={{
              flexDirection: 'column',
              gap: [2, null, null, 3],
              position: 'absolute',
              padding: [4, null, null, null, 5],
              left: [0],
              bottom: [0],
              zIndex: 1,
              width: '100%'
            }}
          >
            <Text
              sx={{
                fontWeight: 600,
                fontSize: [6, 7, null, null, 9],
                color: 'secondary.contrast'
              }}
            >
              {title}
            </Text>
            <Text
              variant='body.smallParagraph'
              sx={{
                color: 'secondary.regular',
                display: ['none', null, null, 'block']
              }}
            >
              {subtitle}
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
              background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 30%, ${getColor(
                { colors: { ...pageColor } },
                'secondary.bold'
              )} 95%)`,
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
      </ThemeUIProvider>
    </Link>
  );
}
