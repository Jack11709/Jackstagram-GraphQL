import styled from './node_modules/styled-components'
import Posts from './Posts'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`

const PostContainer = styled.div`
  width: 650px;
  padding: 1rem;
`

const Aside = styled.div`
  display: none;
  width: 350px;
  padding: 1rem;
  div {
    background-color: white;
    width: 100%;
    height: 500px;
    border: 1px solid ${({ theme }) => theme.darkGrey };
  }
  @media (min-width: 1000px) {
    display: block;
  }
`

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <PostContainer>
          <Posts />
        </PostContainer> 
        <Aside>
          <div>Aside Content Here</div>
        </Aside>
      </HomeContainer>
    )
  }
}

export default Home
