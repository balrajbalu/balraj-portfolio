
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import './style.css';
import {  Modal } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [showModal, setShowModal] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_2n2mten";
    const templateId = "template_7bl79yt";
    const userId = "8_UDgTwFtALGv-xrn";
  
    const templateParams = {
      to_name: "Balraj", 
      from_name: formData.email,
      first_name: formData.name, 
      last_name: "", 
      description: formData.description,
    };
  
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        
        setFormData({ name: "", email: "", description: "" });
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  return (
    <div>
    <Form onSubmit={handleSubmit} className="container mt-5">
      <Form.Group controlId="name" className="form-group">
        <Form.Label style={{color:'silver'}}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="email" className="form-group">
        <Form.Label style={{color:'silver'}}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group controlId="description" className="form-group">
        <Form.Label style={{color:'silver'}}>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="form-control textarea"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We'll get back to you soon.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactForm;
