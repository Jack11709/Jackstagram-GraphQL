import Link from 'next/link'
import styled from 'styled-components'
import SearchBar from './styles/SearchBar'

const Navbar = styled.nav`
  width: ${({ theme }) => theme.maxWidth};
  display: flex;
  justify-content: space-between;
  p {
    font-family: 'Dancing Script', cursive;
    font-size: 2.5rem;
  }
`
const IconContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Nav = () => (
  <Navbar>
    <Link href="/"><p>📷 | Jackstagram</p></Link>
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

export default Nav