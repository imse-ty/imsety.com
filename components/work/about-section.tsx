import { Container } from 'krado-react';
import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';

export default function AboutSection() {
  return (
    <Container>
      <Heading
        variant='body.pretext'
        sx={{
          marginBottom: [3, 4]
        }}
      >
        About
      </Heading>
      <Text variant='body.h1'>
        We are passionate about creating visually stunning and functional
        solutions that communicate effectively. I have a keen eye for detail and
        a deep understanding of design principles, which I use to deliver
        projects that exceed my clients&apos; expectations.
      </Text>
    </Container>
  );
}
