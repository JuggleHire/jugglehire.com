// All Blog Posts

export default `
query PostDetails($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    slug
    title
    updatedAt
    shortDescription
    image {
      alt
      url
    }
    description {
      blocks
      links {
        ... on TagRecord {
          id
          slug
        }
        ... on ProductRecord {
          id
          slug
        }
        ... on PostRecord {
          id
          slug
        }
      }
      value
    }
    tags {
      slug
      name
    }
  }

  allPosts(orderBy: _updatedAt_DESC, first: "3") {
    title
    slug
    shortDescription
    updatedAt
    image {
      url
    }
    tags {
      slug
      name
    }
  }
}

`;
