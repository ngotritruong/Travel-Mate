import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
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
            <LanguageOutlinedIcon className="navbarItemIcon" />
            English
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
            <img
              src="https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/305292966_1702621403471181_2121299522920259958_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NGANxQ67RRUAX8PmTCv&_nc_ht=scontent.fsgn17-1.fna&oh=00_AT-jxG6Igp3rAbYloODRis0AF5HWVl2Y2waOJ1uLJyIsvw&oe=635A7BE7"
              alt=" avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
