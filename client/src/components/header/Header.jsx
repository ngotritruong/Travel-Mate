import {
  faBed,
  faTaxi,
  faCalendarDays,
  faPerson,
  faHome,
  faMap,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main css file
import { DateRange } from "react-date-range";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { Context } from "../../context/Context";
import "./header.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);

  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOpenDate = () => {
    if (openOptions) {
      setOpenOptions(false);
    }
    setOpenDate(!openDate);
  };

  const handleOpenOptions = () => {
    if (openDate) {
      setOpenDate(false);
    }
    setOpenOptions(!openOptions);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/hotels", { state: { destination, date, options } });
    }
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        {type !== "list" && (
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faHome} className="headerIcon" />
              <span>Home</span>
            </div>
            <div className="headerListItem">
              <Link to="/mapAdvice">
                <FontAwesomeIcon icon={faMap} className="headerIcon" />
                <span>Map Advices</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelBlog">
                <FontAwesomeIcon icon={faBlog} className="headerIcon" />
                <span>Travel Blog</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelPins">
                <FaMapMarkedAlt icon={faBed} className="headerIcon" />
                <span>Destinations</span>
              </Link>
            </div>
            <div className="headerListItem">
              <Link to="/travelTips">
                <MdTipsAndUpdates icon={faTaxi} className="headerIcon" />
                <span>Travel Tips</span>
              </Link>

            </div>
          </div>
        )}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Easy to go everywhere!</h1>

            <p className="headerDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium nemo animi quo magnam repellat dignissimos aliquam,
              corrupti reprehenderit inventore recusandae quidem iusto
              laudantium fuga, nihil quae, doloribus impedit mollitia!
            </p>
            {
              !user &&
              <Link to="/login">
                <button className="headerBtn">Sign in / Register</button>
              </Link>
            }



            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you go ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className="headerSearchText" onClick={handleOpenDate}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText" onClick={handleOpenOptions}>
                  {`${options.adult} adults - ${options.children} children - ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <div className="optionText">Adult</div>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <div className="optionText">Children</div>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <div className="optionText">Room</div>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
