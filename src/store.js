import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./redux/countriesSlice";
import detailsReducer from "./redux/detailsSlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    details: detailsReducer,
  },
});

export default store;
