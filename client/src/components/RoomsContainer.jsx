import React from "react";
import RoomLists from "./RoomLists";

import Title from "./Title";

const RoomsContainer = ({ context }) => {

  return (
    <>
      <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              className="form-control"
            >
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              className="form-control"
            >
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price $1000</label>
            <input
              type="range"
              name="price"
              id="price"
              className="form-control"
            />
          </div>
        </form>
      </section>
      <div className="room-style">
        <RoomLists />
        <RoomLists />
        <RoomLists />
        <RoomLists />
        <RoomLists />
        <RoomLists />
        <RoomLists />
      </div>


    </>
  );
};
export default RoomsContainer;

