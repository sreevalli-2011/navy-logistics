
import React from 'react';
import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import InfoSection from './components/InfoSection';
import ServiceSection from './components/ServiceSection';
import About from './components/About';
import Contact from './components/Contact';
import './components/BlogArea';
import BlogArea from './components/BlogArea';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component */}
      <BannerCarousel />
      <InfoSection />
      <ServiceSection />
      <About/>
    <Contact/>
    <BlogArea/>
    <Testimonial/>
    <Footer/>
      
    </div>
  );
}

export default App;
