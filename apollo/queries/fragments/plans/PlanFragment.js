const PlanFragment = `
    id
    categories {
        nodes {
        id
        name
        uri
        parent {
            node {
            id
            name
            uri
            }
        }
        }
    }
    excerpt
    featuredImage {
        node {
        altText
        sourceUrl
        }
    }
    features(first: 100) {
        nodes {
        id
        name
        }
    }
    planDetails {
        charges
        relatedLinks
    }
    planTypes {
        nodes {
          planTypeDetails {
            planTypeColor
          }
          name
        }
    }
    title
`;

export default PlanFragment;
