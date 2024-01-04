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
    <Flex
      as={motion.a}
      href='#info'
      whileHover={{
        backgroundColor: getColor(setyTheme, 'surface.thin')
      }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 3,
        color: 'surface.bold',
        backgroundColor: 'surface.extralight',
        zIndex: 2,
        fontSize: 7
      }}
    >
      <MdExpandMore />
    </Flex>
  );
}

export default function ProjectMasthead({
  title,
  subtitle,
  video,
  coverImage
}) {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'surface.heavy'
      }}
    >
      <Flex
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
                    variant='display.h1'
                    sx={{
                      color: 'secondary.contrast',
                      marginBottom: [1, 2]
                    }}
                  >
                    {title}
                  </Heading>
                  <Text
                    variant='body.summary'
                    sx={{ color: 'secondary.contrast' }}
                  >
                    {subtitle}
                  </Text>
                </Flex>

                <Button
                  onClick={() => setIsVideoActive(true)}
                  leftIcon={<MdPlayArrow />}
                  sx={{
                    color: 'secondary.bold',
                    backgroundColor: 'secondary.light'
                  }}
                >
                  View video
                </Button>
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
                  background: `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 60%, ${getColor(
                    setyTheme,
                    'secondary.bold'
                  )} 100%)`,
                  pointerEvents: 'none'
                }}
              />
            </>
          )}
        </AnimatePresence>

        <VideoPlayer
          src={video}
          poster={coverImage}
          isActive={isVideoActive}
          onClick={() => setIsVideoActive(!isVideoActive)}
        />

        {/* <Image
          as={motion.img}
          alt={imageAlt}
          src={imageSrc}
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          sx={{
            width: '100vw',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
          transition={{ type: 'spring', stiffness: 40 }}
        /> */}
      </Flex>
      <ScrollButton />
    </Flex>
  );
}
