import { GetServerSideProps } from 'next';

import { Title } from '../components/Title';
import { usePageQuery, PageDocument } from '../generated/graphql';
import { client, ssrCache } from '../lib/urql';

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: 'home',
    },
  });

  return <Title title={data?.page?.title} subtitle={data?.page?.subtitle} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(PageDocument, { slug: 'home' }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
