/** @jsxImportSource theme-ui */
//@ts-nocheck

import Layout from '@/components/layout';
import ReelSection from '@/components/reel/reel-section';
import Shade from '@/components/shade';
import WorkSection from '@/components/work/work-section';
import { useTina } from 'tinacms/dist/react';
import client from '@/tina/__generated__/client';
import AboutSection from '@/components/about/about-section';
import ContactSection from '@/components/contact/contact-section';
import Hero from '@/components/hero';
import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  const [isVideoActive, setIsVideoActive] = useState(false);

  const { scrollYProgress } = useScroll();

  const [isPlayButtonHidden, setIsPlayButtonHidden] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.05) {
      setIsPlayButtonHidden(false);
    } else {
      setIsPlayButtonHidden(true);
    }
  });

  return (
    <Layout isHiddenByDefault={false} isToolbarHidden={isVideoActive}>
      <Hero primaryButtonOnClick={() => setIsVideoActive(true)} />

      <div sx={{ marginTop: '100vh', scrollMarginTop: '100vh' }} />
      <ReelSection
        isPlayButtonHidden={isPlayButtonHidden}
        isVideoActive={isVideoActive}
        setIsVideoActive={() => {
          if (!isVideoActive) {
            umami.track('reel-section-play');
          }
          setIsVideoActive(!isVideoActive);
        }}
      />
      <div sx={{ position: 'relative', zIndex: 1 }}>
        <WorkSection projects={projectsList} />
        <AboutSection
          title="About"
          subtitle="arcu, fringilla."
          imageAlt="My image"
          imageSrc="work/space-and-time.png"
          href="/about"
        />
        <ContactSection />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.workPage({
    relativePath: 'work-page.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
