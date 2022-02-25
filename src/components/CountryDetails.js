import React from 'react';
import { useParams } from 'react-router-dom';
// import countriesArr from '../countries.json';
import axios from 'axios';

const CountryDetails = () => {
  const [foundCountry, setFoundCountry] = React.useState(null);

  const { alpha3Code } = useParams();
  React.useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((res) => {
        const newFoundCountry = res.data;
        setFoundCountry(newFoundCountry);
        console.log(foundCountry);
      });
  }, [alpha3Code]);

  //   let foundCountry = countriesArr.find((country) => {
  //     return country.alpha3Code === alpha3Code;
  //   });

  return foundCountry ? (
    <div className="details">
      <h3>{foundCountry.name.official}</h3>
      <p>{foundCountry.capital}</p>
      <p>{foundCountry.area}</p>
      <p>
        {foundCountry.borders.map((border) => {
          return <li>{border}</li>;
        })}
      </p>
    </div>
  ) : (
    <div>
      <h1>Loading....</h1>
    </div>
  );
};
export default CountryDetails;
