/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { Container, Flex, Button, Box } from 'krado-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdNorthEast } from 'react-icons/md';

export function Custom404Footer() {
  const router = useRouter();

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 'auto',
        marginBottom: 5,
        paddingBottom: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: 1
      }}
    >
      <Text>Dang!</Text>
      <Text suppressHydrationWarning>
        Whatever this &quot;{router.asPath}&quot; page is, it doesn&apos;t exist
        🤔
      </Text>
    </Container>
  );
}

export default function Custom404() {
  return (
    <Layout>
      <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
        <Container
          sx={{
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
              background:
                'linear-gradient(180deg, rgba(217, 217, 217, 0.00) 4.23%, #000000 60%)'
            }}
          />
          <Heading
            variant='none'
            sx={{ fontWeight: 'bold', fontSize: ['100px', '200px', '500px'] }}
          >
            WHAT?!
          </Heading>

          <Link
            href='/'
            sx={{
              zIndex: 1
            }}
          >
            <Button leftIcon={<MdNorthEast />}>Go home?</Button>
          </Link>
        </Container>
        <Custom404Footer />
      </Flex>
    </Layout>
  );
}
