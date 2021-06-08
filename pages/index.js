import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/work/hero';
import VideoReelLoop from '../components/work/video-reel-loop';
import ProjectsSection from '../components/work/projects-section';

export default function Home() {
  return (
    <div className="bg-imsetyWhite text-imsetyBlack dark:bg-imsetyBlack dark:text-imsetyWhite">
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
        <meta name="keywords" content="motion, design, motion design, art" />
        <meta name="author" content="Imsety Taylor" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="h-screen">
        <div className="flex flex-col w-screen h-5/6  lg:flex-row">
          <div className="container relative flex items-center h-1/2 lg:w-1/2 lg:h-full">
            <Hero />
          </div>
          <div className="relative h-1/2 lg:w-1/2 lg:h-full overflow-hidden">
            <VideoReelLoop />
          </div>
        </div>
      </div>
      <main className="mb-12">
        <h2 className="container mb-12 text-3xl md:text-5xl font-bold">
          Projects
        </h2>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
