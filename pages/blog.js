import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import BlogPost from '../components/blog/blog-post';

export default function Blog() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </main>
      <Footer />
    </div>
  );
}
