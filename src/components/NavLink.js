import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Navlink = () => (
  <>
    <nav className="navbar">
      <div className="nav">
        <p>2023</p>
      </div>
      <div className="nav">
        <p className="info">
          <span className="world">World</span>
          <span className="pop">Pop</span>
        </p>
      </div>
      <div className="nav-last">
        <FaMicrophone className="mic" style={{ marginRight: '10px' }} />
        <FiSettings />
      </div>
    </nav>
  </>
);

export default Navlink;
