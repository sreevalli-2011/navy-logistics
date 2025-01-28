import React from 'react';
import './BlogArea.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import blog01 from '../assets/images/blog01.png';
import blog1 from '../assets/images/blog1.png';
import blog02 from '../assets/images/blog02.png';


const BlogArea = () => {
    return (
        <div className="home-blog-area section-padding30 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="subheading text-center mb-70">
                            <span>Our Recent news</span>
                            <h2>Tourist Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog01} alt="Blog 1" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>SEP</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-user"></i> Jessica Temphers</a></li>
                                        <li><a href="#"><i className="fas fa-comment-alt"></i> 12</a></li>
                                    </ul>
                                    <h3 className="blog-text"><a href="#">Here’s what you should know before.</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog1} alt="Blog 1" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>SEP</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-user"></i> Jessica Temphers</a></li>
                                        <li><a href="#"><i className="fas fa-comment-alt"></i> 12</a></li>
                                    </ul>
                                    <h3 className="blog-text"><a href="blog_details.html">Here’s what you should know before.</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog02} alt="Blog 1" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>SEP</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-user"></i> Jessica Temphers</a></li>
                                        <li><a href="#"><i className="fas fa-comment-alt"></i> 12</a></li>
                                    </ul>
                                    <h3 className='blog-text'><a href="#">Here’s what you should know before.</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArea;
