/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Container, Flex } from 'krado-react';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout';
import Hero from '@/components/hero';

export default function Work(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  return (
    <Layout disableScroll={false}>
      <Hero />
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
