import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/Header';
import Hero from '../components/hero';
import VideoReelLoop from '../components/video-reel-loop';

export default function Home() {
  return (
    <div className="text-imsetyBlack">
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="flex flex-col w-screen h-screen lg:flex-row">
          <div className=" relative bg-imsetyBlack text-imsetyWhite p-8 md:p-20 flex flex-col justify-between h-1/2 lg:w-1/2 lg:h-full">
            <Header />
            <Hero />
            <Footer />
          </div>
          <div className="relative h-1/2 lg:w-1/2 lg:h-full overflow-hidden">
            <VideoReelLoop />
          </div>
        </div>
      </main>
    </div>
  );
}
