// MainNavbar.jsx
import React from 'react';
import logo from './Images/logo.png';
import './style.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const MainNavbar = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };
    return (
        <div className='container-fluid sticky'>
            <div className='row'>
                <div className='col-sm-3'>
                    <img src={logo} alt='logo' className='logo mt-4' />
                </div>
                <div className='col-sm-8 mob'>
                    <Navbar bg="transparent" expand="sm" className='pt-3 sticky-navbar'>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ml-auto">
                                <Link to='/' className="navbar-link">
                                    <b className='btn'>Home</b>
                                </Link>
                                <Link to='/skills' className="navbar-link">
                                    <b className='btn'>SKILLS</b>
                                </Link>
                                <Link to='/projects' className="navbar-link">
                                    <b className='btn'>Projects</b>
                                </Link>
                                <Link to='/services' className="navbar-link">
                                    <b className='btn'>Services</b>
                                </Link>
                                <Link to='/cv' className="navbar-link">
                                    <b className='btn'>Download CV</b>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className='col-sm-1 new-nav'>
                    <div>
                        <div id="mySidenav" className="sidenav">
                            {/* <a href="/" onClick={closeNav}>
                                Home
                            </a> */}
                            <Link to='/' onClick={closeNav}>Home</Link>
                            <Link to='/skills' onClick={closeNav}>Skills</Link>
                            <Link to='/projects' onClick={closeNav}>Projects</Link>
                            <Link to='/services' onClick={closeNav}>Services</Link>
                            <Link to='/cv' onClick={closeNav}>Download CV</Link>
                            {/* <a href="/skills" onClick={closeNav}>
                                Skills
                            </a>
                            <a href="#" onClick={closeNav}>
                                Projects
                            </a>
                            <a href="#" onClick={closeNav}>
                                Services
                            </a>
                            <a href="#" onClick={closeNav}>
                                Download CV
                            </a> */}
                        </div>
                        <span
                            style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }}
                            onClick={openNav}
                        >
                            &#9776;
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainNavbar;
