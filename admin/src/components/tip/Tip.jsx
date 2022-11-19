import "./tip.scss"
import { Link } from "react-router-dom";
function Tip({ tip }) {
  const PF = "http://localhost:8800/images/";
  return (
    <div className="tip" >
      {tip.photo && <img
        className="tipImg"
        src={PF + tip.photo}
        alt=""
      />}
      <div className="tipInfo">
        
        <span className="tipTitle">{tip.title}</span>
       
        <span className="tipDate">{new Date(tip.createdAt).toDateString()}</span>
      </div>
      <p className="tipDesc">
        {tip.desc}
      </p>
    </div>
  )
}

export default Tip