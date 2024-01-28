import { Grid, Image } from 'krado-react';

export default function ProjectGrid({ images }) {
  return (
    <Grid
      sx={{
        marginY: [null, null, null, null, 4],
        gap: 4,
        gridTemplateColumns: ['1fr', null, '1fr 1fr'],
        marginX: [0, null, null, null, '-50%']
      }}
    >
      {images &&
        images.map((image, index) => {
          return (
            <Image
              key={index}
              alt='My alt'
              src={image.image}
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
