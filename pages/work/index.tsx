/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Container } from 'krado-react';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout';
import ContactSection from '@/components/contact-section';
import ProjectsSection from '@/components/work/projects-section';
import Text from '@/components/fixed-krado-components/Text';
import Heading from '@/components/fixed-krado-components/Heading';

export default function Work(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  return (
    <Layout disableScroll={false}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 7,
          marginBottom: 5
        }}
      >
        <Heading
          variant='display.display'
          sx={{
            marginTop: 5,
            marginBottom: 3,
            textAlign: 'center',
            scrollMarginTop: '3.8em'
          }}
        >
          Featured work
        </Heading>

        <Text
          variant='body.summary'
          sx={{
            textAlign: 'center',
            fontWeight: 400
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Container>
      <ProjectsSection projects={projectsList} />
      <ContactSection />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.workPage({
    relativePath: 'work-page.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
