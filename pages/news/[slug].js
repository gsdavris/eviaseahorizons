import client from "@/apollo/client";
import { GET_POST } from "@/apollo/queries/posts/get-post";
import { GET_POSTS_SLUG } from "@/apollo/queries/posts/get-posts";
import Banner from "@/components/contentUI/Banner";
import Layout from "@/components/layouts/Layout";
import PostContentSection from "@/components/sections/PostContentSection";

export default function PostPage ({ data }) {
  const { post } = data;

  return (
    <Layout data={ data }>
      <section>
        <Banner
          imageUrl={ post?.featuredImage?.node?.sourceUrl }
          minHeight="min-h-[200px]"
          alt={ post?.featuredImage?.node?.altText }
          overlayOpacity="50"
        ></Banner>
      </section>
      <PostContentSection
        subtitle={ post?.categories?.nodes[0]?.name }
        title={ post?.title }
        image={ post?.featuredImage?.node }
        content={ post?.content }
        date={ post?.date }
      />
    </Layout>
  );
}

export async function getStaticProps ({ params }) {
  const { data, errors } = await client.query({
    query: GET_POST,
    variables: {
      id: params?.slug,
    },
  });

  return {
    props: { data: data },
    revalidate: 10,
  };
}

export async function getStaticPaths () {
  const { data } = await client.query({
    query: GET_POSTS_SLUG,
  });

  return {
    paths: data.posts.nodes.map((post) => `/news/${post.slug}`) || [],
    fallback: false,
  };
}
