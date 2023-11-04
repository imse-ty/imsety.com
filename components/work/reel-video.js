import { motion } from 'framer-motion';
import { Box, Flex, Heading, Image } from 'krado-react';
import PlayIcon from '@/public/play-icon.svg';

export function DifferenceText({ children, textAlign }) {
  const variants = {
    active: {
      fontStretch: '125%'
    },
    click: {
      scale: 0.6,
      transition: { type: 'spring', duration: 0.3 }
    }
  };

  return (
    <Heading
      as={motion.h3}
      variants={variants}
      transition={{ type: 'spring', damping: 9 }}
      sx={{
        fontSize: '100px',
        fontWeight: '600',
        fontStretch: '50%',
        mixBlendMode: 'difference',
        textAlign: textAlign,
        zIndex: 3
      }}
    >
      {children}
    </Heading>
  );
}

export function PlayButton() {
  const playButtonVariants = {
    active: { scale: 1.1 },
    click: {
      scale: 1.4,
      transition: { type: 'spring', damping: 9 }
    }
  };

  const containerVariants = {
    active: { scale: 1.3, borderRadius: '70px' },
    click: {
      scale: 0.5,
      transition: { type: 'spring', duration: 0.3 }
    }
  };

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      transition={{ type: 'spring', duration: 0.6 }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '200px',
        height: '130px',
        borderRadius: '40px',
        backgroundColor: 'rgba(217, 217, 217, 0.35)',
        backdropFilter: 'blur(12.5px)',
        border: '1px solid transparent',
        zIndex: 3
      }}
    >
      <motion.div variants={playButtonVariants}>
        <PlayIcon />
      </motion.div>
    </Flex>
  );
}

export default function ReelVideo() {
  const containerVariants = {
    active: {
      gap: '400px'
    }
  };

  return (
    <Flex
      as={motion.div}
      whileHover="active"
      whileTap="click"
      variants={containerVariants}
      transition={{ type: 'spring' }}
      sx={{
        overflow: 'hidden',
        width: '100%',
        height: '75vh',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '300px',
        backgroundColor: 'secondary.light',
        borderRadius: '84px',
        cursor: 'pointer'
      }}
    >
      <DifferenceText textAlign="end">VIEW</DifferenceText>
      <PlayButton />
      <DifferenceText>REEL</DifferenceText>
      <Box
        sx={{
          backgroundColor: 'black',
          opacity: 0.25,
          zIndex: 2,
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <Image
        alt="nah"
        src="./turntable-thumbnail.png"
        sx={{
          zIndex: 1,
          position: 'absolute',
          width: 'auto',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover'
        }}
      />
    </Flex>
  );
}
