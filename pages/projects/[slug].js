import Head from 'next/head';
import Footer from '../../components/footer';
import Header from '../../components/header';

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
      <main className="flex-grow my-12 md:my-24">
        <article></article>
      </main>
      <Footer />
    </div>
  );
}
