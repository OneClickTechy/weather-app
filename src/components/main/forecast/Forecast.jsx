import { useGeoContext } from "../../../context/geoContext";
import { kelvintocelcious, kelvintoFahrenheit } from "../../../utils/kelvinto";
import { toLocalDayDate } from "../../../utils/time";

const Forecast = () => {
  const { unit, setUnit, forecastData, forecastError, isForecastLoading } =
    useGeoContext();
  //   console.log(forecastData, forecastError, isForecastLoading);
  const { daily } = forecastData || [];
  console.log(daily ? daily[0]?.weather[0]?.icon : null);
  // Unit conversion helper
  const getTemperature = (temp) =>
    unit === "Metric"
      ? `${Math.round(kelvintocelcious(temp))} °C`
      : `${Math.round(kelvintoFahrenheit(temp))} °F`;

  return (
    <div>
      {forecastError && <p>{`Error: ${forecastError}`}</p>}
      {isForecastLoading && <p>Loading....</p>}
      {forecastData && daily && (
        <>
          <h1>8-day forecast</h1>
          <ul className="">
            {daily.map((item, index) => (
              <li key={index}>
                {toLocalDayDate(item.dt)}
                <figure>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
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
