/** @jsxImportSource theme-ui */

import { Container, Flex } from 'krado-react';
import Text from '../fixed-krado-components/Text';

export default function ProjectInfo() {
  return (
    <Container
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '900px',
        gap: 5
      }}
    >
      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        <Text variant='body.pretext'>Goal</Text>
        <Text variant='body.summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
          arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
          diam, rhoncus congue gravida ultrices, iaculis ac metus. Pellentesque
          eget blandit leo, facilisis fermentum mi.
        </Text>
      </Flex>
      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        <Text variant='body.pretext'>Result</Text>
        <Text variant='body.summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
          arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
          diam, rhoncus congue gravida ultrices, iaculis ac metus. Pellentesque
          eget blandit leo, facilisis fermentum mi.
        </Text>
      </Flex>
    </Container>
  );
}
