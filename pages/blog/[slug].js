import { useRouter } from 'next/router';
import Error from 'next/error';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { urlFor, usePreviewSubscription } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PostHeader from '../../components/blog/post-header';

export default function Post({ data = {}, source, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;
  const {
    data: { post }
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug
  });

  if (!router.isFallback && !slug) {
    return <Error statusCode={404} />;
  }

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
        <article>
          <PostHeader
            mainImage={urlFor(post.mainImage).url()}
            title={post.title}
            date={post.publishedAt}
            readingTime={post.estimatedReadingTime}
          />
          <div className="mx-auto prose prose-lg">
            <MDXRemote {...source} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient().fetch(postQuery, {
    slug: params.slug
  });
  const mdxSource = await serialize(post.body);

  return {
    props: {
      preview,
      data: { post },
      source: mdxSource
    }
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(postSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
