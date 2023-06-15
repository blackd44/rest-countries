import type {} from "@reduxjs/toolkit";
import { useEffect, FC, useCallback } from "react";
import { fetchCountries } from "../data/actions/countriesThunk";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import NetworkError from "./networkError";
import Country from "../components/country";

const RestCountries: FC = () => {
  const dispatch = useAppDispatch();
  const { countries, error, loading } = useAppSelector(
    (state) => state.countries
  );

  const fetch = useCallback(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (error.networkError) return <NetworkError />;

  return (
    <>
      <section>
        <div>
          <h2>Countries</h2>
          <button onClick={fetch} className="button inverse">
            Refresh
          </button>
        </div>
      </section>
      <section>
        {loading ? (
          <>Loading...</>
        ) : error.message ? (
          <p className="error">{error.message}</p>
        ) : (
          <ul>
            {countries.map((country) => (
              <Country key={country.name.official} country={country} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default RestCountries;
