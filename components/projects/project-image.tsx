/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Flex } from 'krado-react';
import Image from 'next/image';

export default function ProjectImage({ alt, src }) {
  return (
    <Flex
      as="figure"
      sx={{
        position: 'relative',
        marginY: 4,
        marginX: [0, null, null, '-25%', '-50%'],
        borderRadius: [2, null, null, null, 3],
        overflow: 'hidden'
      }}
    >
      <Image
        alt={alt}
        src={src}
        width={2560}
        height={2560}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVQYlTWQQW4DMQwDU8D/f2djkZRkrRbIpoh72HaOcxgC/Np7Px6P7q6qyHB3UgRAwDD2/nT3WpUZkpMkaQDNAIw6jpUV4S5BEgDAAACSRkSEp4sgScAAkgBEpw9Rkm5zQ4KUu4f7+BMADSAAUHIpI9ZaY9okYIY7StI9MnzVOo4e83saQQNEiS6PzFqru1/XNZ7zCVL/e5lZtbrP633tzx5zThKSe3hGVtV5nj/v933XL1ThExkt9mrkAAAAAElFTkSuQmCC"
        sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
    </Flex>
  );
}
