import React from 'react'
import './style.css'
import web from './Images/web.png'
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import naukri from './Images/naukri.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
       <footer className="footer-section mt-4">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find Me</h4>
                                <span>KN Pura Udaygiri Mysuru-19</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call Me</h4>
                                <span>9110631770</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail Me</h4>
                                <span>baludeveloper06@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={web} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                               
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to='/' >Home</Link></li>
                                <li><Link to='/skills' >Skills</Link></li>
                                <li><Link to='/projects' >Projects</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/contact' >Contact Me</Link></li>
                                <li><Link to='/cv' >Download CV</Link></li>
                                
                            
                            
                            
                            
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Social Media</h3>
                            </div>
                            <div className="footer-social-icon">
                                {/* <span>Follow us</span> */}
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><IoLogoWhatsapp/></a>
                                <a href="#"><FaLinkedin /></a>
                                <a href="#" ><img src={naukri} style={{width:'18px',}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved Balraj</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            Developed By Balraj And this site is developed Using React Js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer