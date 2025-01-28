import React from 'react';
import './About.css'; 

import banner from "../assets/images/about2.png"; 

const About = () => {
  return (
    <div className="about-low-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              {/* Section Title */}
              <div className="section-tittle mb-35">
                <span className="section-subtitle">About Our Company</span> {/* Subtitle below main title */}
                <h2 className="main-title">Safe Logistic Transport<br /> Solutions That Saves<br /> our Valuable Time!</h2>
              </div>
              <p className="intro-text">
                Brook presents your services with flexible, convenient and compose layouts. You can select your favorite layouts &amp; elements for customizations with unlimited possibilities. Pixel-perfect replication of the designers is intended.
              </p>
              <p className="additional-text">
                Brook presents your services with flexible, convenient and client-oriented layouts. You can select your favorite layouts.
              </p>
              <a href="about.html" className="btn">More About Us</a> {/* Button for more details */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            {/* About Images */}
            <div className="about-img">
              <div className="about-font-img">
                <img src={banner} alt="About Us" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
