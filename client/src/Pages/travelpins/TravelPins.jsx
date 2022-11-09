import "./travelPins.css";
import Map, { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
function TravelPins() {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [pins, setPins] = useState([]);
  const { user } = useContext(Context);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const handleAddClick = (e) => {
    console.log(typeof e.lngLat.toArray()[1])
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: user.username,
      title,
      desc,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get("/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
  return (
    <div className="travelPins">
      <div className="pinContainer">
        <Map
          {...viewState}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle="mapbox://styles/ngotritruong/cla7nlkbd000c14ntkzd00xu4"
          onDblClick={handleAddClick}
        >
          {pins.map((p) => (
            <>
              <Marker
                longitude={p.long}
                latitude={p.lat}
                offsetLeft={-20}
                offsetTop={-10}
                anchor="bottom"
              >
                <FaMapMarkerAlt
                  style={{
                    fontSize: viewState.zoom * 7,
                    color: p.username === user.username ? "tomato" : "#148bed",
                  }}
                  onClick={() => handleMarkerClick(p._id)}
                />
              </Marker>
              {p._id === currentPlaceId && (
                <Popup
                  longitude={p.long}
                  latitude={p.lat}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                  onClose={() => setCurrentPlaceId(null)}
                >
                  <div className="card">
                    <img
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      alt=""
                      className="pinImg"
                    />
                    <h4 className="place">{p.title}</h4>
                    <label className="pinLabel">Review</label>
                    <p className="desc">{p.desc}</p>
                    <div className="rating">
                      <label className="pinLabel">Rating</label>
                      <div className="stars">
                        {Array(p.rating).fill(<ImStarFull className="star" />)}
                      </div>
                    </div>
                    <label className="pinLabel">Information</label>
                    <div className="inFo">
                      <span className="username">
                        Created by <b>{p.username}</b>
                      </span>
                      <span className="cardDate">
                        {new Date(p.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>
                </Popup>
              )}
            </>
          ))}
          
        </Map>
      </div>
    </div>
  );
}

export default TravelPins;
