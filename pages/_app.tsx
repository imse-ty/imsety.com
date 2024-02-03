import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';
import '../styles/globals.css';
import { setyTheme } from '@/lib/site-theme';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
        process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy='lazyOnload'
          />
        )}
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
