// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const appid = import.meta.env.VITE_WEATHER_API_KEY;
export const currentWeatherApi = createApi({
  reducerPath: "currentWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon }) => `?lat=${lat}&lon=${lon}&appid=${appid}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = currentWeatherApi;
