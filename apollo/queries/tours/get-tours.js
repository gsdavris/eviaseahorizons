import { gql } from "@apollo/client";

export const GET_TOURS_SLUG = gql`
  query GET_TOURS_SLUG {
    tours: tours(first: 100) {
      nodes {
        id
        slug
      }
    }
  }
`;