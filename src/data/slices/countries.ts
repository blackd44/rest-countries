import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "../actions/countriesThunk";
import { countryType } from "../types/country";

const initialState: countryType[] = [];

const initialError = {
  message: "",
  networkError: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    error: initialError,
    loading: true,
    countries: initialState,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = initialError;
      })
      .addCase(fetchCountries.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload.message === "Network Error") {
          state.error.message = payload.message;
          state.error.networkError = true;
        } else {
          // state.error = payload.
        }
        console.log(payload);
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = initialError;
        state.countries = payload;
      });
  },
});

export default countriesSlice.reducer;
