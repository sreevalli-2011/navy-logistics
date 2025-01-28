
import React from "react";
import Slider from "react-slick"; // Import React Slick
import "./BannerCarousel.css"; // Import custom styling

// Import images
import banner from "../assets/images/h1_hero.jpg";
import h2Hero from "../assets/images/h1_hero2.jpg";
import h3Hero from "../assets/images/h1_hero3.jpg";

const BannerCarousel = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of transition
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed
    pauseOnHover: true, // Pause on hover
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="carousel-item">
          <img className="carousel-image" src={banner} alt="Slide 1" />
          <div className="carousel-content">
            <h1 className="hero-heading">Safe & Reliable <span className="subheading">Logistic</span> Solutions!</h1>
            <p className="hero-description">
              Tracking made easy and fast for all your shipments.
            </p>
            <form className="tracking-form">
              <input
                type="text"
                className="tracking-input"
                placeholder="Enter Your Tracking ID"
              />
              <button className="tracking-button" type="submit">
                Track & Trace
              </button>
            </form>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img className="carousel-image" src={h2Hero} alt="Slide 2" />
          <div className="carousel-content">
            <h1 className="hero-heading">Quick and Easy Delivery</h1>
            <p className="hero-description">
              Experience hassle-free delivery across the globe.
            </p>
            <form className="tracking-form">
              <input
                type="text"
                className="tracking-input"
                placeholder="Enter Your Tracking ID"
              />
              <button className="tracking-button" type="submit">
                Track & Trace
              </button>
            </form>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img className="carousel-image" src={h3Hero} alt="Slide 3" />
          <div className="carousel-content">
            <h1 className="hero-heading">Track Your Shipments in Real-Time</h1>
            <p className="hero-description">
              Stay updated with your package location and status.
            </p>
            <form className="tracking-form">
              <input
                type="text"
                className="tracking-input"
                placeholder="Enter Your Tracking ID"
              />
              <button className="tracking-button" type="submit">
                Track & Trace
              </button>
            </form>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;

