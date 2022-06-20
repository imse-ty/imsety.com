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
      <Header />
      <section className="flex flex-col min-w-full md:flex-row mb-24">
        <div className="relative overflow-hidden h-50v md:h-80v md:w-2/5 ">
          <VideoReelLoop />
        </div>
        <div className="container flex items-center mx-0 py-8">
          <Hero />
        </div>
      </section>
      <main className="mb-24">
        <h2
          id="projects"
          className="container mb-12 text-3xl md:text-5xl font-bold"
        >
          Projects
        </h2>
        <ProjectsSection projects={allProjects.projects} />
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
