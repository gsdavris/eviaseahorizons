const PageSeoFragment = `
seo {
    title
    metaDesc
    canonical
    opengraphUrl
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      mediaDetails {
        height
        width
      }
      altText
      mediaType
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
  }
`;

export default PageSeoFragment;
