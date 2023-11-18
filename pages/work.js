/** @jsxImportSource theme-ui */
import CallToAction from '@/components/call-to-action';
import Heading from '@/components/fixed-krado-components/Heading';
import Layout from '@/components/layout';
import SectionTitle from '@/components/section-title';
import HorizontalCard from '@/components/work/horizontal-card';
import FullScreenVideo from '@/components/work/full-screen-video';
import ProjectCard from '@/components/work/project-card';
import ReelVideo from '@/components/work/reel-video';
import { Box, Container, Flex, Grid } from 'krado-react';
import { useState } from 'react';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}
      >
        <header
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
        </header>

        <Container>
          <SectionTitle
            title="Work"
            summary="Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit."
          />

          <Grid
            sx={{
              gap: 4,
              gridTemplateColumns: ['1fr', null, '1fr 1fr']
            }}
          >
            <ProjectCard href="#" src="/turntable-cover.jpg" />
            <ProjectCard href="#" src="" />
            <ProjectCard href="#" src="" />
            <ProjectCard href="#" src="" />
            <ProjectCard href="#" src="" />
            <ProjectCard href="#" src="" />
          </Grid>
        </Container>

        <Container>
          <Heading
            variant="display.h4"
            sx={{
              marginBottom: [3, 4]
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
            label="Lorem ipsum"
          />
          <HorizontalCard
            imageAlt="hi"
            imageSrc="/turntable-thumbnail.png"
            label="Lorem ipsum"
          />
        </Container>
        <Container>
          <CallToAction
            title="Let's connect"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id auctor neque, eu dictum urna."
          />
        </Container>
        <Box sx={{ marginBottom: 6 }} />
      </Flex>
    </Layout>
  );
}
