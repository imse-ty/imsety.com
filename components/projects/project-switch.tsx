/** @jsxImportSource theme-ui */
// @ts-nocheck

import Text from '@/components/fixed-krado-components/Text';
import { motion } from 'framer-motion';
import { Flex } from 'krado-react';
import Link from 'next/link';

export function SwitchLabel({ href, onClick, children, ...rest }) {
  return (
    <Link
      href={href}
      scroll={false}
      onClick={onClick}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',

        textDecoration: 'none'
      }}
    >
      <Text
        {...rest}
        sx={{
          transition: 'color, font-weight 0.5s',
          '&:hover': {
            color: 'surface.thin',
            fontWeight: 600
          }
        }}
      >
        {children}
      </Text>
    </Link>
  );
}

export default function Switch({
  isOn,
  firstLabelOnClick,
  secondLabelOnClick
}) {
  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring' }}
      sx={{
        display: ['none', null, 'flex'],
        backgroundColor: 'surface.bold',
        width: '200px',
        height: '48px',
        justifyContent: isOn ? 'flex-start' : 'flex-end',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 2,
        boxShadow: 'hard.high'
      }}
    >
      <motion.div
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: 'surface.regular',
          borderRadius: 2
        }}
        style={{ originY: '0px' }}
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
          href={`/work/beloved-benefit-2023`} //This is hard coded for now
          onClick={firstLabelOnClick}
          sx={{
            color: isOn ? 'surface.extrathin' : 'surface.extralight',
            fontWeight: isOn ? 600 : 300
          }}
        >
          Detailed
        </SwitchLabel>
        <SwitchLabel
          variant='body.footnote'
          href={`/work/beloved-benefit-2023-simple`} //This is hard coded for now
          onClick={secondLabelOnClick}
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
