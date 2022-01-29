import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
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
        <meta name="keywords" content="motion, design, motion design, art" />
        <meta name="author" content="Imsety Taylor" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
