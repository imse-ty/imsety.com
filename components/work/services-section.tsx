import { Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import HorizontalCard from './horizontal-card';

export default function ServicesSection() {
  return (
    <Container as='section'>
      <Heading
        variant='body.pretext'
        sx={{
          marginBottom: [2, 3]
        }}
      >
        Areas of expertise
      </Heading>
      <HorizontalCard
        imageAlt='hi'
        imageSrc='/turntable-thumbnail.png'
        label='Motion design'
      />
      <HorizontalCard
        imageAlt='hi'
        imageSrc='/turntable-thumbnail.png'
        label='Lorem ipsum'
      />
      <HorizontalCard
        imageAlt='hi'
        imageSrc='/turntable-thumbnail.png'
        label='Lorem ipsum'
      />
    </Container>
  );
}
