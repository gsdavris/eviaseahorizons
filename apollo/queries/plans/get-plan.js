import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import PageContentFragment from "../fragments/page/pageContent/PageContentFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";
import PlanFragment from "../fragments/plans/PlanFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";

export const GET_PLAN = gql`
  query GET_PLAN($id: ID!) {
    plan(id: $id, idType: SLUG) {
      ${PlanFragment}
      ${PageSeoFragment}
      ${PageContentFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}
    ${CategoriesFragment}
  }
`;
