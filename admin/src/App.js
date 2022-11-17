import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import WriteBlog from "./pages/writeblog/WriteBlog";
import BlogPosts from "./pages/blogposts/BlogPosts";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import Register from "./pages/register/Register";
import {userColumns} from "./datatablesource"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/users" >
              <Route index element={<List columns={userColumns}/>} />
              <Route path=":userId" element={<Single/>} />            
            </Route>
            <Route path="/writeblog" >
              <Route index element={<WriteBlog/>} />
            </Route>
            <Route path="/blogposts" >
              <Route index element={<BlogPosts/>} />
              <Route path=":postId" element={<SingleBlog/>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
