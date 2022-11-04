import "./blogPost.css";
import React from "react";

function BlogPost({post}) {
  return (
    <div className="blogPost">
      {post.photo && (
        <img
        src={post.photo}
        alt=""
        className="blogPostImg"
      />
      )}
      
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
