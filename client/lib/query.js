import gql from 'graphql-tag'

export const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY {
    user {
      id
      username
      email
    }
  }
`

export const ALL_POSTS_QUERY = gql`
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

// export default { ALL_POSTS_QUERY }