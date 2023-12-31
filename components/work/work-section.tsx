/** @jsxImportSource theme-ui */

import { Container } from 'krado-react';

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Grid } from 'krado-react';
import ProjectCard from './project-card';

function ProjectsSection({ projects }) {
  return (
    <Grid
      sx={{
        marginTop: 5,
        gap: 0,
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
    </Grid>
  );
}

export default function WorkSection({ projects }) {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: 6,
          backgroundColor: 'black',
          borderRadius: '48px'
        }}
      >
        <Container
          sx={{
            textAlign: 'center'
          }}
        >
          <Heading
            variant='display.h1'
            sx={{
              marginBottom: 2,
              scrollMarginTop: '3.8em'
            }}
          >
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
