import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from './Countries';
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

  const filteredCountries = countriesList.filter(({ name }) => name.common.includes(searchQuery));

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>WORLD COUNTRIES INFO</h1>
      <form>
        <input
          type="search"
          placeholder="Search by country name..."
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
      {filteredCountries.map((country) => (
        <Countries
          key={country.flag}
          name={country.name.common}
          pop={country.population}
          src={country.flags.png}
          alt={country.flags.alt}
          id={country.flag}
        />
      ))}
    </div>
  );
};

export default CountriesList;
