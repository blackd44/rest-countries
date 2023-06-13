import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../actions/countriesThunk";
import { countryType } from "../types/country";

const initialState: countryType[] = [];

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: initialState,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload
    });
  },
});

export default countriesSlice.reducer;
