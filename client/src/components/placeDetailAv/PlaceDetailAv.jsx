import "./placeDetailAv.css";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";
function PlaceDetailAv({ place }) {
  return (
    <div className="placeDetailContainer">
      <img
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        alt=""
        className="placeDetailImg"
      />
      <h1>{place.name}</h1>
      {place?.price && (
        <div className="placeBoxDetail">
          <span>Price</span>
          <span>{place.price_level}</span>
        </div>
      )}
      {place?.ranking && (
        <div className="placeBoxDetail">
          <span>Ranking</span>
          <span>{place.ranking}</span>
        </div>
      )}
      {place?.awards?.map((award) => (
        <div className="placeBoxDetail">
          <img src={award.images.small} alt={award.display_name} />
          <span>{award.display_name}</span>
        </div>
      ))}
      {place?.phone && (
        <div className="placeBoxDetail">
          <AiFillPhone className="pdavIcon"/>
          <span>{place.phone}</span>
        </div>
      )}
      {place?.address && (
        <div className="placeBoxDetail">
          <SiGooglestreetview  className="pdavIcon"/>
          <span>{place.address}</span>
        </div>
      )}

      <div className="actionCard">
        <button
          onClick={() => window.open(place.web_url, "_blank")}
          className="mapButton"
        >
          Trip Advisor
        </button>
        <button
          onClick={() => window.open(place.website, "_blank")}
          className="mapButton"
        >
          Website
        </button>
      </div>
    </div>
  );
}

export default PlaceDetailAv;
