import "./login.scss"
import { useRef, useState } from "react";
import { useCookies } from 'react-cookie'
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);

  const [cookies, setCookie] = useCookies(['fullName']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/nhanvien/login", {
        email: userRef.current.value,
        mat_khau: passwordRef.current.value,
      });
      setError("");
      console.log(res.data.ten_nv)
      setCookie('Name', res.data.ten_nv, { path: '/'})
    } catch (err) {
      console.log(err.request.response)
      setError(err.request.response);
    }
  };
  return (
    <div className="lo">
    <div className="login">
		<div className="login-screen">
			<div className="app-title">
				<h2>ĐĂNG NHẬP</h2>
			</div>

			<form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
				<div className="control-group">
				<input type="text" className="login-field"  placeholder="username" id="login-name" ref={userRef}/>
				<label className="login-field-icon fui-user" htmlFor="login-name"></label>
				</div>

				<div className="control-group">
				<input type="password" className="login-field"  placeholder="password" id="login-pass" ref={passwordRef}/>
				<label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
				</div>
        {error && <span className="error">{error}</span>}
				<button className="btnLogin" href="#">Đăng nhập</button>
				<a className="login-link" href="#">Lost your password?</a>
			</form>
		</div>
	</div>
  </div>
  )
}

export default Login