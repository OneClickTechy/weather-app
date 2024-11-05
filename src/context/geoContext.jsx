import { createContext, useContext, useEffect, useState } from "react";
import { useGetGeoDataQuery } from "../app/services/geoSlice";
import { useGetCurrentWeatherQuery } from "../app/services/currentWeatherSlice";

const geoContext = createContext(null);

export const GeoProvider = ({ children }) => {
  const [cityname, setCityname] = useState("");
  const [searchcity, setSearchCity] = useState("");

  const [geoCoords, setGeoCoords] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCity(cityname);
    setShowResults(true);
  };
  // console.log(geoCoords);
  const handleSearchResClick = (lat, lon) => {
    setGeoCoords({
      lat,
      lon,
    });
    setCityname("");
    setSearchCity("");
    setShowResults(false);
  };
  const {
    data: geoData,
    error: geoError,
    isLoading: isGeoLoading,
  } = useGetGeoDataQuery(searchcity, {
    skip: !searchcity,
  });
  const { lat, lon } = geoCoords || {};
  const {
    data: currentWeatherData,
    error: currentWeatherError,
    isLoading: isCurrentWeatherLoading,
  } = useGetCurrentWeatherQuery({ lat, lon }, { skip: !lat || !lon });
  

  const contextValue = {
    cityname,
    setCityname,
    searchcity,
    setSearchCity,
    geoData,
    geoError,
    isGeoLoading,
    handleSearch,
    handleSearchResClick,
    showResults,
    currentWeatherData,
    currentWeatherError,
    isCurrentWeatherLoading,
  };
  return (
    <geoContext.Provider value={contextValue}>{children}</geoContext.Provider>
  );
};

export const useGeoContext = () => {
  const context = useContext(geoContext);
  if (!context)
    throw new Error("useGeoContext must be used within a GeoProvider");
  return context;
};