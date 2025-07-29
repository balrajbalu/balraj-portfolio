import React from 'react';
import MainNavbar from './MainNavbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Projects from './Projects';
import ResumeNew from './Cv';
import ServicesPage from './ServicesPage';
import ContactUs from './ContactUs';
import bgVideo from '../Component/videos/bgvideo.mp4';

const Main = () => {
  return (
    <div className="main-container">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="video-overlay"></div>
      <div className="content-wrapper">
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/cv" element={<ResumeNew />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
