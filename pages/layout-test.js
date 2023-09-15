/** @jsxImportSource theme-ui */

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from 'krado-react';

export default function LayoutTest() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  return <Box sx={{ height: '100vh', backgroundColor: 'tomato' }}>hi</Box>;
}
