import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavLink';

const SharedLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedLayout;
