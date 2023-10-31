import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';
import '../styles/globals.css';
import { setyTheme } from '@/lib/site-theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
