import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './redux/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
