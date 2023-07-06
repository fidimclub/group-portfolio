import React from "react";
import CardsCarousel from "./CardsCarousel";
import "./AboutUs.css";

const AboutUs = () => {
   return (
      <div className="about-us container-fluid">
         <div className="row d-flex justify-content-center">
            <div className="col-md-6" style={{maxWidth:"30rem"}}>
               <CardsCarousel />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
