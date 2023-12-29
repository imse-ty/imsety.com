import Shade from '@/components/shade';
import { Box } from 'krado-react';

export default function ShadeTest() {
  return (
    <div>
      <Shade />
      <Box
        sx={{ width: '100vw', height: '100vh', backgroundColor: 'salmon' }}
      />
    </div>
  );
}
