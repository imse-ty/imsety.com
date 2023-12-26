/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import { components } from '@/lib/components';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { Box, Container, Flex, Image } from 'krado-react';

export function ProjectStat({ children }) {
  return (
    <Text
      variant='body.h1'
      sx={{ borderLeft: 1, borderColor: 'divider', paddingX: 4 }}
    >
      {children}
    </Text>
  );
}

export default function Project({ post }) {
  console.log(post);

  return (
    <Layout disableScroll={false}>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6],
          position: 'relative'
        }}
      >
        <Flex
          as='header'
          sx={{
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw'
          }}
        >
          <Image
            alt='My alt'
            src='/work/beloved-benefit-2.jpg'
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '75%'
            }}
          />
          <Container sx={{ height: '100%' }}>
            <Flex
              sx={{
                flexDirection: ['column', null, null, 'row'],
                width: '100%',
                height: '100%',
                justifyContent: ['left', null, null, 'space-between'],
                gap: [5, null, null, 0],
                alignItems: ['left', null, null, 'center']
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                <Heading variant='display.display' sx={{ marginBottom: 3 }}>
                  {post?.title}
                </Heading>
                <Text
                  variant='body.summary'
                  sx={{
                    fontWeight: 400
                  }}
                >
                  Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                  adipiscing augue sit.
                </Text>
              </Flex>
              <Flex>
                <ProjectStat>800 Hrs</ProjectStat>
                <ProjectStat>$130k</ProjectStat>
                <ProjectStat>88.00</ProjectStat>
              </Flex>
            </Flex>
          </Container>
        </Flex>

        <Box sx={{ backgroundColor: 'red', width: '100%', height: '100vh' }}>
          <PortableText value={post.body} components={components} />
        </Box>
      </Flex>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const post = await client.fetch(
    `
  *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      post
    }
  };
}
