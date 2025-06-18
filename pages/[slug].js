import client from "@/apollo/client";
import PageContent from "@/components/contentUI/PageContent";
import Layout from "@/components/layouts/Layout";
import { GET_PAGE } from "@/apollo/queries/pages/get-page";
import { GET_PAGES_SLUG } from "@/apollo/queries/pages/get-pages";

export default function DynamicPage ({ data }) {
  const { page } = data;


  return (
    <Layout data={ data }>
      <PageContent content={ page?.pageContent } />
    </Layout>
  );
}

export async function getStaticProps ({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      id: params?.slug,
    },
  });

  return {
    props: { data: data || {} },
    revalidate: 10,
  };
}

export async function getStaticPaths () {
  const { data } = await client.query({
    query: GET_PAGES_SLUG,
  });



  return {
    paths:
      data?.pages?.nodes
        .map((page) => `/${page.slug}`)
        .filter((i) => i !== "/news" && i !== "/") || [],
    fallback: false,
  };
}
