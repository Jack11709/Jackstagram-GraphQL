import App, { Container } from 'next/app'
import Layout from '../components/common/Layout'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'

class RootApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(RootApp)
