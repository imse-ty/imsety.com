import Head from 'next/head';
import { getClient } from '../lib/sanity.server';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/work/hero';
import VideoReelLoop from '../components/work/video-reel-loop';
import ProjectsSection from '../components/work/projects-section';
import { indexProjectQuery } from '../lib/queries';
import RightTrianglePattern from '../public/right-triangle-pattern.svg';

export default function Home({ allProjects }) {
  return (
    <div>
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <Header />
      <div className="h-70v mb-24">
        <div className="flex flex-col w-full h-full lg:flex-row">
          <div className="container relative flex items-center h-1/2 lg:w-1/2 lg:h-full">
            <Hero />
            <RightTrianglePattern
              width="740"
              viewBox="0 0 1008 1080"
              className="hidden lg:block absolute overflow-hidden -right-96 h-full fill-current text-imsetyBlack dark:text-imsetyWhite opacity-5"
            />
          </div>

          <div className="relative h-1/2 lg:w-1/2 lg:h-full overflow-hidden">
            <VideoReelLoop />
          </div>
        </div>
      </div>

      <main className="mb-24">
        <h2 className="container mb-12 text-3xl md:text-5xl font-bold">
          Projects
        </h2>
        <ProjectsSection projects={allProjects} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allProjects = await getClient().fetch(indexProjectQuery);

  return {
    props: { allProjects }
  };
}
