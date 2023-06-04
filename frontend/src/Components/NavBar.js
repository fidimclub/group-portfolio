import React from 'react'
import "./NavBar.css"
import logo from "../images/logo.png"

const NavBar = () => {
  return (
<>
<nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-image" />
        </a>
        </div>
        <ul className="navbar-links">
        <li className="navbar-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#portfolio">Projects</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

 
  <div id="home">
   
  </div>

  <div id="about">

  </div>

  <div id="portfolio">

  </div>

  <div id="contact">
   
  </div>
  </>


  )
}

export default NavBar
