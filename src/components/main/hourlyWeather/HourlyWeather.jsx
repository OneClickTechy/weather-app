import { useGeoContext } from "../../../context/geoContext";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { toLocalTime } from "../../../utils/time";

const HourlyWeather = ({ data }) => {
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${kelvintocelcious(temp)} °C`
      : `${kelvintoFahrenheit(temp)} °F`;
  console.log(data);
  const { unit } = useGeoContext();
  console.log(unit);
  return (
    <ul className="flex sm:justify-center gap-2 sm:items-center md:gap-4 bg-surface rounded-2xl shadow-xl shadow-shadow p-4 md:row-start-2 md:row-end-2 lg:place-self-end lg:self-end lg:justify-self-center lg:col-start-1 lg:col-end-6 overflow-x-auto text-xs">
      {data &&
        data.length &&
        data.map((list, index) => (
          <li key={index}>
            <p>{toLocalTime(list.dt)}</p>

            <img
              src={`http://openweathermap.org/img/wn/${list.weather?.[0]?.icon}.png`}
              alt={list.weather?.[0]?.description || "weather icon"}
              className="shadow-2xl rounded-md border border-[white] bg-accent"
            />
            <p>{getTemperature(list.temp)}</p>
          </li>
        ))}
    </ul>
  );
};

export default HourlyWeather;
