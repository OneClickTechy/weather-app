// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,alerts,hourly&appid={API key}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const appid = import.meta.env.VITE_WEATHER_API_KEY;
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon }) =>
        `/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`,
    }),
    getForecast: builder.query({
      query: ({ lat, lon }) =>
        `/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts,hourly&appid=${appid}`,
    }),
    getHourlyWeather: builder.query({
      query: ({ lat, lon }) =>
        `3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${appid}`,
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
  useGetHourlyWeatherQuery,
} = weatherApi;
