import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';
import '../styles/globals.css';
import { setyTheme } from '@/lib/site-theme';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      <DefaultSeo
        title="Imsety"
        description="Hey, my name is Imsety I am a motion designer and developer in Atlanta. I love blending design and technology to tell good stories."
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'motion, design, motion design, art, HTML, CSS, JavaScript, programming, developer, code, freelance, entrepreneur, media, animation, artist, creator, designer, website'
          },
          {
            name: 'author',
            content: 'Imsety Taylor'
          }
        ]}
      />
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
