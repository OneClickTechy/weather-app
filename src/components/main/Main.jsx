import CurrentWeather from "./currentWeather/CurrentWeather";
import Forecast from "./forecast/Forecast";

const Main = () => {
  return (
    <main className="grow w-full rounded-lg p-4 md:grid md:grid-cols-8 gap-4 grid-flow-row-dense">
      <CurrentWeather />
      <Forecast />
    </main>
  );
};

export default Main;
