import styled from 'styled-components'
import Nav from './Nav'
import _ from 'underscore'

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  height: 7.5rem;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.darkGrey};
`

class Header extends React.Component {
  state = { collapsed: false }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 500))
  }

  handleScroll = (e) => {
    console.log(e)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', _.throttle)
  }
  render() {
    return (
      <HeaderStyles>
        <Nav />
      </HeaderStyles>
    )
  }
}

export default Header