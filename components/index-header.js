/** @jsxImportSource theme-ui */

import { Box, Button, Flex, Text } from 'krado-react';
import { motion } from 'framer-motion';
import { MdInfoOutline } from 'react-icons/md';

export default function IndexHeader() {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <motion.a
        href="https://imsety.com"
        target="_blank"
        rel="noopener"
        whileHover={{ scale: 1.4 }}
        transition={{ type: 'spring' }}
        sx={{ textDecoration: 'none' }}
      >
        <Text
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontStretch: 'expanded',
            fontSize: [5, 6]
          }}
        >
          Imsety
        </Text>
      </motion.a>
    </Flex>
  );
}
