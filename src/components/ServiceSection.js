import React from 'react';
import"./ServiceSection.css";

const ServicesSection = () => {
  return (
    <div className="categories-area py-5">
      <div className="container">
        {/* Section Title */}
        <div className="row mb-4 text-center mt-5">
          <div className="col-lg-12">
            <h2 className="font-weight-bold">What We Can Do For You</h2>
            <p className="text-muted">Our range of services to meet your needs.</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row">
          {/* Single Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="single-cat position-relative">
              <div className="icon mb-4">
                <i className="fas fa-truck fa-3x"></i>
              </div>
              <h5 className="cat-title">Land Transport</h5>
              <p className="cat-description">
                Reliable and efficient land transportation tailored for your needs.
                Reliable and efficient land transportation tailored for your needs.
              </p>
            </div>
          </div>

          {/* Single Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="single-cat position-relative">
              <div className="icon mb-4">
                <i className="fas fa-ship fa-3x"></i>
              </div>
              <h5 className="cat-title">Ship Transport</h5>
              <p className="cat-description">
                Comprehensive ship transport services for global connections.
                Reliable and efficient land transportation tailored for your needs.
              </p>
            </div>
          </div>

          {/* Single Service */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="single-cat position-relative">
              <div className="icon mb-4">
                <i className="fas fa-plane fa-3x"></i>
              </div>
              <h5 className="cat-title">Air Transport</h5>
              <p className="cat-description">
                Fast and secure air freight solutions for critical shipments.
                Reliable and efficient land transportation tailored for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

