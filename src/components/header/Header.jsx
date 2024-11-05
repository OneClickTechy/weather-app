import { useGeoContext } from "../../context/geoContext";
import SearchBar from "./SearchBar/SearchBar";
import SearchDropdown from "./SearchBar/SearchDropdown";
import ThemeToggler from "./themeToggler/ThemeToggler";

const Header = () => {
  const { showResults } = useGeoContext();
  return (
    <header>
      <ThemeToggler />
      <SearchBar />
      {showResults ? <SearchDropdown /> : null}
    </header>
  );
};

export default Header;
