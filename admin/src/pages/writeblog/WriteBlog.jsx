import "./writeblog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from "react";
function WriteBlog() {
    const [file, setFile] = useState(null);
  return (
    <div className="writeBlog">
      <Sidebar />
      <div className="writeBlogWrapper">
        <Navbar />
        <div className="write">
          {file && (
            <img className="writeImg" src="" alt="" />
          )}
          <form className="writeForm" >
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <UploadFileIcon className="writeIcon fas fa-plus" />
                
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
               
              />
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
               
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"
               
              ></textarea>
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
