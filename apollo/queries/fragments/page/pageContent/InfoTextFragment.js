const InfoTextFragment = `
 infotext {
        description
        title
        subtitle
        mode
        contactButton
        contactLabel
        ctas
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
        cta1 {
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
        cta2 {
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

export default InfoTextFragment;
