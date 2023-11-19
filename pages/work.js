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
import Header from '@/components/header';
import Shade from '@/components/shade';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);

  return (
    <Layout>
      <Shade />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6]
        }}
      >
        <header
          sx={{
            display: 'flex',
            flexDirection: 'column',

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
            <ProjectCard
              title="Beloved Benefit"
              href="#"
              src="work/beloved-benefit-2.jpg"
            />
            <ProjectCard
              title="Chick-fil-A"
              href="#"
              src="work/chick-fil-a.png"
            />
            <ProjectCard
              title="Beeple Studios"
              href="#"
              src="work/beeple-3.png"
            />
            <ProjectCard
              title="Keller Willams"
              href="#"
              src="work/kw-mega-agent-camp.png"
            />
            <ProjectCard title="Ozone" href="#" src="work/ozone-4.jpg" />
            {/* <ProjectCard
              title="Rock The Bells x Ford"
              href="#"
              src="work/ford.png"
            />
            <ProjectCard title="OSOS" href="#" src="work/osos-5.jpg" /> */}
            <ProjectCard
              title="Space and Time"
              href="#"
              src="work/space-and-time.png"
            />
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
