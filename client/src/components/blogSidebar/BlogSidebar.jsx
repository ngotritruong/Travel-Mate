import React from "react";
import "./blogSidebar.css";
import axios from "axios";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import imgAboutMe from "../../Image/aboutMe.jpg";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function BlogSidebar() {
  const [cats, setCats] = useState([])
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data)
    }
    getCats();
  },[]);
  return (
    <div className="BlogSidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img src={imgAboutMe} alt="About me Img" className="imgAboutMe" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eaque
          magnam deleniti provident officia et .
        </p>
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((c)=>(
              <Link to={`/travelBlog/?cat=${c.name}`} className="link">
                <li className="sideListItem">{c.name}</li>
              </Link>
              
            ))
          }
          
         
        </ul>
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="blogIcon">
          <BsFacebook className="faIcon" />
          <BsInstagram className="faIcon" />
          <BsTwitter className="faIcon" />
          <BsLinkedin className="faIcon" />
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
