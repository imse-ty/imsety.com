import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getClient } from '../lib/sanity.server';
import { changelogQuery } from '../lib/queries';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Changelog({ data, source }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex-grow my-12 md:my-24 w-full">
        <article>
          <header className="mb-12 md:mb-24">
            <h1 className="mb-6 font-bold text-3xl md:text-6xl">Changelog</h1>
            <p className="mb-6 max-w-2xl font-medium">
              A growing log of new additions, changes, and bug fixes for this
              site. Some of this is a bit technical and vague. But hey, this is
              all I got! 😅
            </p>
            <p className="mb-6 max-w-2xl font-medium">
              Changelog idea inspired by{' '}
              <a
                href="https://jacky.wtf/"
                target="_blank"
                rel="noopener"
                className="underline hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
              >
                Jacky Alciné
              </a>{' '}
              who was then inspired by{' '}
              <a
                href="https://www.tatianamac.com/release-notes"
                target="_blank"
                rel="noopener"
                className="underline hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
              >
                Tatiana Mac
              </a>
              .
            </p>
            <p className="max-w-2xl font-medium">
              Check out the source code on{' '}
              <a
                href="https://github.com/imse-ty/imsety.com"
                target="_blank"
                rel="noopener"
                className="underline hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
              >
                GitHub
              </a>
              .
            </p>
          </header>
          <div className="prose prose-dark prose-lg dark:prose-light">
            <MDXRemote {...source} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const changelog = await getClient(preview).fetch(changelogQuery);
  const mdxSource = await serialize(changelog.body);

  return {
    props: {
      preview,
      data: { changelog },
      source: mdxSource
    }
  };
}
