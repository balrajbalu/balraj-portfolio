// Services.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style.css';

const Services = () => {
  return (
    <Container className="container mt-5">
      <Row className="services-row mt-3">
        <Col>
          <div className="service-item">
            <h4>1. Website Development</h4>
            <p>We create modern and responsive websites tailored to your needs.</p>
          </div>
        </Col>
      </Row>
      <Row className="services-row mt-3">
        <Col>
          <div className="service-item">
            <h4>2. Web Application Development</h4>
            <p>Custom web applications designed for your specific requirements.</p>
          </div>
        </Col>
      </Row>
      <Row className="services-row mt-3">
        <Col>
          <div className="service-item">
            <h4>3. ERP Application Development</h4>
            <p>Enterprise Resource Planning solutions for efficient business management.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
