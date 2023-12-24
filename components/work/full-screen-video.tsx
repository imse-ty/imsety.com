/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { Box, Flex } from 'krado-react';

export default function FullScreenVideo({ onClick, style, layoutId }) {
  const containerVariants = {
    hidden: { backgroundColor: 'rgba(0,0,0,0)' },
    active: {
      backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)'],
      transition: { duration: 4 }
    }
  };

  const videoPlayerVariants = {
    hidden: { opacity: 0, borderRadius: '84px' },
    active: {
      borderRadius: '0px',
      opacity: 1
    }
  };

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="active"
      exit="hidden"
      onClick={onClick}
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: 5,
        top: 0,
        left: 0,
        cursor: 'crosshair'
      }}
      style={style}
    >
      <motion.video
        variants={videoPlayerVariants}
        initial="hidden"
        animate="active"
        exit="hidden"
        layoutId={layoutId}
        sx={{
          margin: 'auto',
          backgroundColor: 'black',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        autoPlay
        controls
        disablePictureInPicture
        controlsList="nofullscreen"
        muted
      >
        <source src="/2020-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </Flex>
  );
}
