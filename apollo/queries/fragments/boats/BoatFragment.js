const BoatFragment = `
    id
    excerpt
    content
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
    details {
        gallery {
            ... on MediaItem {
                id
                title
                uri
                altText
                sourceUrl
            }
        }
        iconColor
        iconName
    }
    title
`;

export default BoatFragment;
