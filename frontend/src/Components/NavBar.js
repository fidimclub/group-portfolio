import React from "react";
import "./NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-md p-1">
            <div className="container-fluid">
               
                  <a class="navbar-brand navbar-logo" href="#">
                     <img src={logo} alt="Logo" height="90" />
                  </a>
        
               <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link active" href="#home">
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#about">
                           About Us
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#portfolio">
                           Projects
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#contact">
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default NavBar;
