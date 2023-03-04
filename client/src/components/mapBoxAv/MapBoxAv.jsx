import "./mapBoxAv.css";
import * as React from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map, { Popup, Marker } from "react-map-gl";


function MapBoxAv({ setCoordinates, setBounds, coordinates, places }) {
  const [currentPlaceId, setCurrentPlaceId] = useState(false);
  const placeResult = places?.filter((place) => Number(place.latitude));
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 4,
  });
  console.log(placeResult);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };
  

  return (
    <div>
      <Map
        {...viewState}
        mapboxAccessToken= {process.env.REACT_APP_MAP_KEY}
        style={{ width: "100%", height: "90vh" }}
        onMove={(evt) => {
          
          setViewState(evt.viewState)
        }
        }
       onViewChange={e=>{
        console.log(e)
       }}
       mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {placeResult.map((place, i) => (
          <div key={i}>

            <Marker
              longitude={Number(place.longitude)}
              latitude={Number(place.latitude)}
              offsetLeft={-20}
              offsetTop={-10}
              anchor="bottom"
            >
              <FaMapMarkerAlt
                className="FaIcons"
                style={{
                  fontSize: viewState.zoom * 4,
                  color: "#148bed",
                  zIndex: 100

                }}
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
