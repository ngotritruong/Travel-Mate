import './weather.css'

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const URL = "https://community-open-weather-map.p.rapidapi.com/forecast/daily";

const Weather = () => {
  const [weather, setWeather] = useState();
  let location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  useEffect(() => {
    const options = {
      params: { q: destination, cnt: "3", units: "metric" },
      headers: {
        "X-RapidAPI-Key": "02830c346emsh2606c2508f81c59p1b7059jsn5006c032fb80",
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    const getWeather = async () => {
      const { data } = await axios.get(URL, options);
      setWeather(data);
    };

    if (destination !== "") {
      getWeather();
    }
  }, [destination]);

  const giveDate = (d) => {
    const date = new Date(d * 1000).toDateString();
    return date;
  };
  return (
    <>
      {weather ? (
        <div className='weather'>
          <h6>{weather.city.name}</h6>
          {weather.list.map((d, i) => (
            <div className="weatherCard" key={i}>
              <p style={{ fontWeight: "700" }}>{giveDate(d.dt)}</p>
              <div className="weatherInfo">
                <div className="weath">
                  <img
                    src={`https://openweathermap.org/img/wn/${d.weather[0].icon}.png`}
                    alt="icon"
                    className='weatherImg'
                  />
                  <h6 className="weatherCapitalize">
                    {d.weather[0].description}
                  </h6>
                </div>
                <div className="weatherTemp">
                  <p style={{ fontWeight: "500" }}>
                    Max:{" "}
                    <span style={{ fontWeight: "normal" }}>{d.temp.max} </span>
                    &#176;C
                  </p>
                  <p style={{ fontWeight: "500" }}>
                    Min:{" "}
                    <span style={{ fontWeight: "normal" }}>{d.temp.min} </span>
                    &#176;C
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h6>Loading ...</h6>
      )}
    </>
  );
};

export default Weather;
