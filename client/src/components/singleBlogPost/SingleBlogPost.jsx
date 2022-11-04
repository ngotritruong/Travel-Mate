import "./singleBlogPost.css";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function SingleBlogPost() {
  const Location = useLocation();
  const path = Location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      console.log(res)
    };
    getPost();
  }, [path]);
  return (
    <div className="singleBlogPost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={post.photo}
            alt=""
            className="singlePostImg"
          />
        )}

        <h1 className="singlePostTitle">
          <p>{post.title}</p>
          <div className="singlePostEdit">
            <BsPencilSquare className="singlePostIcon far-delete" />
            <BsTrash className="singlePostIcon far-edit" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <Link to={`/travelBlog/?admin=${post.nameAdmin}`} className="link"><b>{post.nameAdmin}</b></Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

export default SingleBlogPost;
