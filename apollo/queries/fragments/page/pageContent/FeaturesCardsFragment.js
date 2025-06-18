const FeaturesCardsFragment = `
  featuresCards {
      title
      description
      mode
      items {
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
        features(first: 100) {
          nodes {
            id
            name
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
        excerpt(format: RENDERED)
        details {
          iconColor
          iconName
        }
        features(first: 100) {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

export default FeaturesCardsFragment;
