import { useRouter } from 'next/router';
import Error from 'next/error';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { urlFor, usePreviewSubscription } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PostHeader from '../../components/blog/post-header';
import PreviewAlert from '../../components/preview-alert';

export default function Post({ data, source, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;

  if (!router.isFallback && !slug) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data.post,
    enabled: preview && slug
  });
  const { title, publishedAt, mainImage, estimatedReadingTime } = post;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {preview && <PreviewAlert />}
      <main className="flex-grow mb-12 md:mb-24">
        <article>
          <PostHeader
            mainImageAlt={mainImage?.alt}
            mainImage={urlFor(mainImage).width(640).height(480).url()}
            title={title}
            date={publishedAt}
            readingTime={estimatedReadingTime}
          />
          <div className="container">
            <div className="mx-auto prose prose-dark prose-lg dark:prose-light">
              <MDXRemote {...source} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
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
