import "./mapBoxAv.css";
import * as React from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map, { Popup, Marker } from "react-map-gl";

function MapBoxAv({ setCoordinates, setBounds, coordinates, places }) {
  const [currentPlaceId, setCurrentPlaceId] = useState(false);
  const placeResult = places?.filter((place) => Number(place.latitude));
  console.log(placeResult);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  return (
    <div>
      <Map
        onChange={(e) => {
          console.log(e);
        }}
        initialViewState={{
          longitude: 106.700981,
          latitude: 10.77653,
          zoom: 10,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{ width: "100%", height: "90vh" }}
        mapStyle="mapbox://styles/ngotritruong/cl7m0zpnh000614s4fkvm3252"
      >
        {placeResult.map((place, i) => (
          <div key={i}>
            <Marker
              longitude={Number(place.longitude)}
              latitude={Number(place.latitude)}
              anchor="left"
            >
              <FaMapMarkerAlt
                className="FaIcons"
                onClick={() => handleMarkerClick(place.location_id)}
              />
            </Marker>
            {console.log(currentPlaceId)}
            {currentPlaceId === place.location_id && (
              <Popup
                longitude={Number(place.longitude)}
                latitude={Number(place.latitude)}
                anchor="right"
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(false)}
              >
                <div className="popupDetail">
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    alt=""
                    className="popupImg"
                  />
                </div>
              </Popup>
            )}
          </div>
        ))}
      </Map>
    </div>
  );
}

export default MapBoxAv;
