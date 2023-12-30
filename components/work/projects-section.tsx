/** @jsxImportSource theme-ui */
// @ts-nocheck

import { Grid, Container } from 'krado-react';
import ProjectCard from './project-card';

export default function ProjectsSection({ projects }) {
  return (
    <Grid
      sx={{
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
