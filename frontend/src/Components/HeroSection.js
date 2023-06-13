import React from "react";
import "./HeroSection.css";
import robotHead from "../images/robot-head.webp"

const HeroSection = () => {
   return (
      <div class="container-fluid header px-4 py-5 mb-5">
         <div class="row flex-lg-row-reverse align-items-center g-5 mx-2">
            <div class="col-12 col-lg-6">
               <img
                  src={robotHead}
                  class="d-block mx-lg-auto img-fluid"
                  alt="blue sky and mountain top"
                  width="700"
                  height="500"
                  loading="lazy"
               />
            </div>
            <div class="col-lg-6">
               <h1 class="display-5 fw-bold lh-1 mb-3">
                  Unlocking the Power of Digital Innovation
               </h1>
               <p class="lead">
                  Are you ready to take your online presence to new heights?
                  Look no further! Our exceptional team of web developers is
                  here to transform your ideas into stunning digital experiences
                  that captivate your audience.
               </p>
               <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                     type="button"
                     class="btn btn-outline-secondary btn-lg px-4"
                  >
                     See Our Work
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};






export default HeroSection;