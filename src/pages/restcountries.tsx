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
      <section>
        <h2>Countries</h2>
      </section>
      <section>
        <ul>
          {countries.map((country) => {
            const { name, flags, ...others } = country;
            return (
              <li key={name.official} className="country">
                <input
                  className="list-input"
                  type="radio"
                  // type="checkbox"
                  name="accordion-1"
                  id={name.official}
                />
                <label htmlFor={name.official}>
                  <div className="title">
                    <div>
                      <img alt={flags.alt} src={flags.svg} loading="lazy" />
                      <h2>{name.common}</h2>
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
      </section>
    </>
  );
};

export default RestCountries;
