import { gql } from "@apollo/client";
import PostFragment from "../fragments/posts/PostFragment";

export const GET_PAGINATED_POSTS = gql`
  query GET_PAGINATED_POSTS(
    $first: Int,
    $last: Int,
    $after: String,
    $before: String,
    $categoryName: String,
    $order: OrderEnum!
  ) {
    posts: posts(
      where: {
        orderby: {field: DATE, order: $order}, 
        categoryName: $categoryName
        }, 
      first: $first, 
      last: $last, 
      after: $after, 
      before: $before) {
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
