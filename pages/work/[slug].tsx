/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Layout from '@/components/layout';
import Text from '@/components/fixed-krado-components/Text';
import { Container, Flex, Box, Image } from 'krado-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import { components } from '@/lib/components';
import ProjectHeader from '@/components/projects/project-header';
import ProjectInfo from '@/components/projects/project-info';
import Tooltip from '@/components/tooltip';
import ContactSection from '@/components/contact-section';

export default function Project(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  return (
    <Layout>
      <ProjectHeader
        title={data.project.title}
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc={data.project.coverImage}
        href='/work'
      />
      <Box sx={{ paddingY: 6, backgroundColor: 'secondary.bold' }}>
        <Container sx={{ maxWidth: '900px' }}>
          <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
            <Tooltip
              label='Timeline'
              text='2 months'
              labelColor='secondary.regular'
              textColor='secondary.contrast'
              dividerColor='surface.bold'
            />
            <Tooltip
              label='Year'
              text='2023'
              labelColor='secondary.regular'
              textColor='secondary.contrast'
              dividerColor='surface.bold'
            />
            <Tooltip
              label='Stress meter'
              text='Max'
              labelColor='secondary.regular'
              textColor='secondary.contrast'
              dividerColor='surface.bold'
            />
          </Flex>
        </Container>
        <ProjectInfo />
      </Box>

      <Container
        sx={{
          marginTop: 5,
          maxWidth: '900px',
          minHeight: '100vh'
        }}
      >
        <Flex sx={{ flexDirection: 'column' }}>
          <TinaMarkdown content={data.project.body} components={components} />
        </Flex>
      </Container>
      <ContactSection useTransparentBackground />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const projectsListData = await client.queries.projectConnection();

  return {
    paths: projectsListData.data.projectConnection.edges.map((project) => ({
      params: { slug: project.node._sys.filename }
    })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.mdx` };
  try {
    const res = await client.queries.project(variables);
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
