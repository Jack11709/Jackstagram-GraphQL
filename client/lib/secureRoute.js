import Router from 'next/router'
import nextCookie from 'next-cookies'
import { Query } from 'react-apollo'
import { SINGLE_USER_QUERY } from '../lib/query'
 
const secureRoute = (Component) => {

  class Wrapper extends React.Component {
    render() {
      return (
        <Query query={SINGLE_USER_QUERY}>
          {({ data, error }) => {
            if (error) {
              // ! really need to find a better way to do this, ideally I make this query in get intial props
              Router.push('/login')
              return null
            }
            return <Component {...data}/>
          }}
        </Query>
      )
    }
  }

  Wrapper.getInitialProps = async (ctx) => {
    const { token } = nextCookie(ctx)
    // ? maybe something with the apollo cache? or make a query without the query component
    if (!token && ctx.res) {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
      return
    } 

    if (!token) {
      Router.push('/login')
    }
    return { token }
  }
  
  return Wrapper
}

export default secureRoute