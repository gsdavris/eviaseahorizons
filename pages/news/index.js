import { useState, useEffect } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import BlogLayout from "@/components/layouts/BlogLayout";
import PostCard from "@/components/contentUI/PostCard";
import Layout from "@/components/layouts/Layout";
import PageContent from "@/components/contentUI/PageContent";
import Loading from "@/components/contentUI/Loading";
import Alert from "@/components/forms/Alert";

import client from "@/apollo/client";
import { GET_BLOG_PAGE } from "@/apollo/queries/pages/get-blog-page";

export default function BlogPage ({ data }) {
  const { page, posts, categories } = data;
  const [values, setValues] = useState({
    blogPosts: posts?.nodes,
    postsPageInfo: posts?.pageInfo,
    currentCategory: "",
    currentOrder: "DESC",
    error: "",
    loading: false,
    responseData: "",
  });

  const handleCurrentCategoryStateChange = (childState) => {
    // Update the parent state with the value from the child
    setValues({
      ...values,
      currentCategory: childState,
    });
  };

  const handleCurrentOrderStateChange = (childState) => {
    // Update the parent state with the value from the child
    setValues({
      ...values,
      currentOrder: childState,
    });
  };

  const {
    blogPosts,
    postsPageInfo,
    loading,
    error,
    responseData,
    currentCategory,
    currentOrder,
  } = values || {};

  const fetchPosts = async () => {
    setValues({
      ...values,
      error: false,
      loading: true,
      responseData: "",
    });
    const { data } = await axios.post("/api/posts", {
      first: 9,
      categoryName: currentCategory,
      order: currentOrder,
    });

    if (!data) {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: "Υπάρχει πρόβλημα! Δοκίμασε αργότερα.",
        },
      });
    }

    if (data.nodes) {
      setValues({
        ...values,
        blogPosts: data.nodes,
        postsPageInfo: data.pageInfo,
        error: false,
        loading: false,
        responseData: "",
      });
    } else {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: data.message,
        },
      });
    }
  };

  const nextClickHandler = async (e) => {
    setValues({
      ...values,
      error: false,
      loading: true,
      responseData: "",
    });
    const { data } = await axios.post("/api/posts", {
      first: 9,
      after: postsPageInfo?.endCursor,
      categoryName: currentCategory,
      order: currentOrder,
    });

    if (!data) {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: "Υπάρχει πρόβλημα! Δοκίμασε αργότερα.",
        },
      });
    }

    if (data.nodes) {
      setValues({
        ...values,
        blogPosts: data.nodes,
        postsPageInfo: data.pageInfo,
        error: false,
        loading: false,
        responseData: "",
      });
    } else {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: data.message,
        },
      });
    }
  };

  const prevClickHandler = async (e) => {
    setValues({
      ...values,
      error: false,
      loading: true,
      responseData: "",
    });
    const { data } = await axios.post("/api/posts", {
      last: 9,
      before: postsPageInfo?.startCursor,
      categoryName: currentCategory,
      order: currentOrder,
    });

    if (!data) {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: "Υπάρχει πρόβλημα! Δοκίμασε αργότερα.",
        },
      });
    }

    if (data.nodes) {
      setValues({
        ...values,
        blogPosts: data.nodes,
        postsPageInfo: data.pageInfo,
        error: false,
        loading: false,
        responseData: "",
      });
    } else {
      return setValues({
        ...values,
        error: true,
        loading: false,
        responseData: {
          type: "danger",
          message: data.message,
        },
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentCategory, currentOrder]);

  return (
    <Layout data={ data }>
      <PageContent content={ page?.pageContent } />
      <BlogLayout
        categories={ categories }
        onCurrentCategoryStateChange={ handleCurrentCategoryStateChange }
        onCurrentOrderStateChange={ handleCurrentOrderStateChange }
        loading={ loading }
      >
        <Alert responseData={ responseData } />
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 md:grid-cols-2 xl:grid-cols-3">
          { blogPosts?.map((post) => (
            <PostCard key={ post.id } post={ post } loading={ loading } />
          )) }
        </div>
        <div className="flex flex-1 justify-between border-t border-gray-200 py-4 mt-16">
          <button
            disabled={ !postsPageInfo?.hasPreviousPage }
            onClick={ prevClickHandler }
            className="relative inline-flex items-center rounded-l-md px-2 py-2 disabled:text-gray-400 text-primary ring-1 ring-inset disabled:ring-gray-300 ring-primary hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            { loading ? (
              <Loading />
            ) : (
              <>
                <HiChevronLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                Προηγούμενα
              </>
            ) }
          </button>
          <button
            disabled={ !postsPageInfo?.hasNextPage || loading }
            onClick={ nextClickHandler }
            className="relative inline-flex items-center rounded-r-md px-2 py-2 disabled:text-gray-400 text-primary ring-1 ring-inset disabled:ring-gray-300 ring-primary hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            { loading ? (
              <Loading />
            ) : (
              <>
                Επόμενα
                <HiChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </>
            ) }
          </button>
        </div>
      </BlogLayout>
    </Layout>
  );
}

export async function getStaticProps () {
  const { data, errors } = await client.query({
    query: GET_BLOG_PAGE,
    variables: {
      id: "/news",
      first: 9,
    },
  });
  return {
    props: { data: data || {} },
    revalidate: 10,
  };
}
