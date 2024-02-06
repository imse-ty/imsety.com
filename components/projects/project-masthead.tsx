/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Box, Flex, Button } from 'krado-react';
import { MdExpandMore, MdPlayArrow } from 'react-icons/md';
import VideoPlayer from '../video-player';
import { useState } from 'react';

function ScrollButton() {
  return (
    <Box
      as={motion.a}
      href="#info"
      whileHover={{
        backgroundColor: getColor(setyTheme, 'surface.thin')
      }}
      sx={{
        paddingY: 3,
        color: 'surface.bold',
        backgroundColor: 'surface.extralight',
        zIndex: 2,
        fontSize: 7
      }}
    >
      <motion.span
        animate={{ y: 8 }}
        transition={{
          type: 'tween',
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1.4
        }}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <MdExpandMore />
      </motion.span>
    </Box>
  );
}

export default function ProjectMasthead({
  title,
  subtitle,
  videoUrl,
  coverVideo,
  coverImage,
  themeColor
}) {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'surface.heavy',
        overflow: 'hidden'
      }}
    >
      <Flex
        onClick={() => {
          if (videoUrl) {
            setIsVideoActive(!isVideoActive);
          }
        }}
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative'
        }}
      >
        <AnimatePresence>
          {!isVideoActive && (
            <>
              <Container
                as={motion.div}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring' }}
                sx={{
                  maxWidth: 'none',
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 4,
                  bottom: 0,
                  marginTop: 'auto',
                  marginBottom: 5,
                  zIndex: 2
                }}
              >
                <Flex
                  sx={{
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Heading
                    as="h1"
                    variant="display.h1"
                    sx={{
                      color: 'secondary.contrast',
                      marginBottom: [1, 2]
                    }}
                  >
                    {title}
                  </Heading>
                  <Text
                    as="p"
                    variant="body.summary"
                    sx={{ color: 'secondary.contrast', maxWidth: '900px' }}
                  >
                    {subtitle}
                  </Text>
                </Flex>

                {videoUrl ? (
                  <Flex
                    sx={{
                      flexDirection: ['column', null, 'row'],
                      gap: 3
                    }}
                  >
                    <Button
                      onClick={() => setIsVideoActive(true)}
                      leftIcon={<MdPlayArrow />}
                      sx={{
                        color: 'secondary.bold',
                        backgroundColor: 'secondary.light'
                      }}
                    >
                      Watch video
                    </Button>
                    <a href="#info">
                      <Button
                        variant="ghost"
                        sx={{
                          color: 'secondary.contrast',
                          borderColor: 'secondary.contrast'
                        }}
                      >
                        View case study
                      </Button>
                    </a>
                  </Flex>
                ) : (
                  <a href="#info">
                    <Button
                      sx={{
                        color: 'secondary.bold',
                        backgroundColor: 'secondary.light'
                      }}
                    >
                      View case study
                    </Button>
                  </a>
                )}
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
                  background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 50%, ${themeColor} 100%)`,
                  pointerEvents: 'none'
                }}
              />
            </>
          )}
        </AnimatePresence>

        <VideoPlayer
          url={videoUrl}
          previewSrc={coverVideo}
          poster={coverImage}
          isActive={isVideoActive}
        />
      </Flex>
      <ScrollButton />
    </Flex>
  );
}
