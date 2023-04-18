import React from 'react';
import { Link } from 'react-router-dom';
import CountriesList from '../components/CountriesList';

const Home = () => (
  <div>
    <Link to="/details">Details</Link>
    <CountriesList />
  </div>
);

export default Home;
