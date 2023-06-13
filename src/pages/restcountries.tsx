import type {} from "@reduxjs/toolkit";
import { useEffect, FC, useCallback } from "react";
import { fetchCountries } from "../data/actions/countriesThunk";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import NetworkError from "./networkError";

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
            {countries.map((country) => {
              const { name, flags, ...others } = country;
              return (
                <li key={name.official} className="country">
                  <input
                    className="list-input"
                    // type="radio"
                    type="checkbox"
                    name="accordion-1"
                    id={name.official}
                  />
                  <label htmlFor={name.official}>
                    <div className="title">
                      <div>
                        <img alt={flags.alt} src={flags.svg} loading="lazy" />
                        <div>
                          <h2>{name.common}</h2>
                          <small className="grey">{name.official}</small>
                        </div>
                      </div>
                    </div>
                  </label>
                  <div className="content">
                    {JSON.stringify(others, undefined, 4)}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default RestCountries;
