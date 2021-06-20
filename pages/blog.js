import Head from 'next/head';
import BlogPost from '../components/blog/blog-post';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <BlogPost />
    </div>
  );
}
