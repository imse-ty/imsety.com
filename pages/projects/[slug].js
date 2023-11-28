/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { Flex, Image } from 'krado-react';

export default function Project() {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6],
          position: 'relative'
        }}
      >
        <header>
          <Heading>Title</Heading>
          <Image alt="My alt" src="/work/beloved-benefit-2.jpg" />
          <Flex>
            <Text>Stat</Text>
            <Text>Stat</Text>
            <Text>Stat</Text>
          </Flex>
        </header>
      </Flex>
    </Layout>
  );
}
