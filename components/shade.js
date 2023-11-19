import { motion } from 'framer-motion';
import { Box } from 'krado-react';
import { useState } from 'react';

export default function Shade() {
  const notchSize = 75;
  const [isCovered, setIsCovered] = useState(true);

  console.log(isCovered);

  const shadeVariants = {
    show: {
      clipPath: `
      polygon(
        0% 0px,                 /* top left */
        0px 0%,                 /* top left */
        0px 0%,    /* top right */
        100% 0px,               /* top right */
        100% calc(100% - ${notchSize}px),  /* bottom right */
        calc(100% - ${notchSize}px) 100%,  /* bottom right */
        0px 100%,               /* bottom left */
        0 0px      /* bottom left */
        )
      `
    },
    hide: {
      clipPath: `
        polygon(
          0% 0px,                 /* top left */
          0px 0%,                 /* top left */
          0px 0%,    /* top right */
          100% 0px,               /* top right */
          100% calc(-100% + ${notchSize}px),  /* bottom right */
          calc(-100% + ${notchSize}px) 100%,  /* bottom right */
          0px 100%,               /* bottom left */
          0 0px      /* bottom left */
          )
        `
    }
  };

  return (
    <Box
      as={motion.div}
      variants={shadeVariants}
      initial="show"
      animate={isCovered ? 'show' : 'hide'}
      transition={{ type: 'spring' }}
      onTap={() => setIsCovered(!isCovered)}
      sx={{
        position: 'absolute',

        // bottom: `calc(100% - ${notchSize}px)`,
        // right: `calc(100% - ${notchSize}px)`,

        // transform: `translate(calc(-100% + 75px), calc(-100% + 75px))`,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'gray',
        zIndex: 5
        // clipPath: `
        // polygon(
        //   0% 0px,                 /* top left */
        //   0px 0%,                 /* top left */
        //   0px 0%,    /* top right */
        //   100% 0px,               /* top right */
        //   100% calc(100% - ${notchSize}px),  /* bottom right */
        //   calc(100% - ${notchSize}px) 100%,  /* bottom right */
        //   0px 100%,               /* bottom left */
        //   0 0px      /* bottom left */
        //   )
        // `
      }}
    >
      shade-test
    </Box>
  );
}
