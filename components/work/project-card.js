/** @jsxImportSource theme-ui */
import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import { Heading, theme } from 'krado-react';
import Link from 'next/link';
import { Flex } from 'theme-ui';

export default function ProjectCard({ title, alt, src, href }) {
  const boxVariants = {
    active: {
      scale: 0.97,
      outline: `solid ${getColor(theme, 'surface.thin')} 15px`
    }
  };

  const imageVariants = {
    active: {
      scale: 1.2
    }
  };

  const labelVariants = {
    active: {
      x: '50px',
      fontStretch: '125%',
      fontWeight: 500
    }
  };

  const iconVariants = {
    active: {
      left: 0,
      opacity: 1
    }
  };

  return (
    <Link href={href} sx={{ textDecoration: 'none', color: 'primary;regular' }}>
      <motion.div
        initial="idle"
        whileHover="active"
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <motion.div
          variants={boxVariants}
          transition={{ type: 'spring', duration: 1 }}
          sx={{
            backgroundColor: 'secondary.light',
            borderRadius: '24px',
            width: '100%',
            height: '500px',
            position: 'relative',
            overflow: 'hidden',
            outline: `solid ${getColor(setyTheme, 'surface.thin')} 1px`
          }}
        >
          <motion.img
            variants={imageVariants}
            transition={{ type: 'spring' }}
            alt={alt}
            src={src}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
            layoutId="bruh"
          />
        </motion.div>

        <Flex sx={{ alignItems: 'center', position: 'relative' }}>
          <motion.div
            variants={iconVariants}
            transition={{ type: 'spring', duration: 0.5 }}
            sx={{
              position: 'absolute',
              borderRadius: 4,
              backgroundColor: 'secondary.regular',
              width: '30px',
              height: '30px',
              top: '38px',
              left: -2,
              opacity: 0
            }}
          />

          <Heading
            as={motion.h3}
            variants={labelVariants}
            transition={{ type: 'spring', duration: 0.5 }}
            sx={{ marginTop: 3 }}
          >
            {title}
          </Heading>
        </Flex>
      </motion.div>
    </Link>
  );
}
