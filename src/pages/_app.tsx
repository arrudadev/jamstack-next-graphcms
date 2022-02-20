import type { AppProps } from 'next/app';

import { Provider } from 'urql';

import { client, ssrCache } from '../lib/urql';

import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
