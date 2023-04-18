import React from 'react';
import PropTypes from 'prop-types';
// import BsArrowRightCircle from "react-icons";
const Countries = ({
  id, name, pop, src, alt,
}) => (
  <div key={id}>
    {/* <BsArrowRightCircle /> */}
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
Countries.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pop: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Countries;
