const CategoriesFragment = `
categories(first: 100) {
    nodes {
      id
      name
      slug
      posts {
        nodes {
          id
        }
      }
    }
  }
`;

export default CategoriesFragment;


// categoryDetails {
//             featured {
//               ... on Plan {
//                 id
//                 featuredImage {
//                   node {
//                     altText
//                     sourceUrl
//                   }
//                 }
//                 title
//                 uri
//               }
//             }
//           }