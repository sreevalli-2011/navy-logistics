import React from "react";
import "./InfoSection.css"; // Optional CSS for custom styling
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa"; // React Icons for icons

const InfoSection = () => {
  return (
    <div className="our-info-area pt-70 pb-40">
      <div className="container">
        <div className="row">
          {/* Column 1: Call Us Anytime */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-info mb-30">
              <div className="info-icon">
                <FaPhoneAlt size={32} color="#1e2a47" />
              </div>
              <div className="info-caption">
                <p>Call Us Anytime</p>
                <span>+ (123) 1800-567-8990</span>
              </div>
            </div>
          </div>

          {/* Column 2: Operating Hours */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-info mb-30">
              <div className="info-icon">
                <FaClock size={32} color="#1e2a47" />
              </div>
              <div className="info-caption">
                <p>Sunday CLOSED</p>
                <span>Mon - Sat 8.00 - 18.00</span>
              </div>
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-info mb-30">
              <div className="info-icon">
                <FaMapMarkerAlt size={32} color="#1e2a47" />
              </div>
              <div className="info-caption">
                <p>Columbia, SC 29201</p>
                <span>USA, New York - 10620</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
