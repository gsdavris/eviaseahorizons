const Images2WTextFragment = `
imagesWText {
    title
    subtitle
    description
    mode
    contactButton
    contactLabel
    ctas
    image {
      altText
      sourceUrl
    }
    image1 {
      altText
      sourceUrl
    }
    cta {
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

export default Images2WTextFragment;
