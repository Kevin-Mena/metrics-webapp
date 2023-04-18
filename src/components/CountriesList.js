import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { getCountries } from "../redux/countriesSlice";

const CountriesList = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { countriesList, isLoading } = useSelector((store) => store.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countriesList.filter(({ name }) =>
    name.common.includes(searchQuery)
  );

  if (isLoading) {
    return <div>Loading data...Please wait!</div>;
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
        <div key={country.flag}>
          <Link to={`details/${country.flag}`}>
            <FaRegArrowAltCircleRight />
          </Link>
          <img src={country.flags.png} alt={country.flags.alt} />
          <p>Country :{country.name.common}</p>
          <p>Population :{country.population}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
