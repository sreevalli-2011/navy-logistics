import React from 'react';
import './Contact.css'; // Import the CSS file for custom styles

const Contact = () => {
    return (
       
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="contact-form-area">
                    <div className="contact-form-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                {/* Section Title */}
                                <div className="section-title mb-50">
                                    <span>Get a Quote For Free</span>
                                    
                                    <h2 className="subheading">Request a Free Quote</h2>

                                    <p className="paragraph">Brook presents your services with flexible, convenient, and compact layouts. You can select your favorite layouts & elements for.</p>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="input-form">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="input-form">
                                        <input type="text" placeholder="Contact Number" />
                                    </div>
                                </div>
                                <div className="input-form">
                                  <select name="select" id="select1" className='nice-select'>
                                    <option value="">Freight Type</option>
                                     <option value="">Categories One</option>
                                    <option value="">Categories Two</option>
                                    <option value="">Categories Three</option>
                                    <option value="">Categories Four</option>
                                  </select>
                              </div>
                               
                                <div className="col-lg-6 col-md-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="City of Departure" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Incoterms" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Weight" />
                                    </div>
                                </div>
                                {/* Height Width length */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Height" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Width" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Width" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="input-form">
                                        <input type="text" placeholder="Length" />
                                    </div>
                                    
                                </div>
                                {/* Radio Button */}
                                <div className="col-lg-12">
                                    <div className="radio-wrapper mb-30 mt-15">
                                        <label>Extra services:</label>
                                        <div className="select-radio">
                                            <div className="radio">
                                                <input id="radio-1" name="radio" type="radio" checked="" />
                                                <label for="radio-1" className="radio-label">Freight</label>
                                            </div>
                                            <div className="radio">
                                                <input id="radio-2" name="radio" type="radio" />
                                                <label for="radio-2" className="radio-label">Express Delivery</label>
                                            </div>
                                            <div className="radio">
                                                <input id="radio-3" name="radio" type="radio" />
                                                <label for="radio-3" className="radio-label">Insurance</label>
                                            </div>
                                            <div className="radio">
                                                <input id="radio-4" name="radio" type="radio" />
                                                <label for="radio-4" className="radio-label">Packaging</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="col-lg-12 mt-3">
                                    <button name="submit" className="submit-btn">Request a Quote</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Contact;



