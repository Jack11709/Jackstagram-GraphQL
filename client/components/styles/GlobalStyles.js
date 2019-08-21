import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'segoe-ui';
    src: url('/static/Segoe-UI.woff')format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'segoe-ui';
    src: url('/static/Segoe-UI-Bold.woff')format('woff2');
    font-weight: bold;
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
    color: ${({ theme }) => theme.black}
  }
`

export default GlobalStyles