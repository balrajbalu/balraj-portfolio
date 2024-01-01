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
                                        Hi Everyone, I am <span className="purple">Balraj </span>
                                        from <span className="purple"> MYSURU KARNATAKA ,INDIA</span>
                                        <br /> I am Completed bachelour of science in computer Science
                                        In 'JSS COLLEGE OF ARTS COMMERCE AND SCEIENCE OOTY ROAD MYSURU' in the Year od 2022
                                        And After that i Joined Full stack developer Course which is plus point to increase my skills
                                        <br />
                                        Additionally, I am currently employed as a software developer at
                                        JAYBLUES AND TECHNOLOGIES.
                                        <br />
                                        <br />
                                        Apart from coding, some other activities that I love to do!
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