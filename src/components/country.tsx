import { countryType } from "../data/types/country";
import { getLanguage } from "../helpers/language";

const Country = ({ country }: { country: countryType }) => {
  const { name, flags, capital, translations, ...others } = country;

  return (
    <li className="country">
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
              <small className="grey">{capital && capital.join(", ")}</small>
            </div>
          </div>
        </div>
      </label>
      <div className="content">
        <h3>{name.official}</h3>
        <hr />
        <div>
          {/* native name */}
          {name.nativeName && (
            <div>
              <h4>Native Names</h4>
              <div>
                {Object.keys(name.nativeName).map((key) => (
                  <div key={key}>
                    <strong>{getLanguage(key)}:</strong>
                    <div>
                      <p>
                        <span className="grey">Official name:</span>{" "}
                        <span>{name.nativeName[key].official}</span>
                      </p>
                      <p>
                        <span className="grey">Common name:</span>{" "}
                        <span>{name.nativeName[key].common}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* <hr /> */}

          {/* translations */}
          {translations && (
            <div>
              <h4>Translations</h4>
              <div>
                {Object.keys(translations).map((key) => (
                  <details key={key}>
                    <summary>
                      <strong className="grey">{getLanguage(key)}:</strong>
                    </summary>
                    <div>
                      <p>
                        <span className="grey">Official name:</span>{" "}
                        <span>{translations[key].official}</span>
                      </p>
                      <p>
                        <span className="grey">Common name:</span>{" "}
                        <span>{translations[key].common}</span>
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* <p>{JSON.stringify(others, undefined, 4)}</p> */}
      </div>
    </li>
  );
};

export default Country;
