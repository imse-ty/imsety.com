/** @jsxImportSource theme-ui */
// @ts-nocheck

import Layout from '@/components/layout';
import { Container, Box, Flex } from 'krado-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import { components } from '@/lib/components';
import ProjectMasthead from '@/components/projects/project-masthead';
import ProjectInfo from '@/components/projects/project-info';

import ContactSection from '@/components/contact/contact-section';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

function BodyContainer({ ...rest }) {
  return <Container sx={{ maxWidth: '900px' }} {...rest} />;
}

export default function Project(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <Layout>
      <ProjectMasthead
        title={data.project.title}
        subtitle={data.project.subtitle}
        video={data.project.coverVideo}
        coverImage={data.project.coverImage}
        href='/work'
      />

      <ProjectInfo
        stats={data.project.stats}
        goal={data.project.goal}
        result={data.project.result}
      />
      <div ref={container}>
        <Box sx={{ backgroundColor: 'surface.extralight' }}>
          <motion.div
            style={{ scale }}
            sx={{
              paddingTop: 6,
              boxShadow: 'soft.highNorth',
              backgroundColor: 'background',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4
            }}
          >
            <BodyContainer
              sx={{
                marginY: 5,
                minHeight: '100vh'
              }}
            >
              <Flex sx={{ flexDirection: 'column' }}>
                <TinaMarkdown
                  content={data.project.body}
                  components={components}
                />
              </Flex>
            </BodyContainer>
            <ContactSection useTransparentBackground />
          </motion.div>
        </Box>
      </div>
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
