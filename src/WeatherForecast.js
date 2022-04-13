import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios, { Axios } from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "3399623ab1e4ceda0e2cf5e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19</span>
            <span className="WeatherForecast-temperature-min">5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
