import React from 'react';
import { useParams } from 'react-router-dom';
import countriesArr from '../countries.json';
import axios from 'axios';

const CountryDetails = () => {
  const [foundCountry, setfoundCountry] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => {
        const foundCountry = res.data.alpha3Code;
        setFoundCountry(foundCountry);
      });
  }, []);

//   const { alpha3Code } = useParams();

// //   let foundCountry = countriesArr.find((country) => {
// //     return country.alpha3Code === alpha3Code;
// //   });

//   return (
//     <div className="details">
//       <h3>{foundCountry.name.official}</h3>
//       <p>{foundCountry.capital}</p>
//       <p>{foundCountry.area}</p>
//       <p>
//         {foundCountry.borders.map((border) => {
//           return <li>{border}</li>;
//         })}
//       </p>
//     </div>
//   );
};

export default CountryDetails;
