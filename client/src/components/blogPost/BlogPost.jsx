import "./blogPost.css";
import React from "react";

function BlogPost({post}) {
  const PF = "http://localhost:8800/images/";
  return (
    <div className="blogPost">
      {post.photo && <img
        className="blogPostImg"
        src={PF + post.photo}
        alt=""
      />}
      
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c)=>(
              <span className="postCat">{c.name}</span>
              
            ))
          }
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDes">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
