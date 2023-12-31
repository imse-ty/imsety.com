/** @jsxImportSource theme-ui */

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container } from 'krado-react';
import ProjectCard from './project-card';

function ProjectsSection({ projects }) {
  return (
    <Container
      sx={{
        display: 'grid',
        marginTop: 5,
        gap: 4,
        gridTemplateColumns: ['1fr', null, '1fr 1fr']
      }}
    >
      {projects.map(({ project }) => (
        <ProjectCard
          title={project.title}
          href={`/work/${project._sys.filename}`}
          src={project.coverImage}
          key={project._sys.filename}
        />
      ))}
    </Container>
  );
}

export default function WorkSection({ projects }) {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: 'background',
          borderRadius: '48px 48px 0px 0px'
        }}
      >
        <Container sx={{ textAlign: 'center' }}>
          <Heading variant='display.h1' sx={{ marginBottom: 2 }}>
            Work
          </Heading>

          <Text variant='body.summary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Container>
        <ProjectsSection projects={projects} />
      </Box>
    </Box>
  );
}
