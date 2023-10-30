/** @jsxImportSource theme-ui */
import Layout from '@/components/layout';
import ProjectCard from '@/components/project-card';
import { Container, Grid, Heading, theme } from 'krado-react';

export default function Work() {
  return (
    <Layout>
      <Container sx={{ height: '100vh' }}>
        <Heading
          variant="display.h1"
          sx={{ marginBottom: 5, fontWeight: '500' }}
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
            title="Beloved Benefit"
            alt="nah"
            src="/20230618_020031.jpg"
          />
          <ProjectCard
            title="Chick-fil-A"
            alt="nah"
            src="/20230824_081204.jpg"
          />
          <ProjectCard
            title="Beeple Studios"
            alt="nah"
            src="/20230824_081204.jpg"
          />
          <ProjectCard
            title="Keller Williams"
            alt="nah"
            src="/20230618_020031.jpg"
          />
        </Grid>
      </Container>
    </Layout>
  );
}
