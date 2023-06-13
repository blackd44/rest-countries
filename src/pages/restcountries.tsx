import type {} from "@reduxjs/toolkit";
import { useEffect, FC } from "react";
import { fetchCountries } from "../data/actions/countriesThunk";
import { useAppDispatch, useAppSelector } from "../data/hooks";

const RestCountries: FC = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {JSON.stringify(country, undefined, 4)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestCountries;
