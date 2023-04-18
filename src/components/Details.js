import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import BsArrowLeftCircle from "react-icons";

const Details = ({
  id,
  name,
  cap,
  pop,
  src,
  alt,
  reg,
  subReg,
  area,
  timeZones,
  cont,
  sow,
  carSide,
  stat,
}) => (
  <div key={id}>
    {/* <BsArrowLeftCircle /> */}
    <img src={src} alt={alt} />
    <p>
      Country :
      {name}
    </p>
    <p>
      Capital :
      {cap}
    </p>
    <p>
      Population :
      {pop}
    </p>
    <p>
      Status :
      {stat}
    </p>
    <p>
      Region :
      {reg}
    </p>
    <p>
      Sub-region :
      {subReg}
    </p>
    <p>
      Area :
      {area}
    </p>
    <p>
      Timezones :
      {timeZones}
    </p>
    <p>
      Continent :
      {cont}
    </p>
    <p>
      Flag description :
      {alt}
    </p>
    <p>
      Start of Week :
      {sow}
    </p>
    <p>
      Car side :
      {carSide}
    </p>
  </div>
);
Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pop: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cap: PropTypes.string.isRequired,
  reg: PropTypes.string.isRequired,
  subReg: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  cont: PropTypes.string.isRequired,
  timeZones: PropTypes.string.isRequired,
  sow: PropTypes.string.isRequired,
  carSide: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default Details;
