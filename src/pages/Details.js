import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailsList from '../components/DetailsList';

const DetailsPage = () => {
  const { countryId } = useParams();

  return (
    <div>
      <DetailsList selectedCountry={countryId} />
      <Link to="/">Home</Link>
    </div>
  );
};

export default DetailsPage;
