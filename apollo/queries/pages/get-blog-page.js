import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import PageContentFragment from "../fragments/page/pageContent/PageContentFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";
import PostFragment from "../fragments/posts/PostFragment";

export const GET_BLOG_PAGE = gql`
  query GET_BLOG_PAGE(
    $id: ID!, 
    $first: Int
    ) {
      page(id: $id, idType: URI) {
      ${PageSeoFragment}
      ${PageContentFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}   
    posts: posts(first: $first) {
      nodes {
        ${PostFragment}
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;



    // ${CategoriesFragment}