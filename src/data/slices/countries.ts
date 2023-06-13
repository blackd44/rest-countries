import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../actions/countriesThunk";

export interface CountriesState {
  name: {
    common: string;
    official: string;
  };
}

const initialState: CountriesState[] = [];

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
