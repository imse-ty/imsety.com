/** @jsxImportSource theme-ui */

import { Container, Flex, Box } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Tooltip from '../tooltip';

export default function ProjectInfo() {
  return (
    <Box sx={{ paddingY: 5, backgroundColor: 'secondary.bold' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '900px',
          gap: 4
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 4 }}>
          <Tooltip
            label='Timeline'
            text='2 months'
            labelColor='secondary.regular'
            textColor='secondary.contrast'
            dividerColor='surface.bold'
          />
          <Tooltip
            label='Year'
            text='2023'
            labelColor='secondary.regular'
            textColor='secondary.contrast'
            dividerColor='surface.bold'
          />
          <Tooltip
            label='Stress meter'
            text='Max'
            labelColor='secondary.regular'
            textColor='secondary.contrast'
            dividerColor='surface.bold'
          />
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Text variant='body.pretext' sx={{ color: 'secondary.regular' }}>
            Goal
          </Text>
          <Text variant='body.summary' sx={{ color: 'secondary.contrast' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
            diam, rhoncus congue gravida ultrices, iaculis ac metus.
            Pellentesque eget blandit leo, facilisis fermentum mi.
          </Text>
        </Flex>
        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Text variant='body.pretext' sx={{ color: 'secondary.regular' }}>
            Result
          </Text>
          <Text variant='body.summary' sx={{ color: 'secondary.contrast' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
            diam, rhoncus congue gravida ultrices, iaculis ac metus.
            Pellentesque eget blandit leo, facilisis fermentum mi.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
