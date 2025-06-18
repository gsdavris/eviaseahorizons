import { gql } from "@apollo/client";

export const GET_BOATS_SLUG = gql`
  query GET_BOATS_SLUG {
    boats: boats(first: 100) {
      nodes {
        id
        slug
      }
    }
  }
`;