import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const appid = import.meta.env.VITE_WEATHER_API_KEY;
export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/geo/1.0/direct",
  }),
  endpoints: (builder) => ({
    getGeoData: builder.query({
      query: (cityname) => `?q=${encodeURI(cityname)}&limit=5&appid=${appid}`,
    }),
  }),
});

export const { useGetGeoDataQuery } = geoApi;
