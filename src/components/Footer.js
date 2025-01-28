import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        {/* Row 1: Left Text and Right Phone Number */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <h4 className="footer-heading">
              We Understand The Importance of Approaching Each Work!
            </h4>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="footer-phone">+1 212-683-9756</p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Row 2: Four Columns */}
        <div className="row">
          <div className="col-md-3">
            <h6 className="footer-tittle">Company</h6>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="footer-tittle">Open Hours</h6>
            <ul>
              <li>Monday - Friday: 9 AM - 5 PM</li>
              <li>Saturday: 10 AM - 4 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="footer-tittle">Resources</h6>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="footer-tittle">Follow Us</h6>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Row 3: Copywrite Section */}
        <div className="footer-bottom text-center mt-4">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              Sree
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

