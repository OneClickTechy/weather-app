import { useRef } from "react";
import { useGeoContext } from "../../../context/geoContext";
import useOutsideClick from "../../../hooks/useOutsideClick";

const SearchDropdown = () => {
  const dropdownRef = useRef(null);
  const {
    geoData,
    geoError,
    isGeoLoading,
    handleSearchResClick,
    showResults,
    setShowResults,
  } = useGeoContext();

  useOutsideClick(dropdownRef, () => setShowResults(!showResults));

  //   console.log({ geoData, geoError, isGeoLoading });
  //   console.log(typeof geoData);

  if (geoError) return <div className="">{geoError}</div>;
  if (isGeoLoading)
    return <div className="text-4xl text-[red]/60">{isGeoLoading}</div>;
  if (!geoError && !isGeoLoading && geoData && geoData.length === 0)
    return <div className="text-4xl">City not found</div>;
  return (
    <div className="absolute top-auto left-auto bg-surface rounded-lg p-2 leading-8 shadow-xl shadow-[gray]/25">
      <ul className="divide-y-2 divide-background" ref={dropdownRef}>
        {showResults &&
          geoData &&
          geoData.length > 0 &&
          geoData.map((item, index) => (
            <li
              className="cursor-pointer"
              key={index}
              onClick={() => handleSearchResClick(item.lat, item.lon)}
            >{`${item.name}, ${item.state}, ${item.country}`}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchDropdown;
