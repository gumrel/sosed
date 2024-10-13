import { configureStore } from "@reduxjs/toolkit";
import geoReducer from "../Reducers/geoReducer";

export const store = configureStore({
  reducer: {
    geo: geoReducer,
  },
  devTools: true,
});
