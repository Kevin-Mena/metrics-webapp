import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/countriesSlice";
import Details from "./Details";

const DetailsList = ({ selectedCountry }) => {
  const dispatch = useDispatch();

  const { countriesList, isLoading } = useSelector((store) => store.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  const filteredCountries = selectedCountry
    ? countriesList.filter((country) => country.flag === selectedCountry)
    : countriesList.slice(0, 1);

  return (
    <div>
      {filteredCountries.map((country) => (
        <Details
          key={country.flag}
          name={country.name.common}
          pop={country.population}
          src={country.flags.png}
          alt={country.flags.alt}
          cap={country.capital}
          reg={country.region}
          subReg={country.subregion}
          area={country.area}
          timeZones={country.timezones}
          cont={country.continents}
          sow={country.startOfWeek}
          carSide={country.car.side}
          stat={country.status}
        />
      ))}
    </div>
  );
};

export default DetailsList;
