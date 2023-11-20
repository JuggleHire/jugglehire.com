// All Blog Posts
// import gql from 'graphql-tag';
// import gql from 'graphql-tag';

// export const global = gql`
export default `
query BlogPost {
  allPosts(orderBy: _createdAt_DESC) {
    id
    title
    slug
    _updatedAt
    shortDescription
    image {
      alt
      url
    }
    tags {
      slug
      name
    }
  }
}
`;
