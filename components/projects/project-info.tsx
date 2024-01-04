/** @jsxImportSource theme-ui */

import { Container, Flex, Box } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import Tooltip from '../tooltip';

export default function ProjectInfo({ stats, goal, result }) {
  return (
    <Box id='info' sx={{ paddingY: 5, backgroundColor: 'surface.extralight' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '900px',
          gap: 4
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 4 }}>
          {stats.map((item, index) => {
            return (
              <Tooltip
                key={index}
                label={item.label}
                text={item.stat}
                labelColor='surface.regular'
                textColor='surface.bold'
                dividerColor='surface.light'
              />
            );
          })}
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Text variant='body.pretext' sx={{ color: 'surface.regular' }}>
            Goal
          </Text>
          <Text variant='body.summary' sx={{ color: 'surface.bold' }}>
            {goal}
          </Text>
        </Flex>
        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Text variant='body.pretext' sx={{ color: 'surface.regular' }}>
            Result
          </Text>
          <Text variant='body.summary' sx={{ color: 'surface.bold' }}>
            {result}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
