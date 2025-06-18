const MarqueeFragment = `
    marquee {
        text
        mode
        contactButton
        contactLabel
        cta {
            label
            type
            url
            urlType
            path {
            ... on Post {
                id
                title
                uri
            }
            ... on Page {
                id
                title
                uri
            }
            ... on MediaItem {
                id
                title
                uri
            }
            ... on Boat {
                id
                title
                uri
            }
            ... on Tour {
                id
                title
                uri
            }
            }
        }
    }
`;

export default MarqueeFragment;
