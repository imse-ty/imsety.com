/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { Flex } from 'krado-react';

function PlayingVideo() {
  return (
    <motion.video
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId='video'
      autoPlay
      controls
      muted
      poster='/turntable-thumbnail.png'
      width='1920'
      height='1080'
      sx={{
        position: 'absolute',
        margin: 'auto',
        zIndex: 1,
        borderRadius: 3
      }}
    >
      <source src='/2020-reel.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </motion.video>
  );
}

function IdleVideo() {
  return (
    <motion.video
      autoPlay
      loop
      muted
      poster='/turntable-thumbnail.png'
      layoutId='video'
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    >
      <source src='/2020-reel.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </motion.video>
  );
}

export default function VideoPlayer({ isActive, onClick }) {
  const variants = {
    active: { width: '90%', height: '90%', borderRadius: '32px' },
    idle: { width: '100%', height: '100%', borderRadius: '0px' }
  };

  return (
    <Flex
      as={motion.div}
      variants={variants}
      animate={isActive ? 'active' : 'idle'}
      transition={{ type: 'spring' }}
      sx={{
        position: 'relative',
        margin: 'auto',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      onClick={onClick}
    >
      {isActive && <PlayingVideo />}
      <IdleVideo />
    </Flex>
  );
}
