import { useGeoContext } from "./context/geoContext.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  const { showResults } = useGeoContext();
  return (
    <div className="transition-colors duration-300 ease-in-out bg-background text-text-primary flex flex-col w-full min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
