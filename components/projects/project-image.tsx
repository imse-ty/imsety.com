/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex, Image } from 'krado-react';

export default function ProjectImage({ alt, src }) {
  return (
    <Flex
      sx={{
        marginY: 4,
        marginX: [0, null, null, null, '-50%'],
        height: '100%',
        borderRadius: [2, null, null, null, 3],
        overflow: 'hidden'
      }}
    >
      <Image
        layoutId={src}
        alt={alt}
        src={src}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
      />
    </Flex>
  );
}
