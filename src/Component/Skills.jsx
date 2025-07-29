import React from 'react'
import './style.css'
import { Col, Container, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiNodejs,
    DiGit,
    DiJava,
} from "react-icons/di";
import {SiMysql} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
import html from './Images/html.png';
import css from './Images/css.png'
import js from './Images/javascript.png'
import js1 from './Images/js.gif'
import react from './Images/react.png'
import node from './Images/node.png'
import bootstrap from './Images/bootstrap.png'
import ci from './Images/ci.png'
import express from './Images/express.png'
import java from './Images/java.png'
import mysql from './Images/mysql.png'
import git from './Images/git.png'
import github from './Images/github.png'
import php from './Images/icons8-php-80.png'
import vscode from './Images/vscode.png'
import jquery from './Images/jquery.png'
import mongo from './Images/mongo.svg'
const Skills = () => {
    return (
        <div>
            <div className='skills'>
             
                <h1 style={{ textAlign: 'center',color:'silver' }}>SKILLS</h1>
                
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={react} style={{width:'50%'}} alt='react'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={mongo} alt='Mongo Db' style={{height:"60px"}}/>
                    </Col>
                    
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={express} style={{width:'50%'}}  alt='express js'/>
                    </Col>
                    
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={node} style={{width:'50%'}} alt='nodejs'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={js1} alt='js'/>
                    </Col>
                    
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={html} alt='html'/>
                    </Col>
                    
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={css} alt='css'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={bootstrap} style={{width:'50%'}}  alt='bootstrap'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={ci} style={{width:'50%'}}  alt='ci'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={php} style={{width:'50%'}}  alt='php'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={mysql} style={{width:'50%'}}  alt='mysql'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={java} style={{width:'50%'}}  alt='java'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={jquery} style={{width:'50%'}}  alt='jquery'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={git} style={{width:'50%'}}  alt='git'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={github} style={{width:'50%'}}  alt='github'/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                    <img src={vscode} style={{width:'50%'}}  alt='vscode'/>
                    </Col>
                   
                </Row>
                <Container>
                <div className='row'>
                    <div className='col-sm-6 ' style={{color:'silver'}}>
                        <b>JavaScript</b>
                        <ProgressBar className='progressbar' now={100} />
                        <b>React Js</b>
                        <ProgressBar className='progressbar' now={100} />
                        <b>Node Js</b>
                        <ProgressBar className='progressbar' now={100} />
                         <b>Mongo DB</b>
                        <ProgressBar className='progressbar' now={90} />
                        <b>HTML</b>
                        <ProgressBar className='progressbar' now={100} />
                        <b>CSS</b>
                        <ProgressBar className='progressbar' now={100} />
                        <b>Bootstrap</b>
                        <ProgressBar className='progressbar' now={90} />
                        
                        <b>React Bootstrap</b>
                        <ProgressBar className='progressbar' now={90} />
                    </div>
                    <div className='col-sm-6 ' style={{color:'silver'}}>
                        <b>PHP</b>
                        <ProgressBar className='progressbar' now={90} />
                        <b>Codeigniter</b>
                        <ProgressBar className='progressbar' now={90} />
                        <b>MySql</b>
                        <ProgressBar className='progressbar' now={90} />
                        <b>JQuery</b>
                        <ProgressBar className='progressbar' now={70} />
                        <b>Java</b>
                        <ProgressBar className='progressbar' now={50} />
                    </div>
                </div>
                </Container>
            </div>
        </div>
    )
}

export default Skills