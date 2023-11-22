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
import Shade, { ShadeButton } from '@/components/shade';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Text from '@/components/fixed-krado-components/Text';

export default function Work() {
  const [isVideoHidden, setIsVideoHidden] = useState(true);
  const [isCovered, setIsCovered] = useState(true);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.45 1']
  });

  const workScroll = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const workScrollSpring = useSpring(workScroll, { damping: 20 });
  const videoScroll = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderScroll = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const workHeaderScroll = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const workHeaderScrollSpring = useSpring(workHeaderScroll, { damping: 20 });

  return (
    <Layout disableScroll={!isVideoHidden}>
      <Shade isCovered={isCovered} onTap={() => setIsCovered(!isCovered)}>
        <ShadeButton
          href="#"
          onClick={() => {
            setIsCovered(false);
            setIsVideoHidden(false);
          }}
        >
          Play reel
        </ShadeButton>
        <ShadeButton
          href="/work/#work"
          variant="ghost"
          onClick={() => {
            setIsCovered(false);
            setIsVideoHidden(true);
          }}
        >
          View work
        </ShadeButton>
      </Shade>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: [5, 6],
          position: 'relative'
        }}
      >
        <motion.header
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            width: '100%',
            height: '100vh'
          }}
        >
          {!isVideoHidden && (
            <FullScreenVideo
              onClick={() => setIsVideoHidden(true)}
              style={{ scale: videoScroll, borderRadius: borderScroll }}
            />
          )}
          <ReelVideo
            onClick={() => setIsVideoHidden(!isVideoHidden)}
            style={{ scale: videoScroll, borderRadius: borderScroll }}
          />
        </motion.header>

        <Flex
          as={motion.div}
          sx={{
            marginTop: '100vh',
            padding: [3, 4, 5],
            width: '100%',
            gap: [5, 6],
            backgroundColor: 'background',
            flexDirection: 'column',
            borderTopLeftRadius: ['40px', '80px'],
            borderTopRightRadius: ['40px', '80px'],
            zIndex: 2
          }}
          style={{ scale: workScrollSpring }}
        >
          <Container>
            <div ref={ref}>
              <Heading
                as={motion.h2}
                variant="display.display"
                id="work"
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
                variant="body.summary"
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
            </div>
          </Container>

          <Container>
            <Heading
              variant="body.pretext"
              sx={{
                marginBottom: [2, 3]
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
        </Flex>

        {/* <Container sx={{ position: 'fixed', bottom: 0 }}>
          <CallToAction
            title="Let's connect"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id auctor neque, eu dictum urna."
          />
        </Container> */}
        <Box />
      </Flex>
    </Layout>
  );
}
