/** @jsxImportSource theme-ui */

import Heading from '@/components/fixed-krado-components/Heading';
import Layout from '@/components/layout';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex, Image } from 'krado-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useTina } from 'tinacms/dist/react';
import { useThemedStylesWithMdx } from '@theme-ui/mdx';
import client from '@/tina/__generated__/client';
import { components } from '@/lib/components';

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

export default function Project(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

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
                  {data.post.title}
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

        <Container
          sx={{
            maxWidth: '1440px',
            height: '100vh'
          }}
        >
          <Flex sx={{ flexDirection: 'column' }}>
            <TinaMarkdown content={data.post.body} components={components} />
          </Flex>
        </Container>
      </Flex>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();

  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { slug: post.node._sys.filename }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.mdx` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query
      //myOtherProp: 'some-other-data',
    }
  };
};
