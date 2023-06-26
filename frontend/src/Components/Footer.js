import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
   return (
      <footer className="container-fluid pt-5 px-5" style={{backgroundColor:"#e9ebdd"}}>
         <div className="row pb-5 justify-content-md-evenly">
            <div className="order-last order-md-first col-md-2 col-sm-12">
               <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "100%", height: "auto" }}
               />
            </div>

            <div className="col-md-3 col-sm-12 mb-4">
               <form className="" style={{maxWidth: "30rem"}}>
                  <label className="form-label" htmlFor="email"><h5>Get In Touch</h5></label>
                  <input
                     id="email"
                     type="email"
                     className="form-control"
                     placeholder="email address"
                  />
                  <button type="submit" className="btn btn1 px-3 py-2 mt-2">
                     Send
                  </button>
               </form>
            </div>

            <div className="col-md-3 col-sm-12 mb-3">
               <h5>Members:</h5>
               <ul className="list-unstyled">
                  <li>Anthony Barnett</li>
                  <li>David Palacios</li>
                  <li>Seth Zwerling</li>
                  <li>Peter Huynh</li>
                  <li>Seren Kapanoglu</li>
                  <li>Zena Creps</li>
               </ul>
            </div>
         </div>

         <div className="text-center p-3">
            Copyright &copy; 2023 <span>Privacy Policy</span>
         </div>
      </footer>
   );
};

export default Footer;
