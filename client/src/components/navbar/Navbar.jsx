import "./navbar.css";
import logo from "../../Image/Logomate.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
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
              src= {user.img ? PF+user.img : "https://images.unsplash.com/photo-1566903697359-6f8ee1c1ab20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWUlMjBjdXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
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
