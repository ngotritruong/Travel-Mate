import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
import heroHeader from "../../Image/heroHeader.mp4";
import SearchItem from "../../components/searchItem/SearchItem";

import { DateRange } from "react-date-range";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

import "./list.css";
function List() {
  let location = useLocation();

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <div className="headList">
        <video className="videoHero" autoPlay loop muted>
          <source src={heroHeader} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <Header type="list" />
      </div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <div className="lsTitle">Search</div>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="dateList"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult </span>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children </span>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room </span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <div className="homContainer">
        <EmailFeedBack />
        <Footer />
      </div>
    </div>
  );
}

export default List;
