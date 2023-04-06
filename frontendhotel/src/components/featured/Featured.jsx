import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = ({valueSum}) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Số tiền kiếm được trong tháng</p>
        <p className="amount">{valueSum} VND</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim veritatis quasi vero nam dignissimos? Culpa inventore minus vero rerum autem!
        </p>
       
      </div>
    </div>
  );
};

export default Featured;
