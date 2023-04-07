import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ArticleIcon from '@mui/icons-material/Article';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import InfoIcon from '@mui/icons-material/Info';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useCookies } from 'react-cookie'
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [cookies, removeCookie] = useCookies(['Name']);
  const handleLogout = () => {
    removeCookie(['Name']);
    window.location.href = "/login";
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Hotel Amin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <MapsHomeWorkIcon className="icon" />
              <span>Quản lý Phòng</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to="/staffs" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Quản lý nhân viên</span>
            </li>
          </Link>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Quản lý khách hàng</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/reservation" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Phiếu đặt phòng</span>
            </li>
          </Link>
          <Link to="/detail_reservation" style={{ textDecoration: "none" }}>
            <li>
              <InfoIcon className="icon" />
              <span>Chi Tiết Phiếu Đặt</span>
            </li>
          </Link>
          <Link to="/bill" style={{ textDecoration: "none" }}>
            <li>
              <FactCheckIcon className="icon" />
              <span>Hóa Đơn</span>
            </li>
          </Link>
          <Link to="/billdetail" style={{ textDecoration: "none" }}>
          <li>
            <ContactEmergencyIcon className="icon" />
            <span>Chi Tiết Hóa Đơn</span>
          </li>
         </Link>
          <p className="title">USER</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Thông tin</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Đăng suất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
