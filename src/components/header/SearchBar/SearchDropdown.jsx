import { useGeoContext } from "../../../context/geoContext";



const SearchDropdown = () => {
  const { geoData, geoError, isGeoLoading, handleSearchResClick, showResults } =
    useGeoContext();
  //   console.log({ geoData, geoError, isGeoLoading });
  //   console.log(typeof geoData);

  if (geoError) return <div className="container">{geoError}</div>;
  if (isGeoLoading) return <div className="container">{isGeoLoading}</div>;
  if (!geoError && !isGeoLoading && geoData && geoData.length === 0)
    return <div className="container">City not found</div>;
  return (
    <div className="container search-dropdown-container">
      <ul className="search-list">
        {showResults &&
          geoData &&
          geoData.length > 0 &&
          geoData.map((item, index) => (
            <li
              className=""
              key={index}
              onClick={() => handleSearchResClick(item.lat, item.lon)}
            >{`${item.name}, ${item.state}, ${item.country}`}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchDropdown;
