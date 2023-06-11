import React from "react";
import "./HeroSection.css";


const HeroSection = () => {
   return (
      <header className="container p-4 my-2 rounded-3 header">
        
            <h1 className="display-5 fw-bold">
               Unlocking the Power of Digital Innovation
            </h1>
            <p className="col-md-8 lead">
               Are you ready to take your online presence to new heights? Look
               no further! Our exceptional team of web developers is here to
               transform your ideas into stunning digital experiences that
               captivate your audience. 
               </p>
               <p className="col-md-8 lead">
               Why Choose Us? Unparalleled Expertise:
               Our team comprises seasoned web developers who possess a deep
               understanding of the latest industry trends, frameworks, and
               technologies. We stay ahead of the curve to ensure your website
               is not just cutting-edge, but also optimized for performance and
               scalability.
               </p>
    
            <button className="btn btn-dark btn-lg" type="button">
               press
            </button>
      
      </header>
   );
};

export default HeroSection;
