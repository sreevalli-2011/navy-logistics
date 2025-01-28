import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css'; // Add your custom styles here
import section_bg04 from '../assets/images/section_bg04.jpg';
import Homepage_testi from '../assets/images/Homepage_testi.png';


// Testimonial Component
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonial-area testimonial-padding section-bg mt-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-7">
            {/* Section Title */}
            <div className="section-tittle section-tittle2 mb-25">
              <span className='section-title'>Clients Testimonials</span>
              <h2 className='section-title'>What Our Clients Say!</h2>
            </div>
            
            <Slider {...settings} className="h1-testimonial-active mb-70 slickslider">
              {/* Single Testimonial */}
              <div className="single-testimonial">
                <div className="testimonial-caption">
                  <div className="testimonial-top-cap">
                    <p>Srem ipsum adolor dfsit amet, consectetur adipiscing elit, sed dox beiusmod tempor incci didunt ut labore et dolore magna aliqua. Quis cipsucm suspendisse ultrices gravida. Risus commodo vivercra maecenas accumsan lac.</p>
                  </div>
                  <div className="testimonial-founder d-flex align-items-center">
                    <div className="founder-img">
                      <img src={Homepage_testi} alt="Jhaon Smith" />
                    </div>
                    <div className="founder-text">
                      <span>Jhaon Smith</span>
                      <p>Creative Designer</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Another Testimonial */}
              <div className="single-testimonial">
                <div className="testimonial-caption">
                  <div className="testimonial-top-cap">
                    <p>Srem ipsum adolor dfsit amet, consectetur adipiscing elit, sed dox beiusmod tempor incci didunt ut labore et dolore magna aliqua. Quis cipsucm suspendisse ultrices gravida. Risus commodo vivercra maecenas accumsan lac.</p>
                  </div>
                  <div className="testimonial-founder d-flex align-items-center">
                    <div className="founder-img">
                      <img src={Homepage_testi} alt="Jhaon Smith" />
                    </div>
                    <div className="founder-text">
                      <span>Jhaon Smith</span>
                      <p>Creative Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          {/* Form Start */}
          <div className="col-xl-4 col-lg-5 col-md-8">
            <div className="testimonial-form text-center">
              <h3 className="sub-heading">Always listening, always understanding.</h3>
              <input type="text" placeholder="Incoterms" />
              <button name="submit" className="submit-btn">Request a Quote</button>
            </div>
          </div>
          {/* Form End */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
