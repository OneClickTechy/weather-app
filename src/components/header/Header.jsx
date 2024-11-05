import { useGeoContext } from "../../context/geoContext";
import Logo from "./logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import SearchDropdown from "./SearchBar/SearchDropdown";
import ThemeToggler from "./themeToggler/ThemeToggler";

const Header = () => {
  const { showResults } = useGeoContext();
  return (
    <header className="relative flex justify-center items-center p-4 flex-row md:flex-col flex-wrap gap-2">
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
