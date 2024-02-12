/** @jsxImportSource theme-ui */
//@ts-nocheck

import { MdNorthEast, MdPlayArrow } from 'react-icons/md';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Container, Box, Flex, Button, Image } from 'krado-react';
import Link from 'next/link';
import { getColor } from '@theme-ui/color';
import { setyTheme } from '@/lib/site-theme';
import VideoPlayer from '../video-player';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function PlayButton() {
  const variants = {
    hover: {
      scale: 1.3,
      padding: '32px'
    }
  };

  return (
    <Flex
      as={motion.button}
      variants={variants}
      whileHover='hover'
      transition={{ type: 'spring', duration: 0.5 }}
      sx={{
        border: 'none',
        padding: 5,
        color: 'secondary.bold',
        backgroundColor: 'rgba(205,207,252,0.5)',
        backdropFilter: 'blur(32px)',
        borderColor: 'secondary.dark',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        fontSize: 11,
        cursor: 'pointer',
        backdropFilter: 'blur(16px)'
      }}
    >
      <MdPlayArrow />
    </Flex>
  );
}

export default function ReelSection({
  isVideoActive,
  setIsVideoActive,
  isPlayButtonHidden,
  onViewportEnter,
  onViewportLeave
}) {
  function getState() {
    if (isVideoActive) {
      return true;
    }

    if (isPlayButtonHidden) {
      return true;
    }

    return false;
  }

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.5, 1], [64, 0]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  // URLs for your Vimeo videos
  const desktopVimeoUrl = 'https://vimeo.com/907993556?share=copy';
  const mobileVimeoUrl = 'https://vimeo.com/912241383?share=copy';

  // State to hold the current Vimeo URL
  const [reelUrl, setReelVimeoUrl] = useState(desktopVimeoUrl);

  useEffect(() => {
    // Function to update the Vimeo URL based on screen width
    const handleResize = () => {
      if (window.innerWidth < 1440) {
        setReelVimeoUrl(mobileVimeoUrl);
      } else {
        setReelVimeoUrl(desktopVimeoUrl);
      }
    };

    // Call handleResize on mount to set the initial state
    handleResize();

    // Add event listener for subsequent resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section
      ref={container}
      sx={{
        position: 'sticky',
        top: 0
      }}
    >
      <Flex
        as={motion.div}
        style={{
          scale,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius
        }}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: 'surface.heavy',
          overflow: 'hidden'
        }}
        onViewportEnter={onViewportEnter}
        onViewportLeave={onViewportLeave}
      >
        <Flex
          onClick={setIsVideoActive}
          sx={{
            height: '100%',
            width: '100%',
            position: 'relative'
          }}
        >
          <AnimatePresence>
            {!getState() && (
              <>
                <Container
                  as={motion.div}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring' }}
                  sx={{
                    maxWidth: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 2
                  }}
                >
                  <PlayButton />
                </Container>
                <Box
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  sx={{
                    zIndex: 1,
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
                <Box
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  sx={{
                    zIndex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(16px)',
                    pointerEvents: 'none'
                  }}
                />
              </>
            )}
          </AnimatePresence>

          <VideoPlayer
            url={reelUrl}
            previewSrc='2023-reel.webm'
            poster='reel-thumbnail.png'
            isActive={isVideoActive}
          />
        </Flex>
      </Flex>
    </section>
  );
}
