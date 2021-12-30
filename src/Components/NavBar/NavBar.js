import React from "react";
import "../NavBar/Navbar.css";
import "../../App.css"
import logo from '../../Assets/image-removebg-preview (33).png'

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
      <img src={logo} alt="logo" />
        <h5>FitClub Sarah</h5>
      </div>
      <div className="list">
        <a href="#">Contents</a>
        <a href="#">Programs</a>
        <a href="#">Appointments</a>
        <a href="#">Live</a>
        <a href="#">Contact</a>
      </div>
      <div className="buttons">
        <button className="btn btn-md text-white">Become Member</button>
      </div>
    </nav>
  );
};

export default NavBar;
