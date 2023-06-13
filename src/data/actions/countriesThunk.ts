import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { countryType } from "../types/country";
// import countries from "../../../example.json";

export const fetchCountries = createAsyncThunk<
  countryType[],
  undefined,
  {
    rejectValue: { message: string } | AxiosError | any;
  }
>("users/fetchByIdStatus", async (_, { rejectWithValue }) => {
  try {
    const res = await axios("https://restcountries.com/v3.1/all");
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
