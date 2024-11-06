import { useState } from "react";
import { useGeoContext } from "../../../context/geoContext";
import { toLocaleDateAndTime } from "../../../utils/time";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { deg2dir } from "../../../utils/degreetodirection";
import { mpstomph } from "../../../utils/speedConverter";
import { dewConverter } from "../../../utils/dewValue";
import { WiHumidity } from "react-icons/wi";
import {
  FaTemperatureQuarter,
  FaTemperatureThreeQuarters,
  FaWind,
} from "react-icons/fa6";
import Span from "../../SpanValue";
import { MdDewPoint, MdNavigation, MdVisibility } from "react-icons/md";
import { BiSolidTachometer } from "react-icons/bi";
import LoadingBtn from "../../LoadingBtn";
import WeatherData from "../../WeatherData";
import { GiBrainFreeze } from "react-icons/gi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const CurrentWeather = () => {
  const {
    unit,
    currentWeatherData,
    currentWeatherError,
    isCurrentWeatherLoading,
  } = useGeoContext();
  console.log(currentWeatherData)
  // Destructure data with optional chaining
  const { dt, name, sys, weather, main, wind, visibility } =
    currentWeatherData || {};

  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${kelvintocelcious(temp)} °C`
      : `${kelvintoFahrenheit(temp)} °F`;

  return (
    <div className="primary-container flex justify-center items-center bg-surface rounded-2xl p-4  md:col-start-1 md:col-end-6">
      {isCurrentWeatherLoading && <LoadingBtn />}

      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}

      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && (
          <div className="text-4xl flex justify-center items-center">
            Search any city
          </div>
        )}

      {currentWeatherData && (
        <div className="secondary container flex flex-wrap justify-center items-center  gap-2 w-full">
          <div className="self-start bg-background  flex justify-center items-center flex-col p-4 rounded-2xl">
            <p className="text-primary">{toLocaleDateAndTime(dt)}</p>
            <p className="text-secondary text-4xl">
              {name}, {sys?.country}
            </p>
            <figure>
              <img
                src={`http://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
                alt={weather?.[0]?.description || "weather icon"}
                className="shadow-2xl rounded-md border border-[white] bg-accent"
              />
              <figcaption className="text-center font-semibold">
                {weather?.[0]?.description || "--"}
              </figcaption>
            </figure>

            <h2 className="text-primary font-bold text-3xl">
              {getTemperature(main?.temp)}
            </h2>

            <WeatherData
              label={"Feels Like"}
              icon={GiBrainFreeze}
              iconclass={"text-2xl text-[#fdeb48]"}
              value={`${getTemperature(main?.feels_like)}`}
            />
          </div>
          <div className="leading-10 bg-background flex justify-center items-center flex-wrap md:max-w-[60%] gap-4 sm:p-4 py-4 rounded-2xl w-full">
            <WeatherData
              icon={WiHumidity}
              iconclass={"text-4xl text-[#4FC3F7]"}
              label={"Humidity"}
              value={`${main?.humidity ?? "--"} %`}
            />

            <WeatherData
              label={"Max Temperature"}
              icon={FaTemperatureThreeQuarters}
              iconclass={"text-[#FF5722] text-2xl"}
              value={`${getTemperature(main?.temp_max)}`}
            />

            <WeatherData
              label={"Min Temperature"}
              icon={FaTemperatureQuarter}
              iconclass={"text-[#81D4FA] text-2xl"}
              value={`${getTemperature(main?.temp_min)}`}
            />

            <WeatherData
              label={"Wind Direction"}
              icon={MdNavigation}
              iconclass={"text-[#6AB187] text-2xl"}
              value={`${deg2dir(wind?.deg) || "--"}`}
            />

            <WeatherData
              label={"Wind Speed"}
              icon={FaWind}
              iconclass={"text-[#48C9B0] text-2xl"}
              value={`${
                unit === "Metric"
                  ? `${wind?.speed?.toFixed(1)} m/s`
                  : `${mpstomph(wind?.speed).toFixed(1)} mph`
              }`}
            />

            <WeatherData
              label={"Pressure"}
              icon={BiSolidTachometer}
              iconclass={"text-[#A569BD] text-2xl"}
              value={`${main?.pressure ?? "--"} hPa`}
            />

            <WeatherData
              label={"Visibility"}
              icon={MdVisibility}
              iconclass={"text-[#87CEEB] text-2xl"}
              value={
                visibility != null
                  ? `${(visibility / 1000).toFixed(1)} km`
                  : "--"
              }
            />

            <WeatherData
              label={"Dew point"}
              icon={MdDewPoint}
              iconclass={"text-[#00ACC1] text-2xl"}
              value={dewConverter(
                unit === "Metric"
                  ? kelvintocelcious(main?.temp)
                  : kelvintoFahrenheit(main?.temp),
                main?.humidity,
                unit === "Imperial"
              )}
            />

            <WeatherData label={"Sunrise"} icon={BsFillSunriseFill} iconclass={"text-[#FFD180] text-2xl"} value={`${sys.sunrise}`}/>
            <WeatherData label={"Sunset"} icon={BsFillSunsetFill} iconclass={"text-[#FFB74D] text-2xl"} value={`${sys.sunset}`}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
