/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import { PortableText } from '@portabletext/react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useLiveQuery } from 'next-sanity/preview';

import { readToken } from '@/lib/sanity.api';
import { getClient } from '@/lib/sanity.client';
import {
  getPost,
  type Post,
  postBySlugQuery,
  postSlugsQuery
} from '@/lib/sanity.queries';
import type { SharedPageProps } from '@/pages/_app';
import Layout from '@/components/layout';
import Text from '@/components/fixed-krado-components/Text';
import { Box, Container, Flex, Image } from 'krado-react';
import { components } from '@/lib/components';

export function ProjectStat({ children }) {
  return (
    <Text
      variant="body.h1"
      sx={{ borderLeft: 1, borderColor: 'divider', paddingX: 4 }}
    >
      {children}
    </Text>
  );
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const [post] = useLiveQuery(props.post, postBySlugQuery, {
    slug: props.post.slug.current
  });

  console.log(post.body);

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
          as="header"
          sx={{
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw'
          }}
        >
          <Image
            alt="My alt"
            src="/work/beloved-benefit-2.jpg"
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
                <Heading variant="display.display" sx={{ marginBottom: 3 }}>
                  {post.title}
                </Heading>
                <Text
                  variant="body.summary"
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

        <Container
          sx={{
            maxWidth: '1440px',
            height: '100vh'
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <PortableText value={post.body} components={components} />
          </Flex>
        </Container>
      </Flex>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const client = getClient();
  const slugs = await client.fetch(postSlugsQuery);

  return {
    paths: slugs?.map(({ slug }) => `/projects/${slug}`) || [],
    fallback: 'blocking'
  };
};

interface Query {
  [key: string]: string;
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    post: Post;
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const post = await getPost(client, params.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      post
    }
  };
};
