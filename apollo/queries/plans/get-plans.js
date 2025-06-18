import { gql } from "@apollo/client";

export const GET_PLANS_SLUG = gql`
  query GET_PLANS_SLUG {
    plans: plans(first: 100) {
      nodes {
        id
        slug
      }
    }
  }
`;
