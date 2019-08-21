import Home from '../components/posts/Home'
import secureRoute from '../lib/secureRoute'

class Index extends React.Component {
  render() {
    return (
      <Home {...this.props}/>
    )
  }
}

export default secureRoute(Index)