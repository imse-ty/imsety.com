import { motion } from 'framer-motion';
import { Flex, Heading } from 'krado-react';
import PlayIcon from '@/public/play-icon.svg';

export function DifferenceText({ children, textAlign }) {
  const variants = {
    active: {
      fontStretch: '125%'
    }
  };

  return (
    <Heading
      as={motion.h3}
      variants={variants}
      transition={{ type: 'spring' }}
      sx={{
        fontSize: '100px',
        fontWeight: '600',
        fontStretch: '50%',
        mixBlendMode: 'difference',
        textAlign: textAlign
      }}
    >
      {children}
    </Heading>
  );
}

export function PlayButton() {
  const playButtonVariants = { active: { scale: 1.1 } };

  const containerVariants = { active: { scale: 1.3, borderRadius: '70px' } };

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
        backgroundColor: 'rgba(217, 217, 217, 0.35)',
        borderRadius: '40px',
        backdropFilter: 'blur(12.5px)'
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
      variants={containerVariants}
      transition={{ type: 'spring' }}
      sx={{
        width: '100%',
        height: '75vh',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '300px',
        backgroundColor: 'secondary.light',
        borderRadius: '84px'
      }}
    >
      <DifferenceText textAlign="end">VIEW</DifferenceText>
      <PlayButton />
      <DifferenceText>REEL</DifferenceText>
    </Flex>
  );
}
