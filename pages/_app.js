import { ThemeUIProvider } from 'theme-ui';
import { buildColorTheme, theme } from 'krado-react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
