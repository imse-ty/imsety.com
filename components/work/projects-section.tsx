/** @jsxImportSource theme-ui */
// @ts-nocheck

import { useRef } from 'react';
import { Grid, Container, Text, Heading } from 'krado-react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import ProjectCard from './project-card';

export default function ProjectsSection({ projects }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.45 1']
  });

  const workScroll = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const workScrollSpring = useSpring(workScroll, { damping: 20 });
  const workHeaderScroll = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const workHeaderScrollSpring = useSpring(workHeaderScroll, { damping: 20 });

  return (
    <Container as='main'>
      <div ref={ref}>
        <Heading
          as={motion.h2}
          variant='display.display'
          id='work'
          sx={{
            marginTop: 5,
            marginBottom: 3,
            textAlign: 'center',
            scrollMarginTop: '3.8em'
          }}
          style={{
            scale: workScrollSpring,
            opacity: workHeaderScrollSpring
          }}
        >
          Featured work
        </Heading>

        <Text
          as={motion.h2}
          variant='body.summary'
          sx={{
            marginBottom: 5,
            textAlign: 'center',
            fontWeight: 400
          }}
          style={{
            scale: workScrollSpring,
            opacity: workHeaderScrollSpring
          }}
        >
          Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
          adipiscing augue sit.
        </Text>

        <Grid
          sx={{
            gap: 4,
            gridTemplateColumns: ['1fr', null, '1fr 1fr']
          }}
        >
          {projects.map(({ project }) => (
            <ProjectCard
              title={project.title}
              href={`/projects/${project._sys.filename}`}
              src={project.coverImage}
              key={project._sys.filename}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
}
