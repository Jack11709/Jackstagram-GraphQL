import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'
import redirect from 'next-redirect'

class RootApp extends App {
  static async getInitialProps({ ctx }) {
    const token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (!token) {
      console.log('there is no token redirect to login')
    }
    return { token }
  }

  render() {
    const { Component, pageProps, apollo, token } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(RootApp)
