import { useState } from "react";
import { useGeoContext } from "../../../context/geoContext";
import { toLocaleDateAndTime } from "../../../utils/time";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { deg2dir } from "../../../utils/degreetodirection";
import { mpstomph } from "../../../utils/speedConverter";
import { dewConverter } from "../../../utils/dewValue";

const CurrentWeather = () => {
  const {
    unit,
    currentWeatherData,
    currentWeatherError,
    isCurrentWeatherLoading,
  } = useGeoContext();

  // Destructure data with optional chaining
  const { dt, name, sys, weather, main, wind, visibility } =
    currentWeatherData || {};

  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${kelvintocelcious(temp)} °C`
      : `${kelvintoFahrenheit(temp)} °F`;

  return (
    <div className="">
      {isCurrentWeatherLoading && (
        <div>
          /* From Uiverse.io by RaunakSpak */ 
<button
  disabled="true"
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition duration-300 transform hover:scale-105 active:scale-95"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="animate-spin h-5 w-5 mr-3 text-white"
  >
    <circle
      stroke-width="4"
      stroke="currentColor"
      r="10"
      cy="12"
      cx="12"
      class="opacity-25"
    ></circle>
    <path
      d="M4 12a8 8 0 018-8v8H4z"
      fill="currentColor"
      class="opacity-75"
    ></path>
  </svg>
  Loading...
</button>

        </div>
      )}
      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}
      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && <div>Search any city</div>}
      {currentWeatherData && (
        <div className="">
          <p className="">{toLocaleDateAndTime(dt)}</p>
          <p className="">
            {name}, {sys?.country}
          </p>

          <img
            src={`http://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
            alt={weather?.[0]?.description || "weather icon"}
            className=""
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
