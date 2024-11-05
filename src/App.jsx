import CurrentWeather from "./components/currentWeather/CurrentWeather.jsx";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchDropdown from "./components/SearchBar/SearchDropdown.jsx";
import "./app.css";
import ThemeToggler from "./components/themeToggler/ThemeToggler.jsx";
import { useGeoContext } from "./context/geoContext.jsx";

const App = () => {
  const { showResults } = useGeoContext();
  return (
    <div className="app-container">
      <ThemeToggler />
      <SearchBar />
      {showResults ? <SearchDropdown /> : null}
      <CurrentWeather />
    </div>
  );
};

export default App;
