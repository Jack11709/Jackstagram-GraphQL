import React from 'react'
import { ThemeProvider } from 'styled-components'
import { withRouter } from 'next/router'
import GlobalStyles from '../styles/GlobalStyles'
import { Main, Section } from '../styles/LayoutStyles'
import Meta from './Meta'
import Header from './Header'

const theme = {
  black: '#393939',
  lightGrey: '#FAFAFA',
  darkGrey: '#DBDBDB',
  maxWidth: '1000px'
}

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Main>
      <GlobalStyles />
      <Meta />
      <Header />
      <Section top={props.router.pathname === '/login'}>
        {props.children}
      </Section>
    </Main>
  </ThemeProvider>   
)

export default withRouter(Layout)
