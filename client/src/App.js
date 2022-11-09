import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Hotel from "./Pages/hotel/Hotel";
import MapAdvice from "./Pages/mapAdvices/MapAdvice";
import TravelBlog from "./Pages/travelBlog/TravelBlog";
import SingleBlogPage from "./Pages/singleBlogPage/SingleBlogPage";
import Navbar from "../src/components/navbar/Navbar"
import ProfileSetting from "./Pages/profileSetting/ProfileSetting";
import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import TravelPins from "./Pages/travelpins/TravelPins";
import { Context } from "./context/Context";
import { useContext } from "react";
function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element = {user ? <Home /> : <Register />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/mapAdvice" element={<MapAdvice />} />
          <Route path="/travelBlog" element={<TravelBlog />} />
          <Route path="/travelPins" element={<TravelPins />} />
          <Route path="/travelBlog/:id" element={<SingleBlogPage />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/profileSetting" element={<ProfileSetting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
