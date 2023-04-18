import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { getCountries } from '../redux/countriesSlice';

const DetailsList = () => {
  const dispatch = useDispatch();
  const { countriesList, isLoading } = useSelector((store) => store.countries);
  const { countryId } = useParams();
  const country = countriesList.find((country) => country.flag === countryId);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading details...Please wait!</div>;
  }

  return (
    <div key={country.flag} className="details">
      <Link to="/">
        <FaRegArrowAltCircleLeft />
      </Link>
      <img src={country.flags.png} alt={country.flags.alt} />
      <p>
        Country :
        <span className="desc">{country.name.common}</span>
      </p>
      <p>
        Capital :
        <span className="desc">{country.capital}</span>
      </p>
      <p>
        Population :
        <span className="desc">
          {' '}
          {country.population}
        </span>
      </p>
      <p>
        Status :
        <span className="desc">{country.status}</span>
      </p>
      <p>
        Region :
        <span className="desc">{country.region}</span>
      </p>
      <p>
        Sub-region :
        <span className="desc">{country.subregion}</span>
      </p>
      <p>
        Area :
        <span className="desc">{country.area}</span>
      </p>
      <p>
        Timezones :
        <span className="desc">{country.timezones}</span>
      </p>
      <p>
        Continent :
        <span className="desc">{country.continents}</span>
      </p>
      <p>
        Flag description :
        <span className="desc">
          {' '}
          {country.flags.alt}
        </span>
      </p>
      <p>
        Start of Week :
        <span className="desc">{country.startOfWeek}</span>
      </p>
      <p>
        Car side :
        <span className="desc">
          {' '}
          {country.car.side}
        </span>
      </p>
    </div>
  );
};

export default DetailsList;
