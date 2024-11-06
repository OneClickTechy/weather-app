import { useGeoContext } from "../../context/geoContext";
import Logo from "./logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import SearchDropdown from "./SearchBar/SearchDropdown";
import ThemeToggler from "./themeToggler/ThemeToggler";

const Header = () => {
  const { showResults } = useGeoContext();
  return (
    <header className="sticky top-0 left-0 flex  justify-center items-center p-4 flex-row flex-wrap gap-2 bg-surface shadow-lg shadow-shadow">
      <Logo />
      <ThemeToggler />
      <div className="">
        <SearchBar />
        {showResults ? <SearchDropdown /> : null}
      </div>
    </header>
  );
};

export default Header;
