import nextCookie from 'next-cookies'
import Login from '../components/auth/Login'
import { Query } from 'react-apollo'
import { SINGLE_USER_QUERY } from '../lib/query'
 
const secureRoute = (Component) => {
  class Wrapper extends React.Component {
    render() {
      if (!this.props.token) return <Login />
      return (
        <Query query={SINGLE_USER_QUERY}>
          {({ data, error }) => {
            if (error) return <Login />
            return <Component {...data}/>
          }}
        </Query>
      )
    }
  }

  Wrapper.getInitialProps = async (ctx) => {
    const { token } = nextCookie(ctx)
    return { token }
  }
  
  return Wrapper
}

export default secureRoute