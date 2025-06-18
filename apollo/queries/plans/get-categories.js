import { gql } from "@apollo/client";

export const GET_CATEGORIES_SLUG = gql`
  query GET_CATEGORIES_SLUG {
    categories: categories(first: 100) {
      nodes {
        id
        slug
        parent {
          node {
            id
            slug
          }
        }
        children {
          nodes {
            id
            slug
          }
        }
      }
    }
  }
`;
