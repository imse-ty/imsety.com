import Layout from '@/components/layout';
import { motion } from 'framer-motion';
import { Button, Flex, Image } from 'krado-react';
import Link from 'next/link';
import React from 'react';

export default function Project() {
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          gap: 5
        }}
      >
        <Image
          as={motion.img}
          transition={{ type: 'spring', damping: 16 }}
          src="/work/beloved-benefit-2.jpg"
          alt="My alt"
          sx={{
            width: '50%',
            height: 'auto'
          }}
          layoutId="thumbnail"
        />
        <Link href="/work#work">
          <Button>Back</Button>
        </Link>
      </Flex>
    </Layout>
  );
}
