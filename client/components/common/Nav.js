import Link from 'next/link'
import styled from 'styled-components'
import SearchBar from '../styles/SearchBar'
import _ from 'underscore'

const Navbar = styled.nav`
  width: ${({ theme }) => theme.maxWidth};
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2.5rem;
    span {
      font-family: 'Dancing Script', cursive;
    }
  }
`
const IconContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

// eslint-disable-next-line no-undef
class Nav extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll, 500))
  }

  handleScroll = e => console.log(e)

  render() {
    return (
      <Navbar>
        <Link href="/"><p>📷 | <span>Jackstagram</span></p></Link>
        <SearchBar>
          <input placeholder="🔎 Search"/>
        </SearchBar>
        <IconContainer>
          <Link href="/new"><p>➕</p></Link>
          <Link href="/explore"><p>❤</p></Link>
          <Link href="/profile"><p>👱</p></Link>
        </IconContainer>
      </Navbar>
    )
  }
}

export default Nav