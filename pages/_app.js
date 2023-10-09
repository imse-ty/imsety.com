import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
