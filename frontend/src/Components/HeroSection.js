import React from "react";

import "./HeroSection.css"
import robotHead from "../images/robotHead.webp"

const HeroSection = () => {
  return (
    <div className="container-fluid header px-0">
      <div className="row g-0 white-background" >
        <div className="col-lg-6">
          <div className="content-wrapper hero-info text-black p-4">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Building Our Dreams, Forging Our Paths
            </h1>
            <p className="fw-semibold">
              Welcome to a community of passionate novice web developers who believe in the power of independence and self-driven experience. We are a group of dedicated individuals united by our common goal to build innovative projects while having fun along the way. In a world where experience is hard to come by, we take matters into our own hands and pave our own paths towards success.
            </p>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-dark btn-lg px-4">
                See Our Work
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="white-background">
            <img
              src={robotHead}
              className="d-block w-100"
              alt="blue sky and mountain top"
              loading="lazy"
              style={{ maxHeight: '1200px', width: '100%'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};




export default HeroSection;