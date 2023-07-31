'use client';
import { Button } from 'krado-react';

export default function PageButton({ children }) {
  return (
    <Button
      sx={{
        display: 'flex',
        width: '100%',
        height: ['139px', '376px'],
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
