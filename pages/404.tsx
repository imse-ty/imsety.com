/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { setyTheme } from '@/lib/site-theme';
import { getColor } from '@theme-ui/color';
import { motion } from 'framer-motion';
import { Container, Flex, Button, Box } from 'krado-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdHome } from 'react-icons/md';

export function Custom404Footer() {
  const router = useRouter();

  return (
    <Flex
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        marginTop: 'auto',
        textAlign: 'center',
        marginBottom: 5,
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: 1
      }}
    >
      <Text
        as='p'
        variant='body.summary'
        sx={{ fontWeight: ['bold', 'initial'] }}
      >
        404
      </Text>
      <Text as='p' variant='body.summary' suppressHydrationWarning>
        This &quot;{router.asPath}&quot; page sadly does not&nbsp;exist.
      </Text>
    </Flex>
  );
}

export default function Custom404() {
  return (
    <Layout isToolbarHidden forceHideNav>
      <Container
        sx={{
          height: '100vh',
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: (theme) =>
              `linear-gradient(180deg, rgba(217, 217, 217, 0.00) 35%, ${theme.colors.background} 52%)`,
            zIndex: 1
          }}
        />
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: [5, null, 9]
          }}
        >
          <Heading
            as={motion.h1}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 40 }}
            variant='none'
            sx={{
              color: 'secondary.light',
              fontWeight: 'bold',
              fontSize: ['75px', '100px', '200px', null, '400px']
            }}
          >
            WHAT?!
          </Heading>

          <Link
            href='/'
            sx={{
              zIndex: 1
            }}
          >
            <Button leftIcon={<MdHome />}>Go home</Button>
          </Link>
        </Flex>
        <Custom404Footer />
      </Container>
    </Layout>
  );
}
