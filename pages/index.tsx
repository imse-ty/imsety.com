/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';
import { Container, Box, Flex } from 'krado-react';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { useRef, useState } from 'react';
import Work from './work';

import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import ProjectsSection from '@/components/work/projects-section';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import Tooltip from '@/components/tooltip';
import AboutHero from '@/components/about/about-hero';

export default function Home(props) {
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

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scaleSpring = useSpring(scale, { damping: 30 });

  const projectsList = data.workPage.projects;

  const [isContactHidden, setIsContactHidden] = useState(true);

  return (
    <Layout>
      <Shade>
        <IndexSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='#work'
        />
      </Shade>

      <div ref={container}>
        <motion.div
          as={motion.div}
          style={{ scale: scaleSpring }}
          sx={{
            position: 'relative',
            top: 0,
            zIndex: 1,
            scrollSnapAlign: 'start',
            backgroundColor: 'black'
          }}
        >
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
        </motion.div>
      </div>

      <motion.div
        onViewportEnter={() => setIsContactHidden(!isContactHidden)}
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: '#080808',
          paddingBottom: 7
        }}
      >
        <AboutHero />
        <Container sx={{ maxWidth: '900px' }}>
          <Flex sx={{ flexDirection: 'column', gap: 4, marginBottom: 5 }}>
            <Tooltip label='Timeline' text='2 months' />
            <Tooltip label='Year' text='2023' />
            <Tooltip label='Stress meter' text='Max' />
          </Flex>
          <Text variant='body.summary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            arcu, fringilla a egestas condimentum, vulputate at purus. Sed enim
            diam, rhoncus congue gravida ultrices, iaculis ac metus.
            Pellentesque eget blandit leo, facilisis fermentum mi.
          </Text>
        </Container>
      </motion.div>
      <AnimatePresence>
        {!isContactHidden && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: 'fixed',
              width: '100%',
              top: 0,
              left: 0
            }}
          >
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
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
