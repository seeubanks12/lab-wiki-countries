import React from 'react';
// import countriesArr from '../countries.json';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountriesList = () => {
  const [allCountries, setAllCountries] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => {
        const countryList = res.data;
        setAllCountries(countryList)
      });
  }, []);

  return (
    <div>
      <h3>All Countries</h3>
      
      {allCountries.length > 0 && allCountries.map((country) => {
        console.log(country);
        return (
          <div>
            <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
