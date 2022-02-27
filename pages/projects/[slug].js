import { useRouter } from 'next/router';
import Error from 'next/error';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import getVideoId from 'get-video-id';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
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
import PhotoGrid from '../../components/projects/photo-grid';

function ExternalLink({ children, href }) {
  return (
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

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
    a: ExternalLink,
    ProjectEmbed,
    PhotoGrid
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

  const simpleReactLightBoxOptions = {
    settings: {
      hideControlsAfter: 1000
    },
    thumbnails: {
      showThumbnails: false
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false
    }
  };

  return (
    <SimpleReactLightbox>
      <div className="flex flex-col min-h-screen">
        <NextSeo title={`${title} - Imsety Taylor`} description={summary} />
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
            <PhotoGrid
              rows={[
                {
                  images: [
                    {
                      alt: '"Space" SetyMedia logo Act 1 styleframe 1',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/a27dbd7ad9c52ccbcd921dcfb290c5a822e0ce75-1920x1080.png'
                    },
                    {
                      alt: '"Space" SetyMedia logo Act 1 styleframe 2',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/45fdd42c83c8297058aa98596aa848d353591d0c-1920x1080.png'
                    }
                  ]
                },
                {
                  images: [
                    {
                      alt: '"Plastic" SetyMedia logo Act 1 styleframe',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/8428e02644dc8734502f6a5f028c1fc45de2ed81-1920x1080.png'
                    },
                    {
                      alt: '"Plastic" SetyMedia logo test render',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/d5eab286ff862d3f7637924921476a171c39336c-1920x1080.png'
                    }
                  ]
                },
                {
                  images: [
                    {
                      alt: '"Pillars" styleframe 1',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/0c7d180b0fcc8e92c265c13ef558ff0dbbf07e99-1920x1080.png'
                    },
                    {
                      alt: '"Pillars" styleframe 2',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/66b6733bd052cf0c11069e75f94f672e9034c8b7-1920x1080.png'
                    },
                    {
                      alt: 'Glowing door way',
                      src: 'https://cdn.sanity.io/images/b01vqf7r/production/c9eaf9bcae3ba836e3e58dcd892978bec0819e5b-1920x1080.png'
                    }
                  ]
                }
              ]}
            />
            <div className="mx-auto prose prose-dark prose-lg md:prose-2xl dark:prose-light">
              <SRLWrapper options={simpleReactLightBoxOptions}>
                <MDXRemote {...source} components={components} />
              </SRLWrapper>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </SimpleReactLightbox>
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
