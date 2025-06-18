const SliderListFragment = `
sliderList {
        title
        mode
        items {
          ... on Post {
            id
            title
            uri
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on Boat {
            id
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on Tour {
            id
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on Page {
            id
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
`;

export default SliderListFragment;
