import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";
import PostFragment from "../fragments/posts/PostFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";

export const GET_POST = gql`
  query GET_POST($id: ID!) {
    post(id: $id, idType: SLUG) {
      ${PostFragment}
      ${PageSeoFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}
    ${CategoriesFragment}
  }
`;
