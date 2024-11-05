import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { geoApi } from "./services/geoSlice";
import { weatherApi } from "./services/weatherSlice";

export const store = configureStore({
  reducer: {
    [geoApi.reducerPath]: geoApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(geoApi.middleware, weatherApi.middleware),
});

setupListeners(store.dispatch);
