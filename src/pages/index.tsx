import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Title } from '../components/Title';
import { usePageQuery, PageDocument } from '../generated/graphql';
import { client, ssrCache } from '../lib/urql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home',
    },
  });

  return (
    <>
      <Head>
        <title>{data?.page?.title}</title>
      </Head>

      <Title title={data?.page?.title} subtitle={data?.page?.subtitle} />

      <Features />

      <Pricing />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: 'home' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
