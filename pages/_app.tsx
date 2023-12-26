import Head from 'next/head';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from 'krado-react';
import '../styles/globals.css';
import { setyTheme } from '@/lib/site-theme';
import { lazy } from 'react';
import type { AppProps } from 'next/app';

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = lazy(() => import('@/components/preview-provider'));

export default function MyApp({
  Component,
  pageProps
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    <ThemeUIProvider theme={{ ...theme, ...setyTheme }}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeUIProvider>
  );
}
