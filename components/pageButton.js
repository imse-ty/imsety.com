'use client';
import { Button } from 'krado-react';

export default function PageButton({ children }) {
  return (
    <Button
      paddingTop={5}
      padding={4}
      sx={{
        width: '100%',
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
