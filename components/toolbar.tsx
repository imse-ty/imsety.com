/** @jsxImportSource theme-ui */
// @ts-nocheck

import { motion, useScroll } from 'framer-motion';
import { Box, Flex, ToggleIcon, Container } from 'krado-react';
import Link from 'next/link';
import { MdChevronLeft } from 'react-icons/md';
import Navigation from './navigation';
import RightTriangle from '../public/right-triangle.svg';
import Text from './fixed-krado-components/Text';
import Switch from './projects/project-switch';
import { useState } from 'react';

export default function Toolbar({ showBack, typeOfCaseStudy }) {
  const { scrollYProgress } = useScroll();

  const [isDetailed, setIsDetailed] = useState(getTypeOfCaseStudy());

  function getTypeOfCaseStudy() {
    if (typeOfCaseStudy === 'full') {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Flex
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 3,
        gap: [3, 4],
        padding: 4
      }}
    >
      {showBack ? (
        <Link href='/#work'>
          <ToggleIcon
            sx={{
              borderRadius: 1,
              width: '48px',
              height: '48px',
              boxShadow: 'hard.high',
              backgroundColor: 'primary.regular',
              color: 'primary.contrast'
            }}
          >
            <MdChevronLeft />
          </ToggleIcon>
        </Link>
      ) : (
        <Link href='/#'>
          <RightTriangle
            sx={{
              width: '48px',
              height: '48px',
              fill: 'primary.regular'
            }}
            width='100%'
            viewBox='0 0 78 78'
          />
        </Link>
      )}

      <Box
        as={motion.div}
        style={{ scaleX: scrollYProgress }}
        sx={{
          width: '100%',
          height: '2px',
          backgroundColor: 'secondary.light',
          transformOrigin: 'left'
        }}
      />
      {typeOfCaseStudy && (
        <Switch
          isOn={isDetailed}
          firstLabelOnClick={() => setIsDetailed(true)}
          secondLabelOnClick={() => setIsDetailed(false)}
        />
      )}
    </Flex>
  );
}
