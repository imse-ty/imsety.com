import { Box } from 'krado-react';

export default function Section({ ...rest }) {
  return <Box sx={{ width: '100%', maxWidth: '1336px' }} {...rest} />;
}
