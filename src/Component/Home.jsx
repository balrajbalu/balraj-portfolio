import React from 'react'
import MainNavbar from './MainNavbar'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from 'react';
import balu from './Images/Balraj.png'
import mobileImage from './Images/BalrajMobile.png'
import prize from './Images/prize-removebg-preview (1).png'
import About from './About';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const texts = ['SOFTWARE DEVELOPER', 'WEB DEVELOPER', 'ERP DEVELOPER', 'FULLSTACK DEVELOPER', 'NATIVE APP DEVELOPER'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationStarted && window.scrollY > 100) {
        setAnimationStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationStarted]);

  const contact = () => {
    navigate('/contact')
  }
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-sm-9'>
            <h1 className='anitext'>{texts[currentIndex]}</h1>
            <div className='name'>
              <h3>
                Hello there! 👋🏻<br />
                I'm <strong>Balraj</strong>, a passionate <strong>Software & Web Developer</strong> committed to building modern, scalable, and user-centric digital solutions. With expertise in full-stack development, I create high-performance applications that solve real-world problems and enhance user experiences.<br /><br />
                From crafting clean code and responsive UIs to integrating complex backend systems, I bring both creativity and technical precision to every project. Leveraging technologies like JavaScript, MERN stack, and automation tools, I aim to deliver impactful software that drives results.<br /><br />
                Let’s collaborate and turn bold ideas into robust digital products!
              </h3>

            </div>
            <div className="button-borders pt-4">
              <button className="primary-button" onClick={contact}> HIRE ME
              </button>
            </div>
          </div>
          <div className='col-sm-3 image-box pt-4'>
            {/* Desktop Image */}
            <img
              src={balu}
              alt='Balraj desktop'
              className='baluimg d-none d-sm-block'
              style={{ borderRadius: '20px' }}
            />

            {/* Mobile Image */}
            <img
              src={mobileImage}
              alt='Balraj mobile'
              className='baluimg d-block d-sm-none'
              style={{ borderRadius: '20px' }}
            />
          </div>

        </div>
        <div className='row prizediv'>
          <div className='col-sm-4'>
            <img src={prize} alt='balraj image' className='prizeimg' />
          </div>
          <div className='col-sm-8'>
            <div className={`achievement-highlight ${animationStarted ? 'slide-in' : ''}`}>
              <h2 className="highlight-title">
                🏆 Best in Technical Knowledge
                <br />
                I am proud to announce that I have been awarded the prestigious "Best in Technical Knowledge" prize.
                This recognition is a testament to my commitment to excellence in the field of technology.
                It reflects the dedication and passion I bring to staying at the forefront of technical advancements.
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <About />
    </div>
  )
}

export default Home