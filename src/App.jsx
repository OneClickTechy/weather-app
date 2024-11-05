import { useGeoContext } from "./context/geoContext.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

const App = () => {
  const { showResults } = useGeoContext();
  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
