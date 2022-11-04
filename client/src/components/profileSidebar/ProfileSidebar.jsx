import "./profileSidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext} from "react";


function ProfileSidebar() {
  
  const { user, dispatch } = useContext(Context);
  console.log(user);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="profileSidebar">
      <img
        src="https://plus.unsplash.com/premium_photo-1661591575373-8ef2448e542c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZHNvbWUlMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="profileImg"
      />
      <h1>Ngo Tri Truong</h1>
      <p className="profileBio">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
      <Link to="/">
        <button onClick={handleLogout} className="buttonLogout">LOGOUT</button>
      </Link>
      
    </div>
  );
}

export default ProfileSidebar;
