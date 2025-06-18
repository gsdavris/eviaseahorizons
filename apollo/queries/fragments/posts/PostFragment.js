const PostFragment = `
id
title
slug
content
author {
  node {
    id
    name
    avatar {
      url
    }
    description
  }
}
featuredImage {
    node {
        altText
        sourceUrl
    }
}
excerpt
date
categories {
  nodes {
    id
    name
    slug
    parent {
      node {
        id
        name
        uri
      }
    }
  }
}
`;

export default PostFragment;
