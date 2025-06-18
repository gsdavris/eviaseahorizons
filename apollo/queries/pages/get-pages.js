import { gql } from "@apollo/client";

export const GET_PAGES_SLUG = gql`
  query GET_PAGES_SLUG {
    pages: pages(first: 100) {
      nodes {
        id
        slug
      }
    }
  }
`;
