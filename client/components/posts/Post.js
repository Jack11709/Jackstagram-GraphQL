import PostStyles from '../styles/PostStyles'

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