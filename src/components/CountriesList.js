/* prettier-ignore */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { getCountries } from '../redux/countriesSlice';

const CountriesList = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const { countriesList, isLoading } = useSelector((store) => store.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredCountries = countriesList.filter(({ name }) => {
    const countryName = name.common.toLowerCase();
    const query = searchQuery.toLowerCase();
    return countryName.includes(query);
  });

  if (isLoading) {
    return <h2>Loading data...Please wait!</h2>;
  }

  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search by country name..."
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
      <div className="container">
        {filteredCountries.map((country) => (
          <div key={country.flag} className="country">
            <Link to={`details/${country.flag}`}>
              <FaRegArrowAltCircleRight />
            </Link>
            <img src={country.flags.png} alt={country.flags.alt} />
            <p>{country.name.common}</p>
            <p>{country.population}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountriesList;
