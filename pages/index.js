import Head from 'next/head';
import { getClient } from '../lib/sanity.server';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/work/hero';
import VideoReelLoop from '../components/work/video-reel-loop';
import ProjectsSection from '../components/work/projects-section';
import { indexProjectQuery } from '../lib/queries';

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

      <section className="flex flex-col min-w-full md:flex-row mb-24 h-80v">
        <div className="relative overflow-hidden h-full md:w-2/4">
          <VideoReelLoop />
        </div>
        <div className="container flex items-center mx-0 py-8 md:w-3/4">
          <Hero />
        </div>
      </section>

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
