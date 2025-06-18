import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import PageContentFragment from "../fragments/page/pageContent/PageContentFragment";
import TourFragment from "../fragments/tours/TourFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";

export const GET_TOUR = gql`
  query GET_TOUR($id: ID!) {
    tour(id: $id, idType: SLUG) {
      ${TourFragment}
      ${PageSeoFragment}
      ${PageContentFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}
  }
`;
