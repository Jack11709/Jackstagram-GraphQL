import styled from 'styled-components'

const PostStyles = styled.div`
  max-width: 100%;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.darkGrey };
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 1.2rem;
  letter-spacing: .05rem;
  div.post-top {
    display: flex; 
    justify-content: space-between; 
    padding: .5rem 1.5rem;
  }
  img {
    max-width:100%;
    height:auto;
  }
  div.post-bottom {
    display: flex;
    flex-direction: column;
    padding: .5rem 1.5rem;
    div.bottom-icons {
      display: flex;
      div {
        font-size: 2rem;
      }
      div:not(:first-child) {
        margin-left: 1rem;
      }
    }
    p {
      margin-top: 0;
    }
  }
  span {
    text-transform: lowercase;
    font-weight: bold;
  }
`

const Post = props => {
  return (
    <PostStyles>
      <div className="post-top">
        <div>
          <p>👱 <span>{props.owner.username}</span></p>
        </div>
        <div>
          <p>▪▪▪</p>
        </div>
      </div>
      <div>
        <img src={props.image} alt={props.image} />
      </div>
      <div className="post-bottom">
        <div className="bottom-icons">
          <div>❤</div>
          <div>💬</div>  
        </div>
        <p><span>{props.likes.length} likes</span></p>
        <p><span>{props.owner.username}</span> {props.content}</p>
      </div>
    </PostStyles>
  )
}

export default Post