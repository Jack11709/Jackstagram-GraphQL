import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'
import Header from './Header'

const theme = {
  black: '#393939',
  lightGrey: '#FAFAFA',
  darkGrey: '#DBDBDB',
  maxWidth: '1000px'
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'segoe-ui';
    src: url('/static/Segoe-UI.woff')format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
     box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'segoe-ui'
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`
const Main = styled.main`
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`
const Section = styled.section`
  width: ${({ theme }) => theme.maxWidth};
  min-height: 100vh;
  padding-top: 6rem;
`

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Main>
          <GlobalStyle />
          <Meta />
          <Header />
          <Section>
           {this.props.children}
          </Section>
        </Main>
      </ThemeProvider>   
    )
  }
}

export default Layout
