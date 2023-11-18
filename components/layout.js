'use client';

import MouseTrail from '@pjsalita/react-mouse-trail';
import { Box } from 'krado-react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Layout({ children }) {
  // const container = useRef();

  // const circle = useRef();

  // const manageMouseMove = (event) => {
  //   const { clientX, clientY } = event;

  //   const containerPosition = container.current.getBoundingClientRect();

  //   const x = clientX - containerPosition.x;

  //   const y = clientY - containerPosition.y;

  //   circle.current.style.top = y + 'px';

  //   circle.current.style.left = x + 'px';

  //   draw(x, y);
  // };

  // const draw = (x, y) => {
  //   const div = document.createElement('div');

  //   div.classList.add('circle');

  //   div.style.top = y + 'px';

  //   div.style.left = x + 'px';

  //   container.current.append(div);
  // };

  const config = {
    color: '#000000',
    idleAnimation: false,
    idleAnimationCount: 10,
    inverted: true,
    size: 10,
    trailCount: 20
  };

  return (
    <Box
      as="main"
      backgroundColor="background"
      sx={{
        height: '100vh'
      }}
    >
      {/* <div ref={circle} className="circle"></div> */}
      {/* <MouseTrail {...config} /> */}
      {children}
    </Box>
  );
}
