import { gql } from "@apollo/client";
import CategoryFragment from "../fragments/plans/CategoryFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";
import PageContentFragment from "../fragments/page/pageContent/PageContentFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import MenuFragment from "../fragments/menus/MenuFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";

export const GET_CATEGORY = gql`
  query GET_CATEGORY($id: ID!) {
    category(id: $id, idType: SLUG) {
      ${CategoryFragment}
      ${PageSeoFragment}
      ${PageContentFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}
    ${CategoriesFragment}
    }
`;
