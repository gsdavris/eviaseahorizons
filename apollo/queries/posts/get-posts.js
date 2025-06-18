import { gql } from "@apollo/client";

export const GET_POSTS_SLUG = gql`
  query GET_POSTS_SLUG {
    posts: posts(first: 100) {
      nodes {
        id
        slug
      }
    }
  }
`;
