import axios from "axios";
import "./login.css";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import loginImg from "../../Image/loginimage.svg"
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });

    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Our Application</h1>
            <p>Please login to use the platform</p>
          </div>
          <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="emailForm">Enter Email</label>
                <input type="email" id="emailForm" ref={userRef} />
              </div>
              <div className="form-item">
                <label htmlFor="passwordForm">Enter Password</label>
                <input type="password" id="passwordForm" ref={passwordRef} />
              </div>
              
              {error && <span className="error">Something went wrong!</span>}
              <button type="submit" className="loginButton" disabled={isFetching}>Sign In</button>
              <button className="registerButton">
                <Link className="link" to="/register">
                  Register
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
