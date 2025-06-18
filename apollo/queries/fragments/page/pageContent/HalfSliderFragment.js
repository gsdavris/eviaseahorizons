const HalfSliderFragment = `
halfSlider {
        title
        description
        subtitle
        mode
        ctas
        contactButton
        contactLabel
        minheight
        image {
          altText
          sourceUrl
          filePath
        }
        image1 {
          altText
          sourceUrl
          filePath
        }
        image2 {
          altText
          sourceUrl
          filePath
        }
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
          fieldGroupName
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
          fieldGroupName
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

export default HalfSliderFragment;
