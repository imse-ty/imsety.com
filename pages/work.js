/** @jsxImportSource theme-ui */
import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import Layout from '@/components/layout';
import Section from '@/components/section';
import SectionTitle from '@/components/section-title';
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
