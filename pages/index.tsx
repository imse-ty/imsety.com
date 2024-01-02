/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import ReelSection from '@/components/reel/reel-section';
import Shade from '@/components/shade';
import WorkSection from '@/components/work/work-section';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import AboutSection from '@/components/about/about-section';
import ContactSection from '@/components/contact/contact-section';

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  return (
    <Layout>
      <Shade>
        <ReelSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='#work'
        />
      </Shade>
      <div id='reel' sx={{ scrollMarginTop: '100vh' }} />

      <div sx={{ position: 'relative', zIndex: 1 }}>
        <WorkSection projects={projectsList} />
        <AboutSection
          title='About'
          subtitle='arcu, fringilla.'
          imageAlt='My image'
          imageSrc='work/space-and-time.png'
          href='/about'
        />
        <ContactSection />
      </div>
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
