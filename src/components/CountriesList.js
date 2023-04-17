import React, { useEffect } from "react";
import Countries from "./Countries";
import { getCountries } from "../redux/countriesSlice";
import { useDispatch, useSelector } from "react-redux";

const CountriesList = () => {
  const dispatch = useDispatch();
  const { countriesList, isLoading } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading missions...Please Wait!</div>;
  }
  return (
    <div>
      {countriesList.map((country) => (
        <Countries
          key={country.ccn3}
          name={country.common}
          pop={country.population}
          src={country.svg}
          alt={country.alt}
        />
      ))}
    </div>
  );
};

export default CountriesList;
