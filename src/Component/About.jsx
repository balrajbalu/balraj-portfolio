import React from 'react'
import './style.css'
import { Container } from 'react-bootstrap'
import { ImPointRight } from "react-icons/im";
import Card from 'react-bootstrap/Card'
const About = () => {
    return (
        <div>
            <Container>
                <div className='row about'>
                    <div className='col-sm-12 ab'>
                        <h1 className='under'>ABOUT ME</h1>
                        <Card className="quote-card-view">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                         <p style={{ textAlign: "justify" }}>
  Hi everyone, I am <span className="purple">Balraj</span> from 
  <span className="purple"> Mysuru, Karnataka, India</span>.
  <br />
  I have completed my Bachelor of Science in Computer Science from 
  <strong> JSS College of Arts, Commerce and Science, Ooty Road, Mysuru</strong> in the year 2022.
  <br />
  Following my graduation, I pursued a Full Stack Developer course to enhance and diversify my technical skill set.
  <br />
  <br />
  Currently, I am working as a <strong>MERN Stack Developer</strong> at 
  <strong> Camp Automation Pvt. Ltd.</strong>, located in Jayanagar 8th Block, Bengaluru.
  <br />
  <br />
  Apart from coding, I enjoy engaging in various extracurricular activities that contribute to my personal and professional growth.
</p>

                                    <ul>
                                        <li className="about-activity">
                                            <ImPointRight /> Learning new Skills
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Gym
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Daily Activities
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Social Media
                                        </li>
                                    </ul>

                                    <p style={{ color: "silver" }}>
                                        <b>"EDUCATION is not Learning of facts , training  mind to think better "{" "}</b>
                                    </p>
                                    <footer className="blockquote-footer"></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About