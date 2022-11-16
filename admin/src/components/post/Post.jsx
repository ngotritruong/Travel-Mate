import "./post.scss"
import { Link } from "react-router-dom";
function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img
        className="postImg"
        src={PF + post.photo}
        alt=""
      />}
      <div className="postInfo">
        <div className="postCats">
          
          {
            post.categories.map((c) => (
              <span className="postCat">
                <Link className="link" to="/posts?cat=${}">
                  {c.name}
                </Link></span>

            ))
          }
        </div>
        <span className="postTitle">{post.title}</span>
       
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}

export default Post