import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from './Countries';
import { getCountries } from '../redux/countriesSlice';

const CountriesList = () => {
  const dispatch = useDispatch();
  const { countriesList, isLoading } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }
  return (
    <div>
      {countriesList.map((country) => (
        <Countries
          key={country.ccn3}
          name={country.name.common}
          pop={country.population}
          src={country.svg}
          alt={country.flags.alt}
        />
      ))}
    </div>
  );
};

export default CountriesList;
