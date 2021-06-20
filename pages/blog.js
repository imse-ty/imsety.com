import Head from 'next/head';
import { getClient } from '../lib/sanity.server';
import { indexPostQuery } from '../lib/queries';
import Header from '../components/header';
import Footer from '../components/footer';
import BlogPostSection from '../components/blog/blog-post-section';

export default function Blog({ allPosts }) {
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
        <h1 className="mb-12 text-3xl md:text-5xl font-bold">Blog</h1>
        <BlogPostSection posts={allPosts} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getClient().fetch(indexPostQuery);

  return {
    props: { allPosts }
  };
}
