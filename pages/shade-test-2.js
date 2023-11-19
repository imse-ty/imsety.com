import { Box, Flex } from 'krado-react';
import React from 'react';

export default function shoop() {
  return (
    <Flex sx={{ width: '100vw', height: '100vh' }}>
      <Flex
        style={{
          margin: 'auto',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'gray'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            margin: 'auto',
            position: 'relative',
            // overflow: 'hidden',

            ':after': {
              position: 'absolute',
              content: `""`,
              right: 0,
              bottom: 0,
              borderLeft: '50px solid white',
              borderBottom: '50px solid black',
              transition: 'all 1s ease'
            },
            ':hover:after': {
              borderLeft: 'calc(200vh + 75px) solid white',
              borderBottom: 'calc(200vh + 75px) solid black'
            }
          }}
        />
      </Flex>
    </Flex>
  );
}
