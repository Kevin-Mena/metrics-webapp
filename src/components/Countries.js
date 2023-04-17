import React from 'react';

const Countries = ({
  name, pop, src, alt,
}) => (
  <div>
    <h1>Countries</h1>
    <img src={src} alt={alt} />
    <p>
      Country :
      {name}
    </p>
    <p>
      Population :
      {pop}
    </p>
  </div>
);

export default Countries;
