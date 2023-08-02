/** @jsxImportSource theme-ui */

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LayoutTest() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  return (
    <motion.div
      onClick={() => setIsBoxVisible(!isBoxVisible)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        padding: 4,
        backgroundColor: 'lightGray',
        gap: 4
      }}
    >
      <AnimatePresence>
        <motion.div sx={{ height: '50%', backgroundColor: 'tomato' }} layout>
          Box
        </motion.div>
        {isBoxVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{ height: '50%', backgroundColor: 'tomato' }}
            layout
          >
            Box
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
