import React from "react";
import "./NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <div class="container">
                  <a class="navbar-brand" href="#">
                     <img src={logo} alt="Logo" width="100" />
                  </a>
               </div>

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
               <div class="collapse navbar-collapse" id="navbarNav">
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
