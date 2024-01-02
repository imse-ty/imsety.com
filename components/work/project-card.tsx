/** @jsxImportSource theme-ui */

import { Flex, Image } from 'krado-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, src, href }) {
  return (
    <Link href={href}>
      <Flex
        sx={{
          position: 'relative',
          aspectRatio: '4/3',
          overflow: 'hidden',
          flexDirection: 'column',
          borderRadius: 3,
          transition: 'transform 325ms ease, box-shadow 325ms ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 'soft.highMiddle'
          }
        }}
      >
        <Image
          as={motion.img}
          src={src}
          alt='My alt'
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </Flex>
    </Link>
  );
}
