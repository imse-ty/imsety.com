/** @jsxImportSource theme-ui */

import { Flex, Image } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Heading from '../fixed-krado-components/Heading';
import { MdNorthEast } from 'react-icons/md';
import Link from 'next/link';

export default function ProjectCardV2({ src, href }) {
  return (
    <Link href={href}>
      <Flex
        sx={{
          position: 'relative',

          width: '100%',
          borderRadius: '24px',
          overflow: 'hidden',
          flexDirection: 'column',
          border: '2px solid',
          borderColor: 'secondary.bold'
        }}
      >
        <Image
          src={src}
          alt="My alt"
          sx={{
            objectFit: 'cover',
            height: ['300px', '600px']
          }}
        />
        <Flex
          sx={{
            position: ['block', 'absolute'],
            flexDirection: ['row', null, 'column'],
            marginLeft: [0, 4],
            bottom: 4,
            right: 4,
            backgroundColor: 'rgba(0,0,0,0.70)',
            backdropFilter: 'blur(12.5px)',
            borderRadius: ['none', '24px'],
            paddingTop: [3, 4],
            paddingRight: [4, 6],
            paddingBottom: [3, 4],
            paddingLeft: [3, 4],
            gap: 2
          }}
        >
          <Heading variant="display.h4">Beeple Studios</Heading>
          <Flex
            sx={{ color: 'text.secondary', display: ['none', null, 'flex'] }}
          >
            <Text variant="body.h4" sx={{ color: 'inherit' }}>
              View work
            </Text>
            <MdNorthEast
              sx={{
                color: 'inherit',
                fontSize: 6
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}
