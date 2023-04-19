import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
const Navlink = () => (
  <>
    <nav className="navbar">
      <div className="nav">
        <p>2023</p>
      </div>
      <div className="nav">
        <p>PopStats</p>
      </div>
      <div className="nav">
        <FaMicrophone />
        <FiSettings />
      </div>
    </nav>
  </>
);

export default Navlink;
