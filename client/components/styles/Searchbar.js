import styled from 'styled-components'

const Searchbar = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  input {
    width: 250px;
    appearance: none;
    background-color: ${({ theme }) => theme.lightGrey};
    outline: none;
    border: 1px solid ${({ theme }) => theme.darkGrey};
    text-align: center;
    line-height: 1.5rem;
    padding: .5rem;
    &:focus {
      text-align: left;
      background-color: white;
    }
  }
  @media (min-width: 640px) {
    display: flex;
  }
`

export default Searchbar