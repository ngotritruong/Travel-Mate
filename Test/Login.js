// const {Login} = require ('./Test/login.js');
// const {Resgister} = require ('./Test/register.js');

// const util = require ('util');

// import "./App.css";
// import Home from "./Pages/home/Home";
// import List from "./Pages/list/List";

// import TravelBlog from "./Pages/travelBlog/TravelBlog";
// import SingleBlogPage from "./Pages/singleBlogPage/SingleBlogPage";
// import Navbar from "../src/components/navbar/Navbar"
// import ProfileSetting from "./Pages/profileSetting/ProfileSetting";
// import Register from "./Pages/register/Register";
// import Login from "./Pages/login/Login";
// import TravelPins from "./Pages/travelpins/TravelPins";
// import TravelTips from "./Pages/traveltips/TravelTips";
// import { Context } from "./context/Context";
// import { useContext } from "react";
// import SingleTip from "./Pages/singelTip/SingleTip";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BookingHotel from "./Pages/bookinghotel/BookingHotel";
// import Rooms from "./Pages/Room/Rooms";
// import SingleRoom from "./Pages/singleroom/SingleRoom";
// import ListOrder from "./Pages/listOrder/ListOrder";
// function login() {
//   const {user} = useContext(Context);
//   return (    
//     <Route path="/login" element={user ? <Home /> : <Login />} />    
//   );
// }
// export default login;


import express from "express";
const router = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {loginMysql} from "../lib/loginMysql.js"


export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
      return res.status(400).json("Email not found!");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated){ return res.status(400).json("Wrong password or username!")}

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT
    );
    const userDt = await loginMysql(req.body)
    const { password, ...others} = user._doc;
    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .cookie("iduser", userDt)
    .status(200)
    .json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};