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
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef, useState } from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { buildMonochromaticTheme } from '@/lib/monochromatic-theme';
import { getColor } from '@theme-ui/color';
import { NextSeo } from 'next-seo';

function BodyContainer({ ...rest }) {
  return <Container as="article" sx={{ maxWidth: '900px' }} {...rest} />;
}

export default function Project(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const container = useRef(null);

  const { scrollYProgress } = useScroll({});

  const scrollScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  function checkIfBodyIsEmpty() {
    if (data.project.body.children.length > 0) {
      return true;
    } else {
      false;
    }
  }

  const pageColor = buildMonochromaticTheme(data.project.pageColor);

  return (
    <ThemeUIProvider theme={{ colors: { ...pageColor } }}>
      <NextSeo
        title={`${data.project.title} - Imsety`}
        description={data.project.subtitle}
      />
      <Layout
        typeOfCaseStudy={data.project.typeOfCaseStudy}
        showToolbarBack={true}
        isHiddenByDefault={true}
        hideTopNav
      >
        <ProjectMasthead
          title={data.project.title}
          subtitle={data.project.subtitle}
          videoUrl={data.project.videoUrl}
          coverVideo={data.project.coverVideo}
          coverImage={data.project.coverImage}
          href="/work"
          themeColor={getColor({ colors: { ...pageColor } }, 'secondary.bold')}
        />

        <ProjectInfo
          info={data.project.info}
          summary={data.project.summary}
          stats={data.project.stats}
        />
        <div ref={container}>
          <Box sx={{ backgroundColor: 'surface.extralight' }}>
            <motion.div
              style={{ scale }}
              sx={{
                transformOrigin: 'top',
                paddingTop: 6,
                backgroundColor: checkIfBodyIsEmpty()
                  ? 'soft.highNorth'
                  : 'none',
                backgroundColor: checkIfBodyIsEmpty()
                  ? 'background'
                  : 'transparent',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                overflow: 'hidden'
              }}
            >
              {checkIfBodyIsEmpty() ? (
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
              ) : null}
              <ContactSection useTransparentBackground />
            </motion.div>
          </Box>
        </div>
      </Layout>
    </ThemeUIProvider>
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
