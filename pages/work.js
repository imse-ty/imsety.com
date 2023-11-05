/** @jsxImportSource theme-ui */
import Layout from '@/components/layout';
import FullScreenVideo from '@/components/work/full-screen-video';
import ProjectCard from '@/components/work/project-card';
import ReelVideo from '@/components/work/reel-video';
import { AnimatePresence } from 'framer-motion';
import { Container, Flex, Grid, Heading } from 'krado-react';
import { useState } from 'react';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <Layout>
      <Container
        sx={{
          height: '100vh',
          overflowY: isVideoHidden ? 'initial' : 'hidden'
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: 6 }}>
          <section>
            {!isVideoHidden && (
              <FullScreenVideo onClick={() => setIsVideoHidden(true)} />
            )}
            <ReelVideo onClick={() => setIsVideoHidden(!isVideoHidden)} />
          </section>
          <section>
            <Heading
              variant="display.h1"
              sx={{ marginBottom: 5, fontSize: 11, fontWeight: '500' }}
            >
              Projects
            </Heading>
            <Grid
              sx={{
                gap: 5,
                gridTemplateColumns: ['1fr', null, '1fr 1fr'],
                width: '100%',
                height: '75vh'
              }}
            >
              <ProjectCard
                src="/20230618_020031.jpg"
                title="Beloved Benefit"
                href="/projects/hi"
                layoutId="bruh"
              />
              <ProjectCard title="Chick-fil-A" href="/projects/hi" />
              <ProjectCard title="Beeple Studios" href="/projects/hi" />
              <ProjectCard title="Rock The Bells x Ford" href="/projects/hi" />
              <ProjectCard title="Space and Time" href="/projects/hi" />
              <ProjectCard title="OSOS" href="/projects/hi" />
            </Grid>
          </section>
        </Flex>
      </Container>
    </Layout>
  );
}
