/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Grid } from 'krado-react';
import Image from 'next/image';

export default function ProjectGrid({ images }) {
  return (
    <Grid
      sx={{
        marginY: [null, null, null, null, 4],
        gap: 4,
        gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        marginX: [0, null, null, '-25%', '-50%']
      }}
    >
      {images &&
        images.map((image, index) => {
          return (
            <Image
              key={index}
              alt="My alt"
              src={image.image}
              width={2560}
              height={1440}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVQYlTWQQW4DMQwDU8D/f2djkZRkrRbIpoh72HaOcxgC/Np7Px6P7q6qyHB3UgRAwDD2/nT3WpUZkpMkaQDNAIw6jpUV4S5BEgDAAACSRkSEp4sgScAAkgBEpw9Rkm5zQ4KUu4f7+BMADSAAUHIpI9ZaY9okYIY7StI9MnzVOo4e83saQQNEiS6PzFqru1/XNZ7zCVL/e5lZtbrP633tzx5zThKSe3hGVtV5nj/v933XL1ThExkt9mrkAAAAAElFTkSuQmCC"
              sx={{
                aspectRatio: '16/9',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: [2, null, null, null, 3]
              }}
            />
          );
        })}
    </Grid>
  );
}
