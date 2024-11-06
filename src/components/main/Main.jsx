import { useGeoContext } from "../../context/geoContext";
import LoadingBtn from "../LoadingBtn";
import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";

const Main = () => {
  const {
    currentWeatherData,
    currentWeatherError,
    isCurrentWeatherLoading,
    forecastData,
    forecastError,
    isForecastLoading,
  } = useGeoContext();
  console.log(currentWeatherData);
  return (
    <main className="grow min-h-screen w-full rounded-lg p-4 lg:grid lg:grid-cols-8 lg:grid-flow-row-dense flex flex-col justify-center items-center gap-4">
      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && (
          <div className="text-2xl flex justify- items-center">
            Search any city name
          </div>
        )}
      {isCurrentWeatherLoading && <LoadingBtn />}

      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}
      {currentWeatherData ? <CurrentWeather /> : null}

      {forecastError && <p>{`Error: ${forecastError}`}</p>}
      {isForecastLoading && <p>Loading....</p>}
      {forecastData ? <Forecast /> : null}
    </main>
  );
};

export default Main;
