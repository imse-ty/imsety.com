/** @jsxImportSource theme-ui */
import Layout from '@/components/layout';
import ProjectCard from '@/components/work/project-card';
import { Container, Grid, Heading, theme } from 'krado-react';

export default function Work() {
  return (
    <Layout>
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
          <ProjectCard title="Beloved Benefit" />
          <ProjectCard title="Chick-fil-A" />
          <ProjectCard title="Beeple Studios" />
          <ProjectCard title="Rock the Bells x Ford" />
          <ProjectCard title="Space and Time" />
          <ProjectCard title="OSOS" />
        </Grid>
      </Container>
    </Layout>
  );
}
