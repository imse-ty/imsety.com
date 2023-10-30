import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function Project() {
  return (
    <div>
      <motion.img
        transition={{ type: 'spring' }}
        src="/20230618_020031.jpg"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
        layoutId="bruh"
      />
    </div>
  );
}
