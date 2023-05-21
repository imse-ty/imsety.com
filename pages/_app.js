import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import * as gtag from '../lib/gtag';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    function handleRouteChange(url) {
      gtag.pageview(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="text-lg bg-imsetyWhite text-imsetyBlack dark:bg-imsetyBlack dark:text-imsetyWhite">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="Imsety Taylor"
        description="My name is Imsety Taylor — a designer and developer based in Atlanta, GA. I leverage skills such as motion design and coding to create engaging experiences ranging from animations to digital projects."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'motion, design, motion design, art, HTML, CSS, JavaScript, programming, developer, code, freelance, entrepreneur, media, animation, artist, creator, designer'
          },
          {
            name: 'author',
            content: 'Imsety Taylor'
          }
        ]}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
