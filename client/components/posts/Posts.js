import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Post from './Post'

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

const Posts = () => (
  <Query query={ALL_POSTS_QUERY}>
    {({ data, error, loading }) => {
      if (error) return <p>Error</p>
      if (loading) return <p>..Loading</p>
      return (
        <React.Fragment>
          {data.posts.map(post => <Post key={post.id} {...post} />)}
        </React.Fragment>
      )
    }}
  </Query>
)

export default Posts