import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`
export const Section = styled.section`
  min-height: 100vh;
  padding-top: ${({ top }) => top ? '0' : '12rem'};
`