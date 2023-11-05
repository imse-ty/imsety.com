/** @jsxImportSource theme-ui */

import { motion } from 'framer-motion';
import { Box, Flex } from 'krado-react';

export default function FullScreenVideo({ onClick }) {
  const containerVariants = {
    hidden: { backgroundColor: 'rgba(0,0,0,0)' },
    active: {
      backgroundColor: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,1)'],
      transition: { duration: 4 }
    }
  };

  const videoPlayerVariants = {
    hidden: { width: '100%', height: '75vh', borderRadius: '84px' },
    active: {
      width: '90%',
      height: '90%',
      borderRadius: '50px'
    }
  };

  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="active"
      exit="hidden"
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: 5,
        top: 0,
        left: 0,
        cursor: 'crosshair'
      }}
    >
      <motion.video
        variants={videoPlayerVariants}
        initial="hidden"
        animate="active"
        exit="hidden"
        layoutId="video"
        onClick={onClick}
        sx={{
          margin: 'auto',
          backgroundColor: 'black',
          overflow: 'hidden',
          maxWidth: '1920px',
          maxHeight: '1080px'
        }}
        poster="/turntable-thumbnail.png"
        autoPlay
        controls
      >
        <source src="/2020-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </Flex>
  );
}
