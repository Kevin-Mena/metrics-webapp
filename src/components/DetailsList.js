import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { getCountries } from "../redux/countriesSlice";

const DetailsList = () => {
  const dispatch = useDispatch();
  const { countriesList, isLoading } = useSelector((store) => store.countries);
  const { countryId } = useParams();
  const country = countriesList.find((country) => country.flag === countryId);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading data...Please wait!</div>;
  }

  return (
    <div key={country.flag}>
      <Link to="/">
        <FaRegArrowAltCircleLeft />
      </Link>
      <img src={country.flags.png} alt={country.flags.alt} />
      <p>Country :{country.name.common}</p>
      <p>Capital :{country.capital}</p>
      <p>Population :{country.population}</p>
      <p>Status :{country.status}</p>
      <p>Region :{country.region}</p>
      <p>Sub-region :{country.subregion}</p>
      <p>Area :{country.area}</p>
      <p>Timezones :{country.timezones}</p>
      <p>Continent :{country.continents}</p>
      <p>Flag description :{country.flags.alt}</p>
      <p>Start of Week :{country.startOfWeek}</p>
      <p>Car side :{country.car.side}</p>
    </div>
  );
};

export default DetailsList;
