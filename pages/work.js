/** @jsxImportSource theme-ui */
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import Section from '@/components/section';
import FullScreenVideo from '@/components/work/full-screen-video';
import ProjectCard from '@/components/work/project-card';
import ReelVideo from '@/components/work/reel-video';
import { Box, Container, Flex, Grid } from 'krado-react';
import { useState } from 'react';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <Container>
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <Section
          sx={{
            display: 'flex',
            flexDirection: 'column',

            marginTop: 6,
            height: ['60vh']
          }}
        >
          <Heading
            variant="display.display"
            sx={{
              fontWeight: '600'
            }}
          >
            Let&apos;s ◤ WORK together
          </Heading>
          <Text variant="body.summary" sx={{ marginBottom: [4, 5] }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          {!isVideoHidden && (
            <FullScreenVideo onClick={() => setIsVideoHidden(true)} />
          )}
          <ReelVideo onClick={() => setIsVideoHidden(!isVideoHidden)} />
        </Section>

        {/* <section>
          <Heading
            variant="display.h1"
            sx={{
              marginBottom: 5,
              fontSize: '128px',
              fontWeight: '600',
              fontStretch: '125%'
            }}
          >
            Featured work
          </Heading>
          <Grid
            sx={{
              gap: 5,
              gridTemplateColumns: ['1fr', null, '1fr 1fr'],
              width: '100%'
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
        <section>
          <Grid
            sx={{
              gap: 3,

              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: '20vh',
              gridTemplateColumns: '1fr 1fr'
            }}
          >
            <Heading
              sx={{
                fontWeight: '600',
                fontSize: '10vw',
                width: '100%',
                maxWidth: '50%',
                fontStretch: '125%'
              }}
            >
              Design
            </Heading>
            <Box
              sx={{
                backgroundColor: 'red',
                width: '100%',
                height: '100%',
                borderRadius: 4
              }}
            />
          </Grid>
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: '20vh'
            }}
          >
            <Text sx={{ fontSize: 8, maxWidth: '50%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis
              vehicula ipsum, nec consectetur justo.
            </Text>
            <Heading
              sx={{
                fontWeight: '600',
                fontSize: '10vw',
                fontStretch: '125%'
              }}
            >
              + code
            </Heading>
          </Flex>
        </section> */}
      </Flex>
    </Container>
  );
}
