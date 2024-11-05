import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";

const Main = () => {
  return (
    <main className="grow flex items-start w-full justify-center rounded-lg p-4">
      <CurrentWeather />
      <Forecast />
    </main>
  );
};

export default Main;
