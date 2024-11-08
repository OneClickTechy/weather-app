import { useGeoContext } from "../../context/geoContext";
import UnitToggler from "../header/unitToggler/UnitToggler";
import LoadingBtn from "../LoadingBtn";
import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";
import HourlyWeather from "./hourlyWeather/HourlyWeather";

const Main = () => {
  const {
    currentWeatherData,
    currentWeatherError,
    isCurrentWeatherLoading,
    forecastData,
    forecastError,
    isForecastLoading,
    hourlyData,
    hourlyError,
    isHourlyLoading,
  } = useGeoContext();

  const hourlyWeatherData = hourlyData?.hourly?.slice(0, 9) || [];

  return (
    <main className="flex-1 grid gap-4 p-4 ">
      {!currentWeatherData &&
        !isCurrentWeatherLoading &&
        !currentWeatherError && (
          <div className=" text-4xl font-semibold col-start-1 col-end-[-1]  flex justify- items-center">
            <h1 className="text-center w-full">Search any city name</h1>
          </div>
        )}
      {isCurrentWeatherLoading && <LoadingBtn />}

      {currentWeatherError && <div>{`Error: ${currentWeatherError}`}</div>}
      {currentWeatherData ? (
        <>
          <UnitToggler />
          <CurrentWeather />
        </>
      ) : null}

      {isHourlyLoading && <p>Loading....</p>}
      {hourlyError && <p>{`Error: ${hourlyError}`}</p>}
      {hourlyData && hourlyWeatherData && hourlyWeatherData.length > 0 ? (
        <HourlyWeather data={hourlyWeatherData} />
      ) : null}

      {forecastError && <p>{`Error: ${forecastError}`}</p>}
      {isForecastLoading && <p>Loading....</p>}
      {forecastData ? <Forecast /> : null}

    </main>
  );
};

export default Main;
