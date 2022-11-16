import "./tip.css";
import React from "react";

function Tip({ post }) {
    return (
        <div className="tip">

            <img
                src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="tipImg"
            />
            <div className="tipInfo">
                <span className="tipTitle">hahaha</span>
                <hr />
                <span className="tipDate">11 tieng trước</span>
                <p className="tipDes">
                    hở đây có 1 người à
                </p>
            </div>
        </div>
    );
}

export default Tip;