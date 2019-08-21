import { Query } from 'react-apollo'
import { ALL_POSTS_QUERY } from '../../lib/query'
import Post from './Post'

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