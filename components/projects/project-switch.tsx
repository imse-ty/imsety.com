/** @jsxImportSource theme-ui */
// @ts-nocheck

import Text from '@/components/fixed-krado-components/Text';
import { motion } from 'framer-motion';
import { Box, Flex } from 'krado-react';
import { useState } from 'react';

export function SwitchLabel({ children, ...rest }) {
  return (
    <Text
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        transition: 'color, font-weight 0.5s',
        '&:hover': {
          color: 'surface.thin'
        }
      }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default function Switch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <Flex
      as={motion.div}
      sx={{
        backgroundColor: 'surface.bold',
        width: '200px',
        height: '48px',
        justifyContent: isOn ? 'flex-start' : 'flex-end',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 2,
        boxShadow: 'hard.high'
      }}
      onClick={() => setIsOn(!isOn)}
    >
      <motion.div
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: 'surface.regular',

          borderRadius: 2
        }}
        layout
      />

      <Flex
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute'
        }}
      >
        <SwitchLabel
          variant='body.footnote'
          sx={{
            color: isOn ? 'surface.extrathin' : 'surface.extralight',
            fontWeight: isOn ? 600 : 300
          }}
        >
          Detailed
        </SwitchLabel>
        <SwitchLabel
          variant='body.footnote'
          sx={{
            color: isOn ? 'surface.extralight' : 'surface.extrathin',
            fontWeight: isOn ? 300 : 600,
            transition: 'color, font-weight 0.5s'
          }}
        >
          Brief
        </SwitchLabel>
      </Flex>
    </Flex>
  );
}
