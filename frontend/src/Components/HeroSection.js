import React from "react";

import "./HeroSection.css"
import robotHead from "../images/robotHead.webp"

const HeroSection = () => {
  return (
    <div className="container-fluid header px-0 py-5">
      <div className="row g-0">
        <div className="col-lg-6" style={{ position: 'absolute' }}>
          <div
            className="content-wrapper text-black p-5"
            style={{
              position: 'absolute',
              top: '600px',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(199, 186, 149, 0.4)', // Semi-transparent white backdrop
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Building Our Dreams, Forging Our Paths
            </h1>
            <p className="lead">
              Welcome to a community of passionate novice web developers who believe in the power of independence and self-driven experience. We are a group of dedicated individuals united by our common goal to build innovative projects while having fun along the way. In a world where experience is hard to come by, we take matters into our own hands and pave our own paths towards success.
            </p>
            {/* <p className="lead">
              Join us and unlock the realm of endless possibilities, where creativity knows no bounds. Together, we embark on a journey of self-discovery and skill development, leveraging our collective knowledge and determination. From coding challenges to collaborative projects, we thrive in an environment that encourages exploration and experimentation.
            </p> */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-dark btn-lg px-4">
                See Our Work
              </button>
            </div>
          </div>
        </div>
        <div className="white-background">
          <img
            src={robotHead}
            className="d-block w-100"
            alt="blue sky and mountain top"
            loading="lazy"
            style={{ maxHeight: '1200px', width: '50%', marginLeft: '400px'}}
          />
        </div>

      </div>
   );
};






export default HeroSection;