/** @jsxImportSource theme-ui */
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import Section from '@/components/section';
import HorizontalCard from '@/components/work/HorizontalCard';
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
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <section
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: [4, 5],
            width: '100%',
            height: '100vh'
          }}
        >
          {!isVideoHidden && (
            <FullScreenVideo onClick={() => setIsVideoHidden(true)} />
          )}
          <ReelVideo onClick={() => setIsVideoHidden(!isVideoHidden)} />
        </section>

        <Container>
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
        </Container>

        <Container>
          <Heading
            variant="display.h3"
            sx={{
              marginBottom: 3,
              fontWeight: '600'
            }}
          >
            Areas of expertise
          </Heading>
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Motion design"
          />
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Web & mobile design"
          />
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Consultancy"
          />
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Consultancy"
          />
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Consultancy"
          />
        </Container>
      </Flex>
    </Layout>
  );
}
