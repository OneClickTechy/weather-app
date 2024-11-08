import { useGeoContext } from "../../../context/geoContext.jsx";

const SearchBar = () => {
  const { cityname, setCityname, handleSearch } = useGeoContext();
  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center items-center md:gap-4"
    >
      <input
        spellCheck="false"
        type="text"
        id="cityName"
        name="cityName"
        value={cityname}
        onChange={(e) => setCityname(e.target.value)}
        placeholder="search city name"
        className=" lg:w-96 md:w-80 w-48"
      />
      <button type="submit" className="btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
