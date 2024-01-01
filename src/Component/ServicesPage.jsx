// ServicesPage.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Services from "./Services";
import ContactForm from "./ContactForm";
import './style.css';

const ServicesPage = () => {
  return (
    <Container className="mt-5">
     
      <Row className="mt-3">
        <Col md={6}>
        <h2 style={{color:'silver'}}>Our Services</h2>
          <Services />
        </Col>
        <Col md={6}>
          <h2 style={{color:'silver'}}>Contact Me</h2>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
