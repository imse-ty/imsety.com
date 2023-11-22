/** @jsxImportSource theme-ui */
import { motion } from 'framer-motion';
import { Box, Flex, Heading } from 'krado-react';
import PlayIcon from '@/public/play-icon.svg';

export function DifferenceText({ children, textAlign }) {
  const variants = {
    active: {
      fontStretch: '125%'
    },
    click: {
      fontSize: '90px',
      transition: { type: 'spring', duration: 0.3 }
    }
  };

  return (
    <Heading
      as={motion.h3}
      variants={variants}
      transition={{ type: 'spring', damping: 9 }}
      variant="display.display"
      sx={{
        marginTop: [2, 3],
        fontWeight: '600',
        fontStretch: '50%',
        mixBlendMode: 'difference',
        color: 'white',
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
    active: { scale: 1.1, opacity: 0.8 },
    click: {
      scale: 1.4,
      transition: { type: 'spring', damping: 9 }
    }
  };

  const containerVariants = {
    active: { scale: 1.3 },
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
        width: ['91px', null, '300px'],
        height: ['60px', null, '195px'],
        borderRadius: ['17px', null, '60px'],
        backgroundColor: 'rgba(217, 217, 217, 0.35)',
        backdropFilter: 'blur(12.5px)',
        border: '1px solid lightgray',
        zIndex: 3
      }}
    >
      <motion.div
        variants={playButtonVariants}
        sx={{ marginTop: 1, width: ['18px', null, '57px'], opacity: 0.6 }}
      >
        <PlayIcon width="100%" height="auto" viewBox="0 0 38 43" />
      </motion.div>
    </Flex>
  );
}

export default function ReelVideo({ onClick, style }) {
  const containerVariants = {
    active: {
      gap: '500px'
    }
  };

  const blackFilterVariants = {
    active: { opacity: 0 }
  };

  return (
    <Flex
      as={motion.div}
      initial="idle"
      whileHover="active"
      whileTap="click"
      variants={containerVariants}
      transition={{ type: 'spring' }}
      onClick={onClick}
      layoutId="video"
      sx={{
        flexDirection: ['column', null, null, 'row'],
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        gap: ['120px', null, '400px'],
        backgroundColor: 'secondary.light',

        // borderRadius: ['42px', null, '84px'],
        cursor: 'pointer'
      }}
      style={style}
    >
      {/* <Box
        as={motion.div}
        variants={blackFilterVariants}
        sx={{
          backgroundColor: 'black',
          opacity: 0.25,
          zIndex: 2,
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      /> */}
      <motion.video
        variants={{ active: { scale: 1.05 } }}
        transition={{ type: 'spring' }}
        autoPlay
        loop
        muted
        poster="/turntable-thumbnail.png"
        sx={{
          zIndex: 1,
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%'
        }}
      >
        <source src="/turntable.mp4#t=08,30" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </Flex>
  );
}
