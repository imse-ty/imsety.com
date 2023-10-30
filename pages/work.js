/** @jsxImportSource theme-ui */
import Layout from '@/components/layout';
import ProjectCard from '@/components/work/project-card';
import { AnimatePresence } from 'framer-motion';
import { Container, Grid, Heading, theme } from 'krado-react';

export default function Work() {
  return (
    <Layout>
      <AnimatePresence>
        <Container sx={{ height: '100vh' }}>
          <Heading
            variant="display.h1"
            sx={{ marginBottom: 5, fontSize: 11, fontWeight: '500' }}
          >
            Projects
          </Heading>
          <Grid
            sx={{
              gap: 5,
              gridTemplateColumns: '1fr 1fr',
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
        </Container>
      </AnimatePresence>
    </Layout>
  );
}
