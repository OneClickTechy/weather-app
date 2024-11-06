import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";

const Main = () => {
  return (
    <main className="grow w-full rounded-lg p-4 lg:grid lg:grid-cols-8 lg:grid-flow-row-dense flex flex-col justify-center items-center gap-4">
      <CurrentWeather />
      <Forecast />
    </main>
  );
};

export default Main;
