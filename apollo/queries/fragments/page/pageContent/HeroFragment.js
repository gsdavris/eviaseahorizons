const HeroFragment = `
heroSection {
    banners {
      ... on MediaItem {
        id
        altText
        sourceUrl
        filePath
        bannerOptions {
          title
          subtitle
          description
          mode
          minHeight
          opacity
          contactButton
          contactLabel
          ctas
          cta {
            label
            type
            url
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
            urlType
          }
          cta1 {
            label
            type
            url
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
            urlType
          }
          cta2 {
            label
            type
            url
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
            urlType
          }
        }
      }
    }
  }
`;

export default HeroFragment;
