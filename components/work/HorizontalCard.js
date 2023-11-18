/** @jsxImportSource theme-ui */

import { Flex, Image } from 'krado-react';
import { MdArrowDownward } from 'react-icons/md';
import Heading from '../fixed-krado-components/Heading';

export default function HorizontalCard({ imageSrc, imageAlt, label }) {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        alignItems: ['left', 'center'],
        borderBottom: '2px solid',
        borderColor: 'secondary.bold',
        gap: [3, 4],
        paddingY: [3, 4]
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        sx={{
          objectFit: 'cover',
          width: ['80px', '150px'],
          height: ['24px', '40px'],
          borderRadius: ['18px', '24px']
        }}
      />
      <Heading variant="display.h4" sx={{ fontWeight: '500' }}>
        {label}
      </Heading>
      <MdArrowDownward
        sx={{
          display: ['none', 'block'],
          marginLeft: 'auto',
          color: 'text.secondary',
          fontSize: 7
        }}
      />
    </Flex>
  );
}
