import { Box } from 'krado-react';

export function UnorderedList({ children }) {
  return (
    <Box as='ul' sx={{ listStyleType: 'disc' }}>
      {children}
    </Box>
  );
}

export function OrderedList({ children }) {
  return (
    <Box as='ol' sx={{ listStyleType: 'number' }}>
      {children}
    </Box>
  );
}
