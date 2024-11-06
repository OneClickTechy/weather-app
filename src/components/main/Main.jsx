import { useGeoContext } from "../../context/geoContext";
import UnitToggler from "../header/unitToggler/UnitToggler";
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
    <main className="grow min-h-screen w-full rounded-lg p-4 lg:grid lg:grid-cols-8 lg:grid-flow-row-dense flex flex-col justify-center sm:items-start justify-items-center content-center gap-2">
      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && (
          <div className="text-4xl font-semibold col-start-1 col-end-[-1]  flex justify- items-center">
            <h1 className="text-center w-full">Search any city name</h1>
          </div>
        )}
      {isCurrentWeatherLoading && <LoadingBtn />}

      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}
      {currentWeatherData ? 
      <>
      <UnitToggler />
      <CurrentWeather /> 
      </>
      : null}

      {forecastError && <p>{`Error: ${forecastError}`}</p>}
      {isForecastLoading && <p>Loading....</p>}
      {forecastData ? <Forecast /> : null}
    </main>
  );
};

export default Main;
