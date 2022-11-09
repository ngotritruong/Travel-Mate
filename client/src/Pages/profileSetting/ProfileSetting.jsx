import "./profileSetting.css";

import { BiImageAdd } from "react-icons/bi";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

function ProfileSetting() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      phone,
      bio,
      country,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <ProfileSidebar />
        <div className="profileSetting">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">Hello, {user.username}</span>
              <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <div className="settingsPP">
                <label htmlFor="fileInput" className="labelInputFile">
                  <span>Image: </span>
                  <BiImageAdd className="changeImageIcon" />
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <label>Username</label>
              <input
                type="text"
                placeholder = {user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder = {user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Phone: </label>
              <input
                type="text"
                placeholder={user.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label>Country</label>
              <input
                type="text"
                placeholder={user.country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label>Bio:</label>
              <input
                type="text"
                placeholder={user.bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="settingsSubmitButton" type="submit">
                Update
              </button>
              {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
