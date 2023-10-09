/** @jsxImportSource theme-ui */

import { Flex, Text, ToggleIcon } from 'krado-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode } from 'theme-ui';

export default function IndexHeader() {
  const [colorMode, setColorMode] = useColorMode('dark');
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <ToggleIcon
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
        sx={{ fontSize: 8, color: 'secondary.regular', boxShadow: 3 }}
      >
        {colorMode === 'default' ? <FaSun /> : <FaMoon />}
      </ToggleIcon>
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
    </Flex>
  );
}
