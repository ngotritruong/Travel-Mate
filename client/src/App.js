
import "./App.css";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import MapAdvice from "./Pages/mapAdvices/MapAdvice";
import TravelBlog from "./Pages/travelBlog/TravelBlog";
import SingleBlogPage from "./Pages/singleBlogPage/SingleBlogPage";
import Navbar from "../src/components/navbar/Navbar"
import ProfileSetting from "./Pages/profileSetting/ProfileSetting";
import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import TravelPins from "./Pages/travelpins/TravelPins";
import TravelTips from "./Pages/traveltips/TravelTips";
import { Context } from "./context/Context";
import { useContext } from "react";
import SingleTip from "./Pages/singelTip/SingleTip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/places" element={<List />} />
          <Route path="/mapAdvice" element={<MapAdvice />} />
          <Route path="/travelBlog" element={<TravelBlog />} />
          <Route path="/travelTips" element={<TravelTips />} />
          <Route path="/travelTips/:id" element={<SingleTip />} />
          <Route path="/travelPins" element={ user ? <TravelPins /> : <Login />} />
          <Route path="/travelBlog/:id" element={<SingleBlogPage />} />
          <Route path="/profileSetting" element={<ProfileSetting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
