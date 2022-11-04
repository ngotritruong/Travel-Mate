import "./singleBlogPage.css";
import BlogSidebar from "../../components/blogSidebar/BlogSidebar";
import SingleBlogPost from "../../components/singleBlogPost/SingleBlogPost";

function singleBlogPage() {
  return (
    <div className="singleBlog">
      <div className="singleBlogContainer">
        <div className="singleBlogWrapper">
          <BlogSidebar />
          <SingleBlogPost />
        </div>
      </div>
    </div>
  );
}

export default singleBlogPage;
