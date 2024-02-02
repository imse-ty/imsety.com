/** @jsxImportSource theme-ui */
// @ts-nocheck

import { motion, useScroll } from 'framer-motion';
import { Box, Flex, ToggleIcon, Container } from 'krado-react';
import Link from 'next/link';
import { MdChevronLeft } from 'react-icons/md';
import Navigation from './navigation';
import RightTriangle from '../public/right-triangle.svg';
import Text from './fixed-krado-components/Text';

function MenuItem({ children, active, href }) {
  return (
    <Text
      variant='body.smallParagraph'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        backgroundColor: active ? 'surface.regular' : 'surface.bold',
        color: active ? 'surface.thin' : 'surface.extralight',
        paddingY: 2,
        paddingX: 3,
        fontWeight: 600,
        borderRadius: 1,
        cursor: 'pointer',
        transition: 'color 400ms ease, box-shadow 400ms ease',
        boxShadow: active ? 'hard.high' : 'none',
        '&:hover': {
          color: 'surface.thin',
          boxShadow: 'hard.high'
        }
      }}
    >
      <Link
        href={href}
        scroll={false}
        sx={{ textDecoration: 'none', color: 'inherit' }}
      >
        {children}
      </Link>
    </Text>
  );
}

export default function Toolbar({
  showBack,
  typeOfCaseStudy,
  projectFilename
}) {
  const { scrollYProgress } = useScroll();

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
        <Flex
          sx={{
            alignItems: 'center',
            boxShadow: 'hard.high',
            display: ['none', null, 'flex'],
            textAlign: 'center',
            border: 'solid',
            borderWidth: 8,
            borderColor: 'secondary.bold',
            backgroundColor: 'surface.bold',
            borderRadius: 2,
            position: 'relative'
          }}
        >
          <MenuItem
            href={`/work/beloved-benefit-2023`}
            active={typeOfCaseStudy === 'full' ? true : false}
          >
            Detailed
          </MenuItem>
          <MenuItem
            href={`/work/beloved-benefit-2023-simple`}
            active={typeOfCaseStudy === 'simple' ? true : false}
          >
            Brief
          </MenuItem>
        </Flex>
      )}
    </Flex>
  );
}
