const CategoryFragment = `
  id
  parent {
    node {
      id
      name
      uri
    }
  }
  name
  uri 
  description
`;

export default CategoryFragment;


//  plans {
//     nodes {
//       id
//       title
//       uri
//       featuredImage {
//         node {
//           altText
//           sourceUrl
//         }
//       }
//     }
//   }


//  categoryDetails {
//     iconColor
//     iconName
//     featuredImage {
//       altText
//       sourceUrl
//     }
//   }