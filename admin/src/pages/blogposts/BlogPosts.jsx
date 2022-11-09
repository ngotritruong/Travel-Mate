import "./blogposts.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
function BlogPost() {
  return (
    <div className="blogPost">
      <Sidebar />
      <div className="blogPostContainer">
        <Navbar />
        <div className="home">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
