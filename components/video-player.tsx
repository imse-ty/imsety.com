/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import getVideoId from 'get-video-id';
import { Flex } from 'krado-react';

function VimeoVideo({ url }) {
  const getVimeoId = () => {
    if (url) {
      return getVideoId(url).id;
    }
  };
  const vimeoId = getVimeoId();
  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}?playsinline=0&transparent=0&loop=1&autoplay=1`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId='video'
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    >
      <iframe
        src={vimeoUrl}
        title='Vimeo video player'
        allow='autoplay; fullscreen; picture-in-picture'
        sx={{
          width: '100%',
          height: '100%',
          border: 0,
          borderRadius: 3
        }}
        allowFullScreen
      />
    </motion.div>
  );
}

function PlayingVideo({ src, poster }) {
  return (
    <motion.video
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layoutId='video'
      autoPlay
      controls
      poster={poster}
      width='1920'
      height='1080'
      sx={{
        position: 'absolute',
        margin: 'auto',
        borderRadius: 3
      }}
    >
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </motion.video>
  );
}

function IdleVideo({ src, poster }) {
  return (
    <motion.video
      autoPlay
      loop
      muted
      poster={poster}
      layoutId='video'
      sx={{
        position: 'absolute',
        width: '100%',
        minHeight: '100%',
        objectFit: 'cover'
      }}
    >
      <source src={src} type='video/webm' />
      Your browser does not support the video tag.
    </motion.video>
  );
}

export default function VideoPlayer({ isActive, url, previewSrc, poster }) {
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
    >
      {isActive && <VimeoVideo url={url} />}

      <IdleVideo src={previewSrc} poster={poster} />
    </Flex>
  );
}
