import Home from '../components/Home'
import nextCookie from 'next-cookies'

class Index extends React.Component {
  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

Index.getInitialProps = async ctx => {
  // make a higher order component or render prop?, check for existence of a token, if a valid token, make a request for the user object and send this down as a prop
  // if there is no token, render the login component instead of whatever component was passed....
  // Have to think about how that query is cahched
  const { token } = nextCookie(ctx)
  console.log(token)
  return {}
}


export default Index