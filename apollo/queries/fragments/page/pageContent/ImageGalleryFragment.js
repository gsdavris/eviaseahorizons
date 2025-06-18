const ImageGalleryFragment = `
imageGallery {
        title
        mode
        items {
           ... on MediaItem {
            id
            title
            uri
            altText
            sourceUrl
          }
        }
      }
`;

export default ImageGalleryFragment;
