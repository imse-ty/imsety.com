'use client';
import { Button } from 'krado-react';
import { motion } from 'framer-motion';

export default function PageButton({ children }) {
  const variants = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <Button
      as={motion.button}
      variants={variants}
      transition={{ type: 'spring', damping: 18 }}
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: 4,
        fontSize: 4,
        textTransform: 'uppercase',
        borderRadius: 3,
        textAlign: 'left'
      }}
    >
      {children}
    </Button>
  );
}
