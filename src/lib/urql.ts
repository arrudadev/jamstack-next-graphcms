import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql';

const isServerSide = typeof window === 'undefined';

const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API_URL,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
