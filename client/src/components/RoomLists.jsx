import React from "react";
import room1 from "../Images/room-1.jpeg";
import { Link } from "react-router-dom";
const RoomLists = ({ rooms }) => {
  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          <article className="room">
            <div className="img-container">
              <img src={room1} alt="single room" />
              <div className="price-top">
                <h6>10000VND</h6>
                <p>per night</p>
              </div>
              <Link to={`/singleroom/`} className="btn-primary room-link">
                Features
              </Link>
            </div>
            <div className="roomDec">
              <span>Room type: Vip</span>
              <br />
              <span className="">Name: 2 </span>
              <br />
            </div>
          </article>
          <article className="room">
            <div className="img-container">
              <img src={room1} alt="single room" />
              <div className="price-top">
                <h6>10000VND</h6>
                <p>per night</p>
              </div>
              <Link to={`/singleroom/`} className="btn-primary room-link">
                Features
              </Link>
            </div>
            <div className="roomDec">
              <span>Room type: Vip</span>
              <br />
              <span className="">Name: 2 </span>
              <br />
            </div>
          </article>
          <article className="room">
            <div className="img-container">
              <img src={room1} alt="single room" />
              <div className="price-top">
                <h6>10000VND</h6>
                <p>per night</p>
              </div>
              <Link to={`/singleroom/`} className="btn-primary room-link">
                Features
              </Link>
            </div>
            <div className="roomDec">
              <span>Room type: Vip</span>
              <br />
              <span className="">Name: 2 </span>
              <br />
            </div>
          </article>
          <article className="room">
            <div className="img-container">
              <img src={room1} alt="single room" />
              <div className="price-top">
                <h6>10000VND</h6>
                <p>per night</p>
              </div>
              <Link to={`/singleroom/`} className="btn-primary room-link">
                Features
              </Link>
            </div>
            <div className="roomDec">
              <span>Room type: Vip</span>
              <br />
              <span className="">Name: 2 </span>
              <br />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default RoomLists;
