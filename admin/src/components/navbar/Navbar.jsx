import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarSearch">
          <input type="text" placeholder="Search.. " name="" id="" />
          <SearchOutlinedIcon className="navbarItemIcon" />
        </div>
        <div className="navbarItems">
          <div className="navbarItem">
            <LogoutIcon className="navbarItemIcon"/>
          </div>
          <div className="navbarItem">
            <DarkModeOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            <FullscreenExitOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            <NotificationsNoneOutlinedIcon className="navbarItemIcon" />
            <div className="counter">1</div>
          </div>
          <div className="navbarItem">
            <ChatBubbleOutlineOutlinedIcon className="navbarItemIcon" />
            <div className="counter">2</div>
          </div>
          <div className="navbarItem">
            <ListOutlinedIcon className="navbarItemIcon" />
          </div>
          <div className="navbarItem">
            <img src="https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=" avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
