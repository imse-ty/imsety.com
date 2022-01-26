import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProjectHeader from '../../components/projects/project-header';

export default function Project() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <Header />
      <main className="container flex-grow my-12 md:my-24">
        <article>
          <ProjectHeader
            title="400 Instagram Followers Piece"
            summary='I gained 200, 300, and 400 followers in quick succession in only a couple of days. Because of that, I wanted to create an animation where the numbers "one-up" each other. As a way to illustrate what actually happened to my Instagram page.'
            year="2020"
            timeline="2 weeks"
            tools="Cinema 4D, Redshift, After Effects"
          />
          <div className="mb-12 md:mb-24 shadow-2xl">
            <Image
              alt="Main image alt"
              src="/200-and-300-instagram-followers-preview.jpg"
              width={1300}
              height={754}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
