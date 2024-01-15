/** @jsxImportSource theme-ui */

import Heading from '../fixed-krado-components/Heading';
import Text from '../fixed-krado-components/Text';
import { Box, Container } from 'krado-react';
import ProjectCard from './project-card';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <div ref={container}>
      <Box id='work'>
        <motion.div
          style={{ scale }}
          sx={{
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'background',
            borderRadius: 4,
            boxShadow: 'soft.highNorth'
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
        </motion.div>
      </Box>
    </div>
  );
}
