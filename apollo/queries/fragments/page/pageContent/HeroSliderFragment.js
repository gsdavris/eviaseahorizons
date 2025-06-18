const HeroSliderFragment = `
    heroSlider {
      sliders
      slide1 {
        contactButton
        contactLabel
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
        ctas
        description
        image {
          altText
          sourceUrl
        }
        opacity
        subtitle
        title
      }
      slide2 {
        contactButton
        contactLabel
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
            }
          urlType
        }
        ctas
        description
        image {
          altText
          sourceUrl
        }
        opacity
        subtitle
        title
      }
      slide3 {
        contactButton
        contactLabel
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
            }
          urlType
        }
        ctas
        description
        image {
          altText
          sourceUrl
        }
        opacity
        subtitle
        title
      }
      slide4 {
        contactButton
        contactLabel
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
            }
          urlType
        }
        ctas
        description
        image {
          altText
          sourceUrl
        }
        opacity
        subtitle
        title
      }
    }
`;

export default HeroSliderFragment;
