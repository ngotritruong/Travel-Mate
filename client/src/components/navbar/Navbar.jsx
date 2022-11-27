import "./navbar.css";
import logo from "../../Image/Logomate.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import userImage from "../../Image/tempa.webp"
function Navbar() {
  const { user} = useContext(Context);
  const PF = "http://localhost:8800/images/"
 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        {user ? (
          <Link to="/profilesetting">
            <img
              src= {user.img ? PF+user.img : userImage}
              alt=""
              className="navBarImgUser"
            />
          </Link>
        ) : (
          <div className="navItems">
            <Link className="link" to="/register">
            <button className="navButton">Register</button>
            </Link>
            <Link className="link" to="/login">
            <button className="navButton">Login</button>
            </Link>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
