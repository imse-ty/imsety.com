/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Container, Flex } from 'krado-react';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import Layout from '@/components/layout';
import Hero from '@/components/hero';
import IndexSection from '@/components/index-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

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
      <IndexSection
        title='Reel'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/beeple-3.png'
      />
      <IndexSection
        title='Work'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
        imageAlt='My image'
        imageSrc='work/chick-fil-a.png'
      />
      <AboutSection
        title='About'
        subtitle='arcu, fringilla.'
        imageAlt='My image'
        imageSrc='work/space-and-time.png'
      />
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
