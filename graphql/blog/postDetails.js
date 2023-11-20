// All Blog Posts

export default `
query PostDetails($slug: String) {
  post(filter: {slug: {eq: $slug}}) {
    slug
    title
    _updatedAt
    shortDescription
    image {
      alt
      url
    }
    description {
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
    _updatedAt
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
