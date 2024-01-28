/** @jsxImportSource theme-ui */

import { useRef } from 'react';
import { Flex } from 'krado-react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';

export default function ProjectImage({ alt, src }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const parallax = useSpring(scrollYProgress, { damping: 35 });
  const parallaxTransform = useTransform(parallax, [0, 1], [0, 0]);

  const parallaxTemplate = useMotionTemplate`${parallaxTransform}%`;
  const parallaxTemplateNegative = useMotionTemplate`-${parallaxTransform}%`;

  return (
    <div ref={container}>
      <Flex
        style={{ y: parallaxTemplate }}
        sx={{
          marginY: 4,
          marginX: [0, null, null, null, '-50%'],
          height: '100%',
          borderRadius: [2, null, null, null, 3],
          overflow: 'hidden',
          backgroundColor: 'red'
        }}
      >
        <motion.img
          layoutId={src}
          style={{ y: parallaxTemplateNegative }}
          alt={alt}
          src={src}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </Flex>
    </div>
  );
}
