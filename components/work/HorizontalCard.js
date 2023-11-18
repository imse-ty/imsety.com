/** @jsxImportSource theme-ui */

import { Flex, Image } from 'krado-react';
import { MdArrowDownward } from 'react-icons/md';
import Heading from '../fixed-krado-components/Heading';

export default function HorizontalCard({ imageSrc, imageAlt, label }) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        borderBottom: '2px solid',
        borderColor: 'secondary.bold',
        gap: 3,
        paddingY: 3
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        sx={{
          objectFit: 'cover',
          width: '80px',
          height: '24px',
          borderRadius: '18px'
        }}
      />
      <Heading variant="display.h4" sx={{ fontWeight: '500' }}>
        {label}
      </Heading>
      <MdArrowDownward
        sx={{ display: 'none', color: 'text.primary', fontSize: 11 }}
      />
    </Flex>
  );
}
