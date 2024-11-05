import { useGeoContext } from "../../context/geoContext.jsx";

const SearchBar = () => {
  const { cityname, setCityname, handleSearch } = useGeoContext();
  return (
    <form onSubmit={handleSearch} className="container search-container">
      <input
        type="text"
        value={cityname}
        onChange={(e) => setCityname(e.target.value)}
        placeholder="search city name"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;