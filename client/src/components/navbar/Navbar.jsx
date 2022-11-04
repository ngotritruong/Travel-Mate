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
              src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTti2je5jP4NJyie2Gjynf4ZklgkTOOGdloLQ&usqp=CAU"
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
