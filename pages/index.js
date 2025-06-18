import Layout from "@/components/layouts/Layout";
import client from "@/apollo/client";
import { GET_PAGE } from "@/apollo/queries/pages/get-page";
import PageContent from "@/components/contentUI/PageContent";

export default function IndexPage ({ data }) {
  const { page } = data;

  return (
    <Layout data={ data }>
      <PageContent content={ page?.pageContent } />
    </Layout>
  );
}

export async function getStaticProps () {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      id: "/",
    },
  });


  return {
    props: { data: data || {} },
    revalidate: 10,
  };
}
