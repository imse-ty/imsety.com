import { useRouter } from 'next/router';
import Error from 'next/error';
import Head from 'next/head';
import { urlFor, usePreviewSubscription } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PostHeader from '../../components/blog/post-header';

export default function Post({ data = {}, preview }) {
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
          <PostHeader
            mainImage={urlFor(post.mainImage).url()}
            title={post.title}
            date={post.publishedAt}
            readingTime={post.estimatedReadingTime}
          />
          <div className="whitespace-pre">{post.body}</div>
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

  return {
    props: {
      preview,
      data: { post }
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
