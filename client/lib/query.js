import gql from 'graphql-tag'

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      content
      image
      owner {
        username
      }
      likes {
        id
      }
    }
  }
`

export default { ALL_POSTS_QUERY }