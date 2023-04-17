import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  countriesList: [],
  isLoading: true,
};
const API_URL = "https://nationinfo.p.rapidapi.com/api/country/all/";

const API_KEY = "582485296fmsh0738c4bec33958bp1ad7d4jsne0b6327721b6";

export const getCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (thunkAPI) => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          "X-RapidAPI-Key": API_KEY,
        },
      });
      if (!response.ok) {
        throw new Error("An Error occurred...!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("An Error occurred...!");
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: {
    [getCountries.pending]: (state) => ({ ...state, isLoading: true }),

    [getCountries.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      countriesList: action.payload,
    }),

    [getCountries.rejected]: (state) => ({ ...state, isLoading: false }),
  },
});

export default countriesSlice.reducer;
