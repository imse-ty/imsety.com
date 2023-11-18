/** @jsxImportSource theme-ui */
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import Section from '@/components/section';
import FullScreenVideo from '@/components/work/full-screen-video';
import ProjectCard from '@/components/work/project-card';
import ProjectCardV2 from '@/components/work/project-card-v2';
import ReelVideo from '@/components/work/reel-video';
import { Box, Container, Flex, Grid } from 'krado-react';
import { useState } from 'react';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <Layout>
      <Container>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Section
            sx={{
              display: 'flex',
              flexDirection: 'column',

              marginTop: 6,
              height: ['70vh']
            }}
          >
            <Heading
              variant="display.display"
              sx={{
                marginBottom: 3,
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

          <Section>
            <Flex
              sx={{
                flexDirection: ['column', null, 'row'],
                marginBottom: [4, null, 5],
                borderRadius: '24px',
                border: '2px solid',
                paddingX: [0, null, 5],
                borderColor: 'secondary.bold',
                height: ['146px', '200px', null, '116px']
              }}
            >
              <Heading
                variant="display.h1"
                sx={{
                  paddingX: [4, null, 0],
                  marginY: 'auto',
                  fontWeight: '500'
                }}
              >
                Recent work
              </Heading>
              <Box
                sx={{
                  marginX: [0, null, 5],
                  width: ['100%', null, '2px'],
                  height: ['2px', null, '100%'],
                  backgroundColor: 'secondary.bold'
                }}
              />
              <Text
                variant="body.h2"
                sx={{
                  paddingX: [4, null, 0],
                  marginY: 'auto',
                  fontWeight: '500',
                  maxWidth: ['none', null, '50%']
                }}
              >
                Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                adipiscing augue sit.
              </Text>
            </Flex>
            <Grid
              sx={{
                gap: 4,
                gridTemplateColumns: ['1fr', null, '1fr 1fr']
              }}
            >
              <ProjectCardV2 href="#" src="/turntable-cover.jpg" />
              <ProjectCardV2 href="#" src="" />
              <ProjectCardV2 href="#" src="" />
              <ProjectCardV2 href="#" src="" />
              <ProjectCardV2 href="#" src="" />
              <ProjectCardV2 href="#" src="" />
            </Grid>
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
    </Layout>
  );
}
