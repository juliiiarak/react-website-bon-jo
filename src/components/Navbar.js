import React from 'react'
import Logo from "../assets/cakeLogo.png";
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
        <img src={Logo} /> <h1 className="Title">______BON_APETTIT_JO</h1>
        </div>
        
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/contact"> Contact </Link>
        </div>
    </div>
  );
}

export default Navbar