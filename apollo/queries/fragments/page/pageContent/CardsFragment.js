const CardsFragment = `
cards {
        imageHeight
        mode
        cardItems {
          ... on Post {
            id
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            excerpt(format: RENDERED)
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
            excerpt(format: RENDERED)
            details {
              iconColor
              iconName
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
            excerpt(format: RENDERED)
            details {
              iconColor
              iconName
            }
          }
        }
      }
`;

export default CardsFragment;
