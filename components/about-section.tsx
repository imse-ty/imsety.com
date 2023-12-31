/** @jsxImportSource theme-ui */

import { MdNorthEast } from 'react-icons/md';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { Container, Box, Flex } from 'krado-react';
import AboutHero from './about/about-hero';
import Tooltip from './tooltip';

export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: '#36454f',
          borderRadius: '48px 48px 0px 0px'
        }}
      >
        <AboutHero />
        <Container sx={{ maxWidth: '900px' }}>
          <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
            <Tooltip label='Timeline' text='2 months' />
            <Tooltip label='Year' text='2023' />
            <Tooltip label='Stress meter' text='Max' />
          </Flex>
          <Text variant='body.summary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
            diam, rhoncus congue gravida ultrices, iaculis ac metus.
            Pellentesque eget blandit leo, facilisis fermentum mi.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
