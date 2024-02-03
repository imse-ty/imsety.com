import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';
import '../styles/globals.css';
import { setyTheme } from '@/lib/site-theme';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <script
          async
          src='https://us.umami.is/script.js'
          data-website-id='9e005c6c-26e9-4730-96ab-5f3cdf366ecf'
        ></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ThemeUIProvider>
  );
}
