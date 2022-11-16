import React from "react";
import "./tips.css";
import {Link} from "react-router-dom";
import Tip from "../tip/Tip";
function Tips() {
  
  return (
    <div className="tips">
      <Tip />
      <Tip />
      <Tip />
      <Tip />
      <Tip />
      <Tip />
      <Tip />
    </div>
  );
}

export default Tips;
