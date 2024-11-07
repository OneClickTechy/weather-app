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
  return (<div className="bg-background">
    <h2 className=" text-2xl text-center text-text-primary font-semibold">Hourly Outlook</h2>
    <ul className="bg-surface flex flex-wrap justify-between p-4 gap-4">
      {data &&
        data.length &&
        data.map((list, index) => (
          <li key={index} className="flex flex-col justify-center items-center">
            <p className="text-text-secondary">{toLocalTime(list.dt)}</p>

            <img
              src={`http://openweathermap.org/img/wn/${list.weather?.[0]?.icon}.png`}
              alt={list.weather?.[0]?.description || "weather icon"}
              className="shadow-2xl rounded-md border border-[white] bg-accent"
            />
            <p>{getTemperature(list.temp)}</p>
          </li>
        ))}
    </ul>
    </div>
  );
};

export default HourlyWeather;
