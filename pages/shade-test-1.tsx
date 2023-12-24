import { Flex } from 'krado-react';
import React from 'react';

export default function shoop() {
  return (
    <Flex sx={{ width: '100vw', height: '100vh' }}>
      <Flex
        style={{
          margin: 'auto',
          width: '200px',
          height: '1000px',
          backgroundColor: 'gray'
        }}
      >
        {/* <div
          style={{
            margin: 'auto',
            width: '50%',
            height: '50%',
            backgroundColor: 'red',
            clipPath: `polygon(
              200% 0,
              calc(0% + 75px) 0,
              0 calc(0% + 75px),
              0 200%,
              0 0
            )
          `
          }}
        />

        <div
          style={{
            margin: 'auto',
            width: '50%',
            height: '50%',
            backgroundColor: 'red',
            clipPath: `polygon(
              100% 0,
              100% calc(100% - 75px),
              calc(100% - 75px) 100%,
              0 100%,
              0 0
            )
          `
          }}
        /> */}

        <div
          style={{
            margin: 'auto',
            width: '50%',
            height: '50%',
            backgroundColor: 'red',
            clipPath: `polygon(
              100% 0,
              100% calc(100% - 75px),
              calc(100% - 75px) 100%,
              0 100%,
              0 0
            )
          `
          }}
        />

        {/* <div
          style={{
            margin: 'auto',
            width: '50%',
            height: '50%',
            backgroundColor: 'red',
            clipPath: `
            polygon(0 0,100% 0,100% calc(100% - 90.00px),calc(100% - 90.00px) 100%,0 100%);
          `
          }}
        /> */}
      </Flex>
    </Flex>
  );
}
