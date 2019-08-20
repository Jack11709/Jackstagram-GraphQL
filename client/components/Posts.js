import styled from 'styled-components'

const Post = styled.div`
  height: 300px;
  max-width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.darkGrey };
  margin-bottom: 6rem;
`

const Posts = () => (
  <React.Fragment>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
    <Post>Content Goes Here</Post>
  </React.Fragment>
)

export default Posts