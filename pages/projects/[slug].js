import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function Project({ layoutId }) {
  return (
    <div>
      <AnimatePresence>
        <motion.img
          transition={{ type: 'spring' }}
          src="/20230618_020031.jpg"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
          layoutId={layoutId}
        />
      </AnimatePresence>
    </div>
  );
}
