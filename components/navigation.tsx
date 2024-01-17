/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex } from 'krado-react';
import Text from './fixed-krado-components/Text';
import Link from 'next/link';

function MenuItem({ children, active, href }) {
  return (
    <Text
      as='li'
      variant='body.smallParagraph'
      sx={{
        marginLeft: 0,
        backgroundColor: 'background',
        color: active ? 'action.active' : 'text.primary',
        padding: 2,
        fontWeight: 600,
        borderRadius: 1,
        cursor: 'pointer',
        transition: 'color 400ms ease, box-shadow 400ms ease',
        boxShadow: active ? 'hard.high' : 'none',
        '&:hover': {
          color: 'action.active',
          boxShadow: 'hard.high'
        }
      }}
    >
      <Link href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
        {children}
      </Link>
    </Text>
  );
}

export default function Navigation() {
  return (
    <Flex
      as='nav'
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: 4,
        transform: 'translateX(-50%)',
        zIndex: 3,
        color: 'text.primary',
        backgroundColor: 'background',
        boxShadow: 'hard.high',
        padding: 2,
        borderRadius: 2
      }}
    >
      <Flex as='ul' sx={{ gap: 2, listStyle: 'none', paddingLeft: 0 }}>
        <MenuItem href='/'>Home</MenuItem>
        <MenuItem href='/#work'>Work</MenuItem>
        <MenuItem href='/#about'>About</MenuItem>
        <MenuItem href='/#contact'>Contact</MenuItem>
      </Flex>
    </Flex>
  );
}
