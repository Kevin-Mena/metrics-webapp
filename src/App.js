import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Error from './pages/Error';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="details/:countryId" element={<Details />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
