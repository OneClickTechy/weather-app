// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const appid = import.meta.env.VITE_WEATHER_API_KEY;
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon }) => `/weather?lat=${lat}&lon=${lon}&appid=${appid}`,
    }),
    getForecast: builder.query({
      query: ({ lat, lon }) =>
        `/forecast/hourly?lat=${lat}&lon=${lon}&appid=${appid}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = weatherApi;
