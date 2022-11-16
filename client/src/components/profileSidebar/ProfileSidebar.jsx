import "./profileSidebar.css";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { Context } from "../../context/Context";

function ProfileSidebar() {
  
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:8800/images/"
  return (
    <div className="profileSidebar">
      <img
        src={user.img ? PF+user.img : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fcute&psig=AOvVaw1IXNx_DCxCtOc6GXGmzVW4&ust=1668382421917000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLDqmP7mqfsCFQAAAAAdAAAAABAE"}
        alt=""
        className="profileImg"
      />
      <h1>{user.username}</h1>
      <p className="profileBio">
          {user.bio}
      </p>
      <Link to="/">
        <button onClick={handleLogout} className="buttonLogout">LOGOUT</button>
      </Link>
      
    </div>
  );
}

export default ProfileSidebar;
