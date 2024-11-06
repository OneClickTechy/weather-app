import { useGeoContext } from "../../../context/geoContext";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { toLocalDayDate } from "../../../utils/time";

const Forecast = () => {
  const { unit, forecastData } = useGeoContext();
  const { daily } = forecastData || [];
  console.log(daily ? daily[0]?.weather[0]?.icon : null);
  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${Math.round(kelvintocelcious(temp))} °C`
      : `${Math.round(kelvintoFahrenheit(temp))} °F`;

  return (
    <div className="w-full col-start-6 col-end-[-1] bg-surface p-4 rounded-2xl shadow-xl shadow-shadow">
      {forecastData && daily && (
        <>
          <h1 className="text-4xl text-center font-bold ">8 day forecast</h1>
          <ul className=" divide-y-2 divide-shadow sm:text-base text-xs text-nowrap">
            {daily.map((item, index) => (
              <li key={index} className="flex justify-evenly items-center">
                {toLocalDayDate(item.dt)}
                <figure className="flex justify-evenly items-center">
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}.png`}
                    alt={item.weather?.[0]?.description || "weather icon"}
                    className=""
                  />
                  <figcaption>
                    <span>{getTemperature(item.temp.max)}</span> /
                    <span> {getTemperature(item.temp.min)}</span>
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
