import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Left: Contact Info */}
            <div className="col-auto header-info-left">
              <ul>
                <li>Phone: +99 (0) 101 0000 888</li>
                <li>Email: noreply@yourdomain.com</li>
              </ul>
            </div>

            {/* Right: Social Icons */}
            <div className="col-auto header-info-right">
              <ul className="header-social">
                <li>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li>
                  <a href="#"><i className="fab fa-google-plus-g"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="header-divider" />

      {/* Sticky Navigation */}
      <nav className="navbar navbar-expand-lg sticky-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
           
           <h3>NAVY MERCHANT</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/blog">Blog</a></li>
                  <li><a className="dropdown-item" href="/blog-details">Blog Details</a></li>
                  <li><a className="dropdown-item" href="/elements">Elements</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/blog">Customer Details</a></li>
                  <li><a className="dropdown-item" href="/blog-details">Vendor Details</a></li>
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

