import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import loginImg from "../../Image/loginimage.svg"
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Our Application</h1>
            <p>Please Register to use the WEBSITE</p>
          </div>
          <form className="login-form" autocomplete="off" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="userForm">Enter Username</label>
                <input type="text" id="userForm" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-item">
                <label htmlFor="emailForm">Enter Email</label>
                <input type="email" id="emailForm" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div clasNames="form-item">
                <label htmlFor="passwordForm">Enter Password</label>
                <input type="password" id="passwordForm" onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
              <button type="submit" className="registerButton">Register</button>
              <button className="loginButton">
                <Link className="link" to="/login">
                  Login
                </Link>
              </button>
            </div>
            <div class="login-form-footer">
              <a href="#">
                <img width="30"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" />
                Facebook Login
              </a>
              <a href="#">
                <img width="30"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" />
                Google Login
              </a>
            </div>
          </form>
        </div>
        <div class="login-right">
          <img src={loginImg} alt="image" />
        </div>
      </div>
    </div>
  );
}
