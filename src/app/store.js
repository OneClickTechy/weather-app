import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { geoApi } from "./services/geoSlice";
import { currentWeatherApi } from "./services/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    [geoApi.reducerPath]: geoApi.reducer,
    [currentWeatherApi.reducerPath]: currentWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      geoApi.middleware,
      currentWeatherApi.middleware
    ),
});

setupListeners(store.dispatch);
