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
        gap: [3, 4],
        gridTemplateColumns: ['1fr', null, '1fr 1fr']
      }}
    >
      {projects.map(({ project }) => (
        <ProjectCard
          color={project.pageColor}
          title={project.title}
          subtitle={project.subtitle}
          href={`/work/${project._sys.filename}`}
          src={project.coverImage}
          key={project._sys.filename}
        />
      ))}
    </Container>
  );
}

export default function WorkSection({
  projects,
  onViewportEnter,
  onViewportLeave
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(scrollScale, { mass: 0.1 });

  return (
    <div ref={container}>
      <Box id="work">
        <motion.div
          style={{ scale }}
          sx={{
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: 'background',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            boxShadow: 'soft.highNorth'
          }}
        >
          <motion.div
            onViewportLeave={onViewportLeave}
            sx={{
              top: 0,
              position: 'absolute',
              backgroundColor: 'red',
              height: '700vh'
            }}
          />
          <Container sx={{ textAlign: 'center' }}>
            <Heading
              as={motion.h2}
              variant="display.h1"
              sx={{ marginBottom: 2 }}
              onViewportEnter={onViewportEnter}
            >
              Work
            </Heading>

            <Text variant="body.summary">
              Latest projects ranging from event openers, tech product ads,
              social media graphics, and art expeditions.
            </Text>
          </Container>
          <ProjectsSection projects={projects} />
        </motion.div>
      </Box>
    </div>
  );
}
