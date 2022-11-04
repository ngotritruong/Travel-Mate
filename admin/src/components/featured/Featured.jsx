import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "react-circular-progressbar/dist/styles.css";
function featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon className="Icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              rotation: 0.25,

              textColor: "#148bed",
              trailColor: "#d6d6d6",
              pathColor: "#148bed"
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$443</p>
        <p className="decs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
          possimus!
        </p>
      </div>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">$-12.29k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">$12.29k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Target</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">$12.29k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default featured;
