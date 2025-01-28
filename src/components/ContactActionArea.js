import React from 'react';
import './ContactAreaAction.css'; 
import contactBg from '../assets/images/contact_bg.png'; // Adjust the path as necessary

const ContactActionArea = () => {
  return (
    <div className="contact_action_area" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-md-6">
            <div className="action_heading">
              <h3>100% secure and safe</h3>
              <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.</p>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="call_add_action">
              <a href="#" className="boxed-btn3">+10 672 457 356</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactActionArea;