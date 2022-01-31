import { useRouter } from 'next/router';
import Error from 'next/error';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { usePreviewSubscription } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { projectQuery, projectSlugsQuery } from '../../lib/queries';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProjectHeader from '../../components/projects/project-header';
import PreviewAlert from '../../components/preview-alert';
import {
  ProjectImage,
  ProjectYoutube,
  ProjectVimeo
} from '../../components/projects/project-embed';
import getVideoId from 'get-video-id';

function ProjectEmbed({ alt, url }) {
  const getServiceName = () => {
    if (url) {
      return getVideoId(url).service;
    }
  };
  const serviceName = getServiceName();

  if (serviceName === 'youtube') {
    return <ProjectYoutube url={url} />;
  }

  if (serviceName === 'vimeo') {
    return <ProjectVimeo url={url} />;
  }

  return <ProjectImage alt={alt} src={url} />;
}

export default function Project({ data, source, preview }) {
  const router = useRouter();
  const slug = data?.post?.slug;
  const components = {
    ProjectImage,
    ProjectYoutube,
    ProjectVimeo
  };

  if (!router.isFallback && !slug) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { data: post } = usePreviewSubscription(projectQuery, {
    params: { slug },
    initialData: data.post,
    enabled: preview && slug
  });
  const { title, summary, year, timeline, tools, heroAlt, heroUrl } = post;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {preview && <PreviewAlert />}
      <main className="container flex-grow my-12 md:my-24 w-full">
        <article>
          <ProjectHeader
            title={title}
            summary={summary}
            year={year}
            timeline={timeline}
            tools={tools}
          />
          <div className="mb-12 md:mb-24 shadow-2xl">
            <ProjectEmbed alt={heroAlt} url={heroUrl} />
          </div>
          <div className="mx-auto prose prose-dark prose-lg dark:prose-light">
            <MDXRemote {...source} components={components} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(projectQuery, {
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
  const paths = await getClient().fetch(projectSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
