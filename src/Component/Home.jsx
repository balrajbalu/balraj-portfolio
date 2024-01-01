import React from 'react'
import MainNavbar from './MainNavbar'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from 'react';
import balu from './Images/balu.png'
import prize from './Images/prize-removebg-preview (1).png'
import About from './About';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const texts = ['WEB DEVELOPER', 'SOFTWARE DEVELOPER', 'ERP DEVELOPER', 'FULLSTACK DEVELOPER'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate();
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

  const contact=()=>{
    navigate('/contact')
  }
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-sm-9'>
            <h1 className='anitext'>{texts[currentIndex]}</h1>
            <div className='name'>
              <h3>Hello there!👋🏻<br /> I'm Balraj, a passionate web developer dedicated to crafting meaningful
                and user-friendly digital experiences. With a strong foundation in programming and a
                creative mindset, I strive to bring innovative solutions to the world of technology.
                Let's collaborate and build something extraordinary together!</h3>
            </div>
            <div className="button-borders pt-4">
              <button className="primary-button" onClick={contact}> HIRE ME
              </button>
            </div>
          </div>
          <div className='col-sm-3 image-box pt-4'>
            <img src={balu} style={{ borderRadius: '20px' }} alt='balraj image' className='baluimg ' />
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