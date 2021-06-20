import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PostHeader from '../../components/blog/post-header';

export default function Post() {
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
      <main>
        <article>
          <PostHeader />
        </article>
      </main>
      <Footer />
    </div>
  );
}
