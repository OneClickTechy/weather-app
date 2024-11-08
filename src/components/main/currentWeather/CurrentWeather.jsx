import { useGeoContext } from "../../../context/geoContext";
import { toLocaleDateAndTime, toLocalTime } from "../../../utils/time";
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
import { MdDewPoint, MdNavigation, MdVisibility } from "react-icons/md";
import { BiSolidTachometer } from "react-icons/bi";
import WeatherData from "../../WeatherData";
import { GiBrainFreeze } from "react-icons/gi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

const CurrentWeather = () => {
  const { unit, currentWeatherData } = useGeoContext();
  // Destructure data with optional chaining
  const { dt, name, sys, weather, main, wind, visibility } =
    currentWeatherData || {};
  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${kelvintocelcious(temp)} °C`
      : `${kelvintoFahrenheit(temp)} °F`;

  return (
    <div className="current-weather lg:justify-start  flex flex-col lg:flex-row gap-8 lg:row-start-2 lg:row-end-2 lg:col-start-1 lg:items-center">
      {currentWeatherData && (
        <>
          <div className="order-1 flex flex-col gap-2  lg:h-fit justify-center items-center lg:justify-start bg-surface rounded-2xl leading-6 p-4">
            <p className="text-text-primary text-nowrap">{toLocaleDateAndTime(dt)}</p>
            <p className="text-text-secondary text-4xl font-semibold text-nowrap">
              {name}, {sys?.country}
            </p>
            <figure>
              <img
                src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@2x.png`}
                alt={weather?.[0]?.description || "weather icon"}
                className="shadow-2xl rounded-md border border-[white] bg-accent"
              />
              <figcaption className="text-center font-semibold">
                {weather?.[0]?.description || "--"}
              </figcaption>
            </figure>

            <h2 className="text-text-primary font-bold text-3xl">
              {getTemperature(main?.temp)}
            </h2>

            <WeatherData
              label={"Feels Like"}
              icon={GiBrainFreeze}
              iconclass={"text-2xl text-[#fdeb48]"}
              value={`${getTemperature(main?.feels_like)}`}
            />
          </div>
          <div className="order-2 lg:leading-none  bg-surface leading-10 flex  flex-wrap lg:content-center justify-center lg:max-w-[50%] gap-4 lg:items-start p-4 rounded-2xl  lg:h-fit">
            <WeatherData
              icon={WiHumidity}
              iconclass={`text-4xl text-[#4FC3F7]`}
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
              iconclass={`text-[#6AB187] text-2xl`}
              iconstyle={{ transform: `rotate(${wind.deg}deg)` }}
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

            <WeatherData
              label={"Sunrise"}
              icon={BsFillSunriseFill}
              iconclass={"text-[#FFD180] text-2xl"}
              value={`${toLocalTime(sys.sunrise)}`}
            />
            <WeatherData
              label={"Sunset"}
              icon={BsFillSunsetFill}
              iconclass={"text-[#FFB74D] text-2xl"}
              value={`${toLocalTime(sys.sunset)}`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
