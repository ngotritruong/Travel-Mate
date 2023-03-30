import React from "react";
import "./mapAdvice.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useEffect, useState } from "react";
import { getPlacesData } from "../../api/mapRequest";
import ListMapAv from "../../components/listMapAv/ListMapAv";
import MapBoxAv from "../../components/mapBoxAv/MapBoxAv";
import Footer from "../../components/footer/Footer";
import EmailFeedBack from "../../components/emailFeedback/EmailFeedBack";
function MapAdvice() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    getPlacesData().then((data) => {
      setPlaces(data);
      console.log(data);
    });
  }, []);
  
  return (
    <div className="App">
      <div className="Container">
        <div className="Wrapper">
          <div className="List">
            <ListMapAv places={places} />
          </div>
          <div className="Map">
            <MapBoxAv
              places={places}
            />
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

export default MapAdvice;
