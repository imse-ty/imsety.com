/** @jsxImportSource theme-ui */
// @ts-nocheck

import CallToAction from '@/components/call-to-action';
import Layout from '@/components/layout';
import FullScreenVideo from '@/components/work/full-screen-video';
import ReelVideo from '@/components/work/reel-video';
import { Box, Flex } from 'krado-react';
import { useState } from 'react';
import Shade, { ShadeButton } from '@/components/shade';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import client from '@/tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import ProjectsSection from '@/components/work/projects-section';
import ServicesSection from '@/components/work/services-section';

export default function Work(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  const [isVideoHidden, setIsVideoHidden] = useState(true);
  const [isCovered, setIsCovered] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ['0 1', '0.45 1']
  });

  const scrollCtaProgress = useScroll({
    offset: ['200vh end', 'center center']
  }).scrollYProgress;

  const workScroll = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const workScrollSpring = useSpring(workScroll, { damping: 20 });
  const videoScroll = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderScroll = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Layout disableScroll={!isVideoHidden}>
      <Shade isCovered={isCovered} onTap={() => setIsCovered(!isCovered)}>
        <ShadeButton
          href='#'
          onClick={() => {
            setIsCovered(false);
            setIsVideoHidden(false);
          }}
        >
          Play reel
        </ShadeButton>
        <ShadeButton
          href='/work/#work'
          variant='ghost'
          onClick={() => {
            setIsCovered(false);
            setIsVideoHidden(true);
          }}
        >
          View work
        </ShadeButton>
      </Shade>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6],
          position: 'relative'
        }}
      >
        <motion.header
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            width: '100%',
            height: '100vh'
          }}
        >
          {!isVideoHidden && (
            <FullScreenVideo
              onClick={() => setIsVideoHidden(true)}
              style={{ scale: videoScroll, borderRadius: borderScroll }}
              layoutId='video'
            />
          )}
          <ReelVideo
            onClick={() => setIsVideoHidden(!isVideoHidden)}
            style={{ scale: videoScroll, borderRadius: borderScroll }}
            layoutId='video'
          />
        </motion.header>

        <Flex
          as={motion.div}
          sx={{
            position: 'relative',
            marginTop: '100vh',
            marginBottom: '40vh',
            paddingBottom: 6,
            width: '100%',
            gap: [5, 6],
            backgroundColor: 'background',
            flexDirection: 'column',
            borderRadius: ['40px', '80px'],
            zIndex: 2
          }}
          style={{ scale: workScrollSpring }}
        >
          <ProjectsSection projects={projectsList} />
          <ServicesSection />
        </Flex>

        <motion.footer style={{ opacity: scrollCtaProgress }}>
          <CallToAction
            title="Let's connect"
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id auctor neque, eu dictum urna.'
          />
        </motion.footer>
      </Flex>
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
