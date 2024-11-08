import { useGeoContext } from "../../../context/geoContext";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { toLocalDayDate } from "../../../utils/time";

const Forecast = () => {
  const { unit, forecastData } = useGeoContext();
  const { daily } = forecastData || [];
  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${Math.round(kelvintocelcious(temp))} °C`
      : `${Math.round(kelvintoFahrenheit(temp))} °F`;

  return (
    <div className="bg-background lg:row-start-2 lg:row-end-2  lg:col-start-2 lg:col-end-2">
      {forecastData && daily && (
        <>
          <h1 className=" text-4xl text-center font-bold mb-2">8 day forecast</h1>
          <ul className="lg:min-w-96 md:m-8 bg-surface xl:text-sm lg:text-base divide-y-2 divide-shadow sm:text-base text-xs text-nowrap">
            {daily.map((item, index) => (
              <li key={index} className="flex justify-evenly items-center">
                {toLocalDayDate(item.dt)}
                <figure className="flex justify-evenly items-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}.png`}
                    alt={item.weather?.[0]?.description || "weather icon"}
                    className=""
                  />
                  <figcaption>
                    <span title="max temperature">{getTemperature(item.temp.max)}</span> /
                    <span title="min temperature"> {getTemperature(item.temp.min)}</span>
                  </figcaption>
                </figure>
                <p>{item.weather?.[0]?.description || ""}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Forecast;
