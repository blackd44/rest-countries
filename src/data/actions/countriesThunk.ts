import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import countries from "../../../example.json";

export const fetchCountries = createAsyncThunk(
  "users/fetchByIdStatus",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios("https://restcountries.com/v3.1/all");
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
