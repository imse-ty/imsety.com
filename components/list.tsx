import { Box } from 'krado-react';

export function UnorderedList({ children }) {
  return (
    <Box as='ul' sx={{ marginLeft: 4, marginBottom: 4 }}>
      {children}
    </Box>
  );
}

export function OrderedList({ children }) {
  return (
    <Box as='ol' sx={{ marginLeft: 4, marginBottom: 4 }}>
      {children}
    </Box>
  );
}
