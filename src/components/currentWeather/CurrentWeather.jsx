import { useState } from "react";
import { useGeoContext } from "../../context/geoContext";
import { toLocaleDateAndTime } from "../../utils/time";
import { kelvintocelcious, kelvintoFahrenheit } from "../../utils/kelvinto";
import { deg2dir } from "../../utils/degreetodirection";
import { mpstomph } from "../../utils/speedConverter";
import { dewConverter } from "../../utils/dewValue";

const CurrentWeather = () => {
  const [unit, setUnit] = useState("Imperial"); // "Metric" for °C, m/s; "Imperial" for °F, mph
  const { currentWeatherData, currentWeatherError, isCurrentWeatherLoading } =
    useGeoContext();
  console.log(isCurrentWeatherLoading);

  // Destructure data with optional chaining
  const { dt, name, sys, weather, main, wind, visibility } =
    currentWeatherData || {};

  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${kelvintocelcious(temp)} °C`
      : `${kelvintoFahrenheit(temp)} °F`;

  return (
    <div className="current-weather-container container">
      {isCurrentWeatherLoading && <div>
         
<svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>
        Loading...</div>}
      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}
      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && <div>Search any city</div>}
      {currentWeatherData && (
    <div className="current-weather-subcontainer">
          <p className="cw-date">{toLocaleDateAndTime(dt)}</p>
          <p className="cw-areaname">
            {name}, {sys?.country}
          </p>

          <img
            src={`http://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
            alt={weather?.[0]?.description || "weather icon"}
            className="weather-icon"
          />

          <p>{weather?.[0]?.description || "--"}</p>

          <h2>{getTemperature(main?.temp)}</h2>

          <p>Feels like {getTemperature(main?.feels_like)}</p>
          <p>Humidity: {main?.humidity ?? "--"}%</p>

          <p>Max Temperature: {getTemperature(main?.temp_max)}</p>
          <p>Min Temperature: {getTemperature(main?.temp_min)}</p>

          <p>Wind Direction: {deg2dir(wind?.deg) || "--"}</p>

          <p>
            Wind Speed:{" "}
            {unit === "Metric"
              ? `${wind?.speed?.toFixed(1)} m/s`
              : `${mpstomph(wind?.speed).toFixed(1)} mph`}
          </p>

          <p>Pressure: {main?.pressure ?? "--"} hPa</p>
          <p>
            Visibility:{" "}
            {visibility != null ? `${(visibility / 1000).toFixed(1)} km` : "--"}
          </p>
          <p>
            Dew point:{" "}
            {dewConverter(
              unit === "Metric"
                ? kelvintocelcious(main?.temp)
                : kelvintoFahrenheit(main?.temp),
              main?.humidity,
              unit === "Imperial"
            )}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
