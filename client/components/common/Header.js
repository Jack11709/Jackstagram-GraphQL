import styled from 'styled-components'
import Nav from './Nav'

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

const Header = () => (
  <HeaderStyles>
    <Nav />
  </HeaderStyles>
)

export default Header